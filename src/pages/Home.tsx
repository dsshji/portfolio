import OrbitHero from '@/hero/OrbitHero';
import { ROLE } from '@/data/about';

/* HOME — deliberately just the orbital hero. Nothing else: no lists, no
   "now", no footer (see Layout). The orbit is the whole page and the whole
   nav; everything else is one click away via a satellite or the menu.
   Calm, spacious, one loud floating detail — as intended. */
export default function Home() {
  return (
    <>
      {/* one h1 — hidden; the hero carries the identity visually */}
      <h1 className="visually-hidden">Daria Lobanova — {ROLE}</h1>
      <OrbitHero />
    </>
  );
}
