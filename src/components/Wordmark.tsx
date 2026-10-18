import './Wordmark.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { WORDMARK } from '@/data/nav';
import { ACCENTS } from '@/data/palette';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

/* Name, top-left, in the heading font. Glitches IN on first load (Layout
   stays mounted, so it doesn't replay on navigation), then throws an
   occasional short glitch burst at a random interval. The two ghost layers
   take two random accent colors from the shared palette, new each time.
   Hidden while the menu is open (see Menu.tsx / Wordmark.css).
   Reduced motion → plain static name, no glitching.
   Change the name in data/nav.ts (WORDMARK). */

const BURST_MS = 380; // how long one glitch burst lasts
const GAP_MIN_MS = 4500; // random wait between bursts: min…
const GAP_MAX_MS = 10000; // …max

/** two different random accent colors */
function pickPair(): [string, string] {
  const a = Math.floor(Math.random() * ACCENTS.length);
  let b = Math.floor(Math.random() * (ACCENTS.length - 1));
  if (b >= a) b += 1;
  return [ACCENTS[a], ACCENTS[b]];
}

export default function Wordmark() {
  const reduced = usePrefersReducedMotion();
  const [bursting, setBursting] = useState(false);
  const [pair, setPair] = useState<[string, string]>(pickPair);

  useEffect(() => {
    if (reduced) return;
    let t: number;
    const schedule = () => {
      const wait = GAP_MIN_MS + Math.random() * (GAP_MAX_MS - GAP_MIN_MS);
      t = window.setTimeout(() => {
        setPair(pickPair());
        setBursting(true);
        t = window.setTimeout(() => {
          setBursting(false);
          schedule();
        }, BURST_MS);
      }, wait);
    };
    schedule();
    return () => window.clearTimeout(t);
  }, [reduced]);

  return (
    <Link
      to="/"
      className={`wordmark${reduced ? '' : ' wordmark--in'}${bursting ? ' is-glitching' : ''}`}
      style={{ ['--g1' as string]: pair[0], ['--g2' as string]: pair[1] }}
      aria-label={`${WORDMARK} — home`}
    >
      {/* data-text feeds the two colored ghost layers (CSS ::before/::after) */}
      <span className="wordmark-text" data-text={WORDMARK} aria-hidden="true">
        {WORDMARK}
      </span>
    </Link>
  );
}
