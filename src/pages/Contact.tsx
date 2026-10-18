import './Contact.css';
import { SOCIAL } from '@/data/nav';
import { accentAt } from '@/data/palette';

/* /contact — big colorful links. Each takes its own accent color from the
   shared palette (same family as the home orbit). Links live in
   data/nav.ts (SOCIAL). */
export default function Contact() {
  return (
    <div className="page contact-page" style={{ ['--page' as string]: '#ffd000' }}>
      <header className="page-head">
        <h1>Contact</h1>
      </header>

      <section aria-label="Contact links">
        <ul className="contact-list">
          {SOCIAL.map((s, i) => {
            const external = !s.to.startsWith('mailto:');
            return (
              <li key={s.label} style={{ ['--c' as string]: accentAt(i) }}>
                <a
                  className="contact-link"
                  href={s.to}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                >
                  <span className="contact-dot" aria-hidden="true" />
                  <span className="contact-label">{s.label}</span>
                  <span className="contact-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
