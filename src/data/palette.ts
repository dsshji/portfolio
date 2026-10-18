/* Shared accent palette — the same "bird" colors as the home orbit.
   Used as DECORATIVE per-item accents across interior pages so the whole
   site feels as colorful/playful as the landing. Crimson stays the single
   interactive accent; these are decoration only. */
export const ACCENTS = [
  '#4aa5ff', // blue
  '#3ddc84', // green
  '#ffd000', // yellow
  '#ff2d95', // magenta
  '#b06bff', // purple
  '#ff7a18', // orange (ember)
];

export const accentAt = (i: number) => ACCENTS[i % ACCENTS.length];
