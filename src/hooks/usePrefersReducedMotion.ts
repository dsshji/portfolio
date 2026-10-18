import { useEffect, useState } from 'react';

/* Reactively tracks prefers-reduced-motion. Components that animate in JS
   (the trailing preview, the eventual hero) read this to disable motion —
   the CSS media query in global.css is the blanket net; this is for the
   behaviors that live in JavaScript (brief §9). */
export function usePrefersReducedMotion(): boolean {
  const query = '(prefers-reduced-motion: reduce)';
  const [reduced, setReduced] = useState(
    () => typeof matchMedia !== 'undefined' && matchMedia(query).matches,
  );

  useEffect(() => {
    const mql = matchMedia(query);
    const onChange = () => setReduced(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, []);

  return reduced;
}
