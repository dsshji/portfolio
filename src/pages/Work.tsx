import WorkList from '@/components/WorkList';
import { PROJECTS } from '@/data/projects';

/* /work — the FULL project index (not just selected), same row style as
   home (brief §4). Kept structurally distinct from /sketches on purpose. */
export default function Work() {
  return (
    // --page sets this route's accent color (blue). Section labels, the
    // back-link, etc. inherit it; the work rows keep their own per-row colors.
    <div className="page" style={{ ['--page' as string]: '#4aa5ff' }}>
      <header className="page-head">
        <h1>Work</h1>
        <p className="lede">
          Featured, newest first: generative graphics, interactive media, and
          physical computing. One-liner on hover, full story and what I learnt on click.
        </p>
      </header>

      <section aria-label="All projects">
        <div className="label">
          <h2 className="mono section-head">All projects</h2>
          <span className="mono">{String(PROJECTS.length).padStart(2, '0')}</span>
        </div>
        <WorkList projects={PROJECTS} />
      </section>
    </div>
  );
}
