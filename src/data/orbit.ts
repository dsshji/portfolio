/* ═══════════════════════════════════════════════════════════════
   ORBIT NAV — the satellites that circle the tiger head on the home
   page. Each is a "bird/creature" (placeholder shapes for now) that
   doubles as navigation: hover/focus blooms a label, click goes to a
   page or project. This IS the site's main menu — there is no visible
   top nav on home (the hidden overlay menu is the fallback).

   Tuning per item:
     · rf       orbit radius as a fraction of the stage's half-min-size
     · ry       vertical squash (1 = circle, <1 = flatter ellipse)
     · speed    radians/sec (sign = direction). Small = languid.
     · phase    starting angle (radians)
     · size     satellite diameter in px
     · color    the creature's color — the multicolor "riot" lives here
   The tiger itself stays --ember; birds are the only place many colors
   are allowed (tokens.css).
   ═══════════════════════════════════════════════════════════════ */

import { NAV } from './nav';
import { accentAt } from './palette';

/** The same color the menu gives this page's heading (Menu.tsx uses
    accentAt(index + 1) over NAV), so each orbit dot matches its menu link. */
const menuColor = (to: string) => accentAt(NAV.findIndex((n) => n.to === to) + 1);

export interface OrbitItem {
  id: string;
  label: string;
  to: string;
  external?: boolean; // mailto / off-site → plain <a> in a new tab
  kind: 'page' | 'project';
  color: string;
  rf: number;
  ry: number;
  speed: number;
  phase: number;
  size: number;
}

export const ORBIT: OrbitItem[] = [
  { id: 'work', label: 'work', to: '/work', kind: 'page', color: menuColor('/work'), rf: 0.62, ry: 0.78, speed: 0.16, phase: 0.2, size: 30 },
  { id: 'sketches', label: 'sketches', to: '/sketches', kind: 'page', color: menuColor('/sketches'), rf: 0.86, ry: 0.7, speed: -0.12, phase: 2.1, size: 26 },
  { id: 'cv', label: 'cv', to: '/cv', kind: 'page', color: menuColor('/cv'), rf: 0.72, ry: 0.9, speed: 0.2, phase: 3.6, size: 22 },
  { id: 'about', label: 'about', to: '/about', kind: 'page', color: menuColor('/about'), rf: 1.02, ry: 0.64, speed: -0.09, phase: 4.7, size: 24 },
  { id: 'contact', label: 'contact', to: '/contact', kind: 'page', color: menuColor('/contact'), rf: 0.5, ry: 0.95, speed: 0.26, phase: 5.6, size: 20 },
  // a featured project rides the orbit too (brief: "either a project or a page")
  { id: 'the-party', label: 'The Party', to: '/work/the-party', kind: 'project', color: accentAt(0) /* the one color no menu heading uses */, rf: 1.16, ry: 0.72, speed: -0.07, phase: 1.1, size: 28 },
];
