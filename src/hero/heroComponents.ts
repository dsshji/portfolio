/* ═══════════════════════════════════════════════════════════════
   INTERIOR COMPONENT REGISTRY  ← one of the three systems the brief
   says to PRESERVE (§5.4). This is DATA, not geometry, so it survives
   the swap from placeholder meshes to the real tiger.glb untouched.

   The demo had 5 components; the brief asks for 4 in the placeholder
   ("four with breathing room reads better than five crammed") — so
   the speaker was dropped. Add/remove entries here and — once the R3F
   hero is wired — each entry should automatically produce a mesh, a
   hover target, a marker dot, and a projected callout.

   THE SWAP (brief §5.4 / §5.6):
   Right now `pos` positions a placeholder mesh. When the real model
   lands, geometry comes from the node named `modelNode` inside
   tiger.glb instead — mapping id → node name is a one-line change per
   component. Keep this file as the single config the owner edits.
   ═══════════════════════════════════════════════════════════════ */

import type { HeroComponent } from '@/data/types';

export const HERO_COMPONENTS: HeroComponent[] = [
  {
    id: 'volley',
    part: 'jaw pivot',
    spec: 'volleyball',
    sub: 'outside hitter · since 2019',
    pos: [0.46, -0.34, 0.52],
    modelNode: 'node_volleyball', // TODO: match to the mesh name in tiger.glb
  },
  {
    id: 'deck',
    part: 'processing',
    spec: 'cyberdeck',
    sub: 'raspberry pi · disney princess shell',
    pos: [0.4, 0.3, -0.1],
    modelNode: 'node_cyberdeck',
  },
  {
    id: 'screen',
    part: 'optic',
    spec: 'crt panel',
    sub: 'seen from behind',
    pos: [0.3, 0.1, 0.92],
    modelNode: 'node_crt',
  },
  {
    id: 'shoe',
    part: 'actuator',
    spec: 'sambas',
    sub: 'suede · ruined by rain, twice',
    pos: [0.44, -0.62, -0.02],
    modelNode: 'node_shoe',
  },
];
