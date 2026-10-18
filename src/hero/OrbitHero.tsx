import './OrbitHero.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ORBIT } from '@/data/orbit';
import type { OrbitItem } from '@/data/orbit';
import { ROLE, LOCATIONS } from '@/data/about';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

/* ═══════════════════════════════════════════════════════════════
   ORBIT HERO — a calm, spacious floating orbit. Placeholder tiger head
   at center; "bird" satellites (colored dots for now) drift around it
   like planets and double as the nav — hover/focus freezes the orbit
   and reveals a clean label; click navigates.

   Owner drops the real 3D tiger into `.orbit-core` and swaps the dots
   for bird models later; the orbit/labels/links are model-agnostic.

   Degrades: focusable links · reduced-motion freezes the ring · mobile
   reflows to a tappable labeled list · rAF pauses off-screen.
   ═══════════════════════════════════════════════════════════════ */

export default function OrbitHero() {
  const reduced = usePrefersReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);
  const satRefs = useRef<(HTMLElement | null)[]>([]);
  const paused = useRef(false);
  const [hintOn, setHintOn] = useState(true);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const mobile = matchMedia('(max-width: 620px)');
    const angles = ORBIT.map((o) => o.phase);

    const place = () => {
      const base = Math.min(stage.clientWidth, stage.clientHeight) * 0.5;
      ORBIT.forEach((o, i) => {
        const el = satRefs.current[i];
        if (!el) return;
        if (mobile.matches) {
          el.style.transform = '';
          return;
        }
        const x = Math.cos(angles[i]) * o.rf * base;
        const y = Math.sin(angles[i]) * o.rf * base * o.ry;
        el.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
      });
    };
    place();

    let raf = 0;
    let last = performance.now();
    let onScreen = true;
    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      if (!reduced && !mobile.matches && !paused.current && onScreen) {
        ORBIT.forEach((o, i) => (angles[i] += o.speed * dt));
        place();
      }
      raf = requestAnimationFrame(frame);
    };
    if (!reduced) raf = requestAnimationFrame(frame);

    const io = new IntersectionObserver(([e]) => (onScreen = e.isIntersecting), {
      threshold: 0.05,
    });
    io.observe(stage);
    addEventListener('resize', place);
    mobile.addEventListener('change', place);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      removeEventListener('resize', place);
      mobile.removeEventListener('change', place);
    };
  }, [reduced]);

  const freeze = () => {
    paused.current = true;
    setHintOn(false);
  };
  const unfreeze = () => {
    paused.current = false;
  };

  const renderSat = (o: OrbitItem, i: number) => {
    const style = { ['--c' as string]: o.color } as React.CSSProperties;
    const inner = (
      <>
        <span className="sat-dot" style={{ width: o.size, height: o.size }} />
        <span className="sat-label">
          {o.label}
          {o.kind === 'project' && <em className="sat-kind"> ↗</em>}
        </span>
      </>
    );
    const shared = {
      className: `sat sat--${o.kind}`,
      style,
      onMouseEnter: freeze,
      onMouseLeave: unfreeze,
      onFocus: freeze,
      onBlur: unfreeze,
      ref: (el: HTMLElement | null) => (satRefs.current[i] = el),
    };
    return o.external ? (
      <a key={o.id} {...(shared as object)} href={o.to}>
        {inner}
      </a>
    ) : (
      <Link key={o.id} {...(shared as object)} to={o.to}>
        {inner}
      </Link>
    );
  };

  return (
    <section className="orbit-stage" ref={stageRef} aria-label="Home">
      {/* PLACEHOLDER tiger head — owner replaces with the 3D model */}
      <div className="orbit-core" aria-hidden="true">
        <span className="orbit-core-note">tiger head</span>
      </div>

      <nav className="orbit-nav" aria-label="Main">
        {ORBIT.map(renderSat)}
      </nav>

      <p className={`orbit-hint mono${hintOn ? '' : ' gone'}`} aria-hidden="true">
        hover the orbit ↯
      </p>
      <p className="orbit-caption mono">
        {ROLE} · {LOCATIONS}
      </p>
    </section>
  );
}
