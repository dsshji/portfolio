/* ═══════════════════════════════════════════════════════════════
   Content types. Every route reads typed data from /src/data — no
   content is hardcoded in components (brief §7). Fill these objects
   in; the layout never needs to change.
   ═══════════════════════════════════════════════════════════════ */

/** A link pair shown on rows and case studies. `href: null` = not yet available. */
export interface ProjectLinks {
  live?: string | null;
  code?: string | null;
}

export interface Project {
  slug: string; // URL segment: /work/[slug]
  title: string;
  year: string; // string so "2026" / "2025–26" both work
  role: string; // e.g. "design + build"
  tech: string[]; // shown as the monospace stack line
  blurb: string; // one line, unfolds on row hover
  selected: boolean; // true → appears in Home "Selected work"
  /** Real thumbnail path (in /public) once it exists. */
  thumb?: string | null;
  /** Placeholder gradient class (sw-1…sw-4) used until `thumb` is set. */
  previewSwatch: SwatchClass;
  links: ProjectLinks;

  /* ── case-study body (/work/[slug]), brief §4 template ──
     Left optional so a project can exist in the index before its
     write-up is done. The "whatBroke" section is the memorable one. */
  caseStudy?: {
    summary: string; // one-sentence description under the title
    heroMedia?: MediaRef | null; // image or video at the top
    why: string[]; // 1–2 paragraphs: the problem / the itch
    how: string[]; // one technical decision, in depth
    whatBroke: string[]; // the failure/debugging story (required section)
  };
}

/** Placeholder gradient swatches from the demo. Swap for real `thumb`s later. */
export type SwatchClass = 'sw-1' | 'sw-2' | 'sw-3' | 'sw-4';

export interface MediaRef {
  /** 'embed' = a live website shown in an iframe (src = its URL). */
  type: 'image' | 'video' | 'embed';
  src: string; // path in /public, or the site URL for 'embed'
  alt: string; // required for images (brief §9); iframe title for embeds
  poster?: string; // video poster frame
  /** embed only, when no w/h is given: the width the site is laid out at
      (in a 16:9 box) before scaling to fit. Prefer setting w/h instead. */
  embedWidth?: number;
  /** native size/shape of the media (like a sketch's w/h). The hero box keeps
      this aspect ratio instead of a fixed 16:9, so nothing gets cropped.
      For embeds it is also the size the site is laid out at before scaling. */
  w?: number;
  h?: number;
  /** let this hero break out of the narrow text column and use (almost) the
      full window width — for sites that need a real desktop layout. */
  wide?: boolean;
  /** embed only: pixels trimmed off EACH side of the laid-out site (its empty
      side margins), so the site fills the box at a bigger scale. */
  cropX?: number;
}

export interface Sketch {
  date: string; // display label, e.g. "07.08"
  iso: string; // sortable ISO date for reverse-chron ordering
  framework: string; // tool/library tag shown beside the date, e.g. "p5" or "p5 · ml5"
  caption: string; // one line
  /** p5.js Web Editor sketch id (the URL slug). Used to build the live
      embed and the "open on p5" link. */
  sketchId: string;
  /** false for camera/mic sketches that can't run in a cross-origin iframe
      (webcam won't work embedded). Those show `cover` (a video/GIF) instead,
      and still link out to the p5 editor where they DO run. */
  embeddable: boolean;
  /** NATIVE canvas size from your p5 sketch. The tile keeps this aspect
      ratio and shows at this size where there's room (scaled down to fit a
      narrow column). ← these are the numbers you tweak per sketch. */
  w: number;
  h: number;
  /** Camera sketches: path to a video/GIF cover in /public (plays muted,
      looping). Leave null to show a "runs on p5" placeholder until you add it. */
  cover?: string | null;
  /** Optional little hint shown on the tile, e.g. "click", "buttons clickable". */
  hint?: string | null;
  /** For embeddable sketches: a GIF/still override instead of the live embed. */
  thumb?: string | null;
  previewSwatch: SwatchClass; // placeholder swatch until cover/embed shows
}

/** p5.js editor URLs for a sketch id. `full` runs the sketch on its own
    (camera works there); we embed and link to it. */
export const p5FullUrl = (id: string) => `https://editor.p5js.org/dsshji/full/${id}`;

export interface NowItem {
  label: string; // building / learning / playing / listening
  value: string;
}

export interface LogPost {
  slug: string;
  title: string;
  date: string; // display
  iso: string; // sortable
  excerpt: string;
  body: string[]; // paragraphs (plain text placeholders for now)
}

/** One interior component of the cutaway hero — data only.
    See /src/hero/heroComponents.ts for the array and the swap notes. */
export interface HeroComponent {
  id: string; // hover target + marker id
  part: string; // label kicker, e.g. "jaw pivot"
  spec: string; // the thing itself, e.g. "volleyball"
  sub: string; // detail line
  /** Local 3D position of the placeholder mesh (owner replaces w/ node). */
  pos: [number, number, number];
  /** Name of the node in the eventual tiger.glb this component maps to.
      When the real model lands, geometry comes from here instead of pos. */
  modelNode: string;
}
