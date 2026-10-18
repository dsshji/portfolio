import './Footer.css';
import { SOCIAL } from '@/data/nav';
import { accentAt } from '@/data/palette';

/* Footer landmark. Social links are external, so plain <a> with
   rel="noreferrer" (not react-router Links). */
export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="mono social">
        {SOCIAL.map((s, i) => (
          <a
            key={s.label}
            href={s.to}
            target="_blank"
            rel="noreferrer"
            style={{ ['--c' as string]: accentAt(i) }}
          >
            {s.label}
          </a>
        ))}
      </span>
    </footer>
  );
}
