import './CV.css';
import { CV_SECTIONS, CV_PDF_PATH } from '@/data/cv';
import { ROLE } from '@/data/about';

/* /cv — the CV rendered as an actual HTML page (not just a PDF link),
   with a working "Download PDF" button (brief §4). The button points at
   a static file in /public; drop dasha-cv.pdf there. */
export default function CV() {
  return (
    <div className="page" style={{ ['--page' as string]: '#b06bff' }}>
      <header className="cv-head">
        <div>
          <h1>CV</h1>
          <p className="role">{ROLE}</p>
        </div>
        {/* `download` prompts a save rather than navigating in-tab */}
        <a className="pdf-btn" href={CV_PDF_PATH} download>
          Download PDF ↓
        </a>
      </header>

      {CV_SECTIONS.map((section) => (
        <section className="cv-section" key={section.heading} aria-label={section.heading}>
          <h2>{section.heading}</h2>
          {section.entries.map((e, i) => (
            <div className="cv-entry" key={i}>
              <span className="when">{e.when}</span>
              <div>
                <div className="what">{e.what}</div>
                {e.where && <div className="where">{e.where}</div>}
                {e.detail && <div className="detail">{e.detail}</div>}
                {e.link && (
                  <a className="cv-link" href={e.link.href} target="_blank" rel="noreferrer">
                    {e.link.label} ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </section>
      ))}
    </div>
  );
}
