# Portfolio

Dark, text-first creative-technologist portfolio. Built from
`portfolio-brief.md`, starting from the `tiger-cutaway.html` proof of concept.

**Stack:** Vite + React + TypeScript + React Router. Plain CSS with design
tokens (no Tailwind). Static-deployable (Vercel / Netlify / GitHub Pages).

## Status of this draft

This pass is the **full site layout across every route**, for review. Per the
owner's direction, the **3D tiger head is a deliberate placeholder** — the real
R3F/clipping-plane hero is the owner's to build. Everything around it (routing,
componentization, content data, the work-list trailing preview, accessibility,
mobile) is done.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check + production build to /dist
npm run preview  # serve the build locally
```

## Where things live

```
src/
  styles/
    tokens.css        design system — palette, type, easing, layout (edit here)
    global.css        reset, page shell, shared primitives, reduced-motion net
    swatches.css      placeholder thumbnail gradients (sw-1…sw-4)
  data/               ALL content lives here — no content is hardcoded in components
    types.ts          content types
    projects.ts       work index + case-study bodies (selected: true → home)
    sketches.ts       dated experiments
    now.ts            hand-editable status list
    about.ts          short + long bio, role, locations
    cv.ts             CV sections + PDF path
    log.ts            short posts
    nav.ts            primary nav + social links
  hero/               the deferred 3D hero (see below)
    HeroPlaceholder.tsx  what renders now; drop the R3F Canvas in here
    heroComponents.ts    interior component REGISTRY (data — preserved system)
    heroConfig.ts        personality dials: CURIOSITY, idle thresholds, blink…
    Hero.css             stage / caption / hint / marker + callout styles
  components/         Masthead, Footer, Layout, WorkList (+ trailing preview),
                      SketchesStrip, NowBlock
  pages/             Home, Work, CaseStudy, Sketches, Log, LogPost, CV, About, NotFound
  App.tsx            route table
  main.tsx           entry
```

## Filling in content

Edit the objects in `src/data/`. Placeholders are marked `[Placeholder]` and
`[Project name]` so it's obvious what's real vs. stand-in. No biographical facts
were invented.

- Real thumbnails: set `thumb` on a project/sketch (path under `/public`); the
  placeholder swatch is used until then.
- CV PDF: drop `dasha-cv.pdf` in `/public` (path configured in `data/cv.ts`).
- Case study: add a `caseStudy` block to a project; until then its page shows a
  "write-up coming" state. The **What broke** section is required by the brief.

## Building the real hero (owner)

The head was left as a documented, swappable placeholder (brief §5.6). To wire it:

1. `npm install three @react-three/fiber @react-three/drei` (deliberately not
   installed yet — the draft doesn't ship a 3D bundle).
2. In `hero/HeroPlaceholder.tsx`, replace the `.stage-placeholder` div with an
   R3F `<Canvas>`. Keep the `.stage`, `.stage-caption`, `.hint`, and `.markers`
   shell — the real hero reuses them.
3. Load the model lazily via drei's `useGLTF(MODEL_PATH)` (Suspense fallback =
   the placeholder). Guard for WebGL failure — the page must work without it.
4. Map each `HERO_COMPONENTS` entry's `modelNode` to a node in `tiger.glb`.
5. Import the dials from `hero/heroConfig.ts` (`CURIOSITY`, `IDLE`, `BLINK`, …) —
   don't hardcode them.

The three systems the brief says to preserve are already set up as data/config:
the **component registry** (`heroComponents.ts`), the **clip-plane** approach and
**projected-callout** layer (documented in `Hero.css` + `heroConfig.ts`).
