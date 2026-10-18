import './About.css';
import { Link } from 'react-router-dom';
import { ABOUT_LONG, ROLE, LOCATIONS } from '@/data/about';

/* /about — the long version. The hero cutaway is the *short* "who is
   this"; this is the prose (brief §4). */
export default function About() {
  return (
    <div className="page" style={{ ['--page' as string]: '#ff2d95' }}>
      <header className="page-head">
        <h1>About</h1>
        {/* plain .lede (sans) — matches the lede on /work and /sketches */}
        <p className="lede">
          {ROLE} · {LOCATIONS}
        </p>
      </header>

      <section aria-label="About">
        <div className="about-prose">
          {ABOUT_LONG.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <Link className="back-link" to="/">
          ← back home
        </Link>
      </section>
    </div>
  );
}
