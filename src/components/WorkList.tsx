import './WorkList.css';
import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { Project } from '@/data/types';
import { accentAt } from '@/data/palette';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

/* ═══════════════════════════════════════════════════════════════
   WORK LIST — typographic rows + a preview image that TRAILS the
   cursor with a lag (brief §6). Ported from the demo's vanilla trail:
       cx += (tx - cx) * TRAIL_LERP
   The lag is the whole effect — do not make it snap.

   Reduced motion (brief §9): the trailing preview is disabled entirely;
   rows still unfold via CSS (which itself respects reduced-motion).
   ═══════════════════════════════════════════════════════════════ */

const TRAIL_LERP = 0.09; // lower = laggier. Matches the demo.

interface WorkListProps {
  projects: Project[];
}

export default function WorkList({ projects }: WorkListProps) {
  const reduced = usePrefersReducedMotion();
  const navigate = useNavigate();

  // the single floating preview element, reused across rows
  const previewRef = useRef<HTMLDivElement>(null);
  const swatchRef = useRef<HTMLDivElement>(null);

  // which project is hovered (drives the preview contents)
  const [active, setActive] = useState<Project | null>(null);

  // live cursor target (tx,ty) and the lagging position (cx,cy) live in a ref
  // so the rAF loop reads them without re-rendering.
  const cursor = useRef({ tx: 0, ty: 0, cx: 0, cy: 0, live: false });

  // ── the trail loop: run only when motion is allowed ──
  useEffect(() => {
    if (reduced) return; // no trailing preview under reduced-motion
    const onMove = (e: MouseEvent) => {
      cursor.current.tx = e.clientX;
      cursor.current.ty = e.clientY;
    };
    addEventListener('mousemove', onMove);

    let raf = 0;
    const trail = () => {
      const c = cursor.current;
      c.cx += (c.tx - c.cx) * TRAIL_LERP;
      c.cy += (c.ty - c.cy) * TRAIL_LERP;
      if (c.live && previewRef.current) {
        previewRef.current.style.left = c.cx + 'px';
        previewRef.current.style.top = c.cy + 'px';
      }
      raf = requestAnimationFrame(trail);
    };
    raf = requestAnimationFrame(trail);

    return () => {
      removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [reduced]);

  const show = (p: Project) => {
    cursor.current.live = true;
    setActive(p);
    previewRef.current?.classList.add('on');
  };
  const hide = () => {
    cursor.current.live = false;
    previewRef.current?.classList.remove('on');
  };

  return (
    <>
      <ul className="list">
        {projects.map((p, i) => (
          <li
            key={p.slug}
            className="row"
            style={{ ['--c' as string]: accentAt(i) }}
            onMouseEnter={() => show(p)}
            onMouseLeave={hide}
            // click anywhere on the card → open the project (the title link
            // handles its own click, so ignore clicks that started on a link)
            onClick={(e) => {
              if ((e.target as HTMLElement).closest('a')) return;
              hide();
              navigate(`/work/${p.slug}`);
            }}
          >
            {/* colored "bird" dot — ties the list to the home orbit */}
            <span className="row-dot" aria-hidden="true" />
            <span className="year">{p.year}</span>
            <div>
              <Link to={`/work/${p.slug}`} className="title">
                {p.title}
              </Link>
              <p className="blurb">{p.blurb}</p>
            </div>
            <span className="stack">{p.tech.join(' · ')}</span>
          </li>
        ))}
      </ul>

      {/* Trailing preview — decorative, so aria-hidden. Shows the real
          thumbnail if the project has one, else the placeholder swatch. */}
      {!reduced && (
        <div className="preview" ref={previewRef} aria-hidden="true">
          {active?.thumb ? (
            /\.(mp4|webm|mov)$/i.test(active.thumb) ? (
              <video key={active.thumb} src={active.thumb} autoPlay muted loop playsInline />
            ) : (
              <img src={active.thumb} alt="" />
            )
          ) : (
            <div
              ref={swatchRef}
              className={`swatch ${active?.previewSwatch ?? 'sw-1'}`}
            />
          )}
        </div>
      )}
    </>
  );
}
