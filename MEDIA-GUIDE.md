# Where to put images, GIFs, videos, CV

Everything goes in `public/` — a file at `public/work/x.gif` is used in code as `'/work/x.gif'`.

| What | Put the file in | Then set (in `src/data/projects.ts`) |
|---|---|---|
| Hover preview rectangle on /work | `public/work/` | `thumb: '/work/name.gif'` (a `.mp4`/`.webm` works too — plays muted, looping) |
| Big image/video at the top of a project page | `public/work/` | inside `caseStudy`: `heroMedia: { type: 'image', src: '/work/name.gif', alt: 'describe it' }` or `{ type: 'video', src: '/work/name.mp4', alt: '…' }` |
| Camera-sketch video covers (/sketches) | `public/sketches/` | in `src/data/sketches.ts`: `cover: '/sketches/name.mp4'` |
| CV download | `public/dasha-cv.pdf` (replace the file, same name) | nothing — the button already points there |

Tips: keep GIFs under ~4 MB (convert long ones to `.mp4`, they're 5–10× smaller);
file names: lowercase, no spaces.
