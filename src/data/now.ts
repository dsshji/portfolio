/* NOW — a hand-editable status list (brief §4/§6). Kept trivially
   editable here rather than buried in markup: change a value, done.
   The `updated` label sits in the section header. */

import type { NowItem } from './types';

export const NOW_UPDATED = 'Jul 2026';

export const NOW: NowItem[] = [
  { label: 'building', value: 'character animation in React Three Fiber' },
  { label: 'learning', value: 'Blender' },
  { label: 'playing', value: 'Resident Evil 4' },
  { label: 'listening', value: 'KOJI 1200' },
];
