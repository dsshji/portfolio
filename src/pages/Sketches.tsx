import SketchesStrip from '@/components/SketchesStrip';
import { SKETCHES_DESC } from '@/data/sketches';

/* /sketches — the full dated grid, reverse-chronological, with captions.
   Structurally distinct from /work: no case studies, just experiments
   (brief §4). */
export default function Sketches() {
  return (
    <div className="page" style={{ ['--page' as string]: '#3ddc84' }}>
      <header className="page-head">
        <h1>Sketches</h1>
        <p className="lede">
          A few days for each experiment. Made for fun, easy on purpose.
        </p>
      </header>

      <section aria-label="All sketches">
        <div className="label">
          <h2 className="mono section-head">All sketches</h2>
          <span className="mono">{String(SKETCHES_DESC.length).padStart(2, '0')}</span>
        </div>
        <SketchesStrip sketches={SKETCHES_DESC} showCaptions />
      </section>
    </div>
  );
}
