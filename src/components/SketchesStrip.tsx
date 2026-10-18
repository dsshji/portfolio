import './SketchesStrip.css';
import { useEffect, useRef } from 'react';
import type { Sketch } from '@/data/types';
import { p5FullUrl } from '@/data/types';
import { asset } from '@/lib/asset';

/* ═══════════════════════════════════════════════════════════════
   SKETCHES GALLERY — asymmetric: each tile keeps its sketch's native
   size/aspect (from data/sketches.ts `w`/`h`) and scales down only when
   the column is narrower than the sketch. Live embeds are MUTED via
   allow="autoplay 'none'" (no need to touch the sketch code). Camera
   sketches show a muted looping video cover instead of a live iframe.
   Click any tile → opens it on the p5 editor.
   ═══════════════════════════════════════════════════════════════ */

interface Props {
  sketches: Sketch[];
  showCaptions?: boolean;
}

function TileMedia({ s }: { s: Sketch }) {
  if (s.embeddable && !s.thumb) {
    return (
      <iframe
        className="tile-embed"
        src={p5FullUrl(s.sketchId)}
        title={s.caption}
        loading="lazy"
        tabIndex={-1}
        aria-hidden="true"
        data-w={s.w}
        style={{ width: s.w, height: s.h }}
        /* muted: deny autoplay so sound sketches stay silent in preview */
        allow="autoplay 'none'; microphone 'none'; camera 'none'"
      />
    );
  }
  if (s.cover || s.thumb) {
    const src = asset((s.cover || s.thumb) as string);
    return /\.(mp4|webm|mov)$/i.test(src) ? (
      <video className="tile-cover" src={src} autoPlay muted loop playsInline />
    ) : (
      <img className="tile-cover" src={src} alt={s.caption} />
    );
  }
  // camera sketch, no cover yet — plain green placeholder (swap `cover` later)
  return (
    <div className="tile-cam tile-cam--green">
      <span className="tile-cam-note">video cover</span>
    </div>
  );
}

export default function SketchesStrip({ sketches, showCaptions = false }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  // scale each live embed so its native canvas fits the tile's rendered width
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const apply = () => {
      root.querySelectorAll<HTMLIFrameElement>('.tile-embed').forEach((f) => {
        const nativeW = Number(f.dataset.w) || 1;
        const tile = f.closest<HTMLElement>('.tile');
        if (tile) f.style.setProperty('--embed-scale', String(tile.clientWidth / nativeW));
      });
    };
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(root);
    return () => ro.disconnect();
  }, [sketches]);

  return (
    <div className="gallery" ref={rootRef}>
      {sketches.map((s) => (
        <figure
          key={s.sketchId}
          className="sketch-item"
          style={{ ['--w' as string]: s.w, ['--ar' as string]: `${s.w} / ${s.h}` }}
        >
          {/* NOT a link — the embed itself is interactive (some sketches have
              clickable buttons / click-to-change). The small corner link opens
              it full on p5. */}
          <div className="tile">
            <TileMedia s={s} />
            <span className="tile-date">{s.date}</span>
            <span className="tile-framework">{s.framework}</span>
            {s.hint && <span className="tile-hint">{s.hint}</span>}
            <a
              className="tile-open"
              href={p5FullUrl(s.sketchId)}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${s.caption} on the p5.js editor`}
            >
              open ↗
            </a>
          </div>
          {showCaptions && <figcaption className="tile-caption">{s.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}
