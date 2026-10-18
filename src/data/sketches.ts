/* SKETCHES — p5.js experiments (editor.p5js.org/dsshji), shown on /sketches
   as an ASYMMETRIC gallery: each tile keeps its sketch's NATIVE size/aspect
   (scaled down only when the column is too narrow). No gray mask; audio is
   muted via the embed (allow="autoplay 'none'") so you don't touch sketch code.

   ★ TWEAK THE SIZES HERE ★  The `w` / `h` on each entry are the native p5
   canvas dimensions — change them and the tile resizes. Order below is the
   display order (edit to reorder). Camera sketches use `cover` (a muted
   looping video/GIF in /public) since the webcam can't run in an iframe.           */

import type { Sketch } from './types';

export const SKETCHES: Sketch[] = [
  // interactive — small buttons can be clicked (runs embedded)
  { sketchId: '4CXvFgUWW', date: '07.25', iso: '2026-07-25', framework: 'p5', caption: 'ASCII interactive buttons', w: 600, h: 600, embeddable: true, hint: 'buttons clickable', previewSwatch: 'sw-3' },

  // camera → needs a video cover (drop file in /public, set `cover` below)
  { sketchId: '-Ihg9uGxg', date: '07.20', iso: '2026-07-20', framework: 'p5', caption: 'Finger Mask camera sketch', w: 640, h: 480, embeddable: false, cover: null /* '/sketches/Ihg9uGxg.mp4' */, previewSwatch: 'sw-4' },

  { sketchId: 'Hd9fS_QvC', date: '07.04', iso: '2026-07-04', framework: 'p5', caption: 'An image redrawn as a grid of ASCII, spreadsheet-style.', w: 700, h: 400, embeddable: true, previewSwatch: 'sw-1' },
  { sketchId: 'Zj3N9QkMv', date: '06.28', iso: '2026-06-28', framework: 'p5', caption: 'ASCII sampling over a layered photo collage.', w: 873, h: 450, embeddable: true, previewSwatch: 'sw-4' },

  { sketchId: 'tFoyYzJPh', date: '06.22', iso: '2026-06-22', framework: 'p5', caption: 'A dog, pixel-sorted into blocks.', w: 550, h: 550, embeddable: true, hint: 'click the image', previewSwatch: 'sw-2' },

  // camera → video cover
  { sketchId: 'WcGNdu6SF', date: '06.20', iso: '2026-06-20', framework: 'p5', caption: 'Live webcam feed remapped into colored cells.', w: 550, h: 550, embeddable: false, cover: null /* '/sketches/WcGNdu6SF.mp4' */, previewSwatch: 'sw-3' },
  { sketchId: 'YWJPiu8cJ', date: '06.20', iso: '2026-06-20', framework: 'p5', caption: 'Webcam video rendered live as ASCII.', w: 550, h: 550, embeddable: false, cover: null /* '/sketches/YWJPiu8cJ.mp4' */, previewSwatch: 'sw-1' },

  { sketchId: 'lHv5W3J5z', date: '06.05', iso: '2026-06-05', framework: 'p5', caption: 'An image sampled into animated ASCII.', w: 550, h: 550, embeddable: true, previewSwatch: 'sw-2' },
  { sketchId: 'GeT3VhDTN', date: '06.05', iso: '2026-06-05', framework: 'p5', caption: 'ASCII Bleach photo', w: 550, h: 550, embeddable: true, previewSwatch: 'sw-4' },

  // very wide (1584×396) — comment this one out if it crowds the gallery
  { sketchId: 'Dm2hq8Qr9', date: '06.05', iso: '2026-06-05', framework: 'p5', caption: 'A photo sampled into a long ASCII strip.', w: 1584, h: 396, embeddable: true, previewSwatch: 'sw-1' },

  { sketchId: 'Q1E5ylq14', date: '02.12', iso: '2026-02-12', framework: 'p5', caption: 'Data-viz sketch from open Moscow Metro data.', w: 1200, h: 800, embeddable: true, hint: 'click', previewSwatch: 'sw-3' },
  { sketchId: '2ntcuY4UG', date: '02.08', iso: '2026-02-08', framework: 'p5', caption: 'Generative art with text and colors.', w: 372, h: 372, embeddable: true, hint: 'click', previewSwatch: 'sw-2' },
  { sketchId: 'vbmN4aY4r', date: '02.01', iso: '2026-02-01', framework: 'p5', caption: 'Generative shapes linked by proximity lines.', w: 400, h: 400, embeddable: true, previewSwatch: 'sw-1' },
];

/** /sketches shows them in the order above (already curated). */
export const SKETCHES_DESC = SKETCHES;
/** (kept for any compact strip reuse) */
export const SKETCHES_STRIP = SKETCHES.slice(0, 6);
