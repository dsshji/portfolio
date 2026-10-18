import './CaseStudy.css';
import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProject } from '@/data/projects';
import type { MediaRef, Project } from '@/data/types';

/* ═══════════════════════════════════════════════════════════════
   CASE STUDY (/work/[slug]):
     Title + one-line summary
     Hero: image / video / LIVE EMBED of the site (see heroMedia in
           data/projects.ts)
     Links: live · code   (right under the hero)
     Tags line, then Why · How · What broke
   A project without a `caseStudy` still renders a "write-up coming" state.
   ═══════════════════════════════════════════════════════════════ */

/** Live website inside the 16:9 hero box. The site is laid out at
    `embedWidth` (default 1280px) and scaled down to fit the box, so it
    looks like the real desktop site. Interactive; sound is blocked
    (allow="autoplay 'none'") so music sites stay quiet. */
function EmbedFrame({ media }: { media: MediaRef }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  // laid out at the media's own w×h (default 1280×720), then scaled to fit
  const logicalW = media.w ?? media.embedWidth ?? 1280;
  const cropX = media.cropX ?? 0;
  const visibleW = logicalW - 2 * cropX; // part of the site that is actually shown
  const logicalH = media.h ?? Math.round((logicalW * 9) / 16);

  useEffect(() => {
    const box = boxRef.current;
    const frame = frameRef.current;
    if (!box || !frame) return;
    const apply = () => frame.style.setProperty('--embed-scale', String(box.clientWidth / visibleW));
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(box);
    return () => ro.disconnect();
  }, [visibleW]);

  return (
    <div className="embed-box" ref={boxRef}>
      <iframe
        ref={frameRef}
        className="embed-frame"
        src={media.src}
        title={media.alt}
        loading="lazy"
        style={{ width: logicalW, height: logicalH, ['--crop' as string]: `${cropX}px` }}
        allow="autoplay 'none'; microphone 'none'; camera 'none'"
      />
    </div>
  );
}

function Media({ media, swatch }: { media?: MediaRef | null; swatch: string }) {
  return (
    <div
      className={`media${media?.wide ? ' media--wide' : ''}`}
      // keep the media's own shape (w/h) instead of a fixed 16:9 → no cropping
      style={media?.w && media?.h ? { aspectRatio: `${media.w - 2 * (media.cropX ?? 0)} / ${media.h}` } : undefined}
    >
      {media?.type === 'image' && <img src={media.src} alt={media.alt} />}
      {media?.type === 'video' && (
        <video src={media.src} poster={media.poster} controls playsInline preload="metadata" />
      )}
      {media?.type === 'embed' && <EmbedFrame media={media} />}
      {!media && (
        <>
          {/* placeholder until real hero media is added to /public */}
          <div className={`swatch ${swatch}`} />
          <div className="media-note">hero image / video</div>
        </>
      )}
    </div>
  );
}

function Links({ project }: { project: Project }) {
  return (
    <div className="links">
      {project.links.live ? (
        <a href={project.links.live} target="_blank" rel="noreferrer">
          live →
        </a>
      ) : (
        <span className="disabled mono">live — soon</span>
      )}
      {project.links.code ? (
        <a href={project.links.code} target="_blank" rel="noreferrer">
          code →
        </a>
      ) : (
        <span className="disabled mono">code — soon</span>
      )}
    </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const project = slug ? getProject(slug) : undefined;

  if (!project) {
    return (
      <div className="case">
        <p className="meta">404</p>
        <h1>Project not found</h1>
        <Link className="back-link" to="/work">
          ← back to work
        </Link>
      </div>
    );
  }

  const cs = project.caseStudy;
  const metaLine = [project.year, project.role, project.tech.join(' · ')]
    .filter(Boolean)
    .join('  ·  ');

  return (
    <article className="case page" style={{ ['--page' as string]: '#4aa5ff' }}>
      <h1>{project.title}</h1>
      <p className="summary">{cs ? cs.summary : project.blurb}</p>

      <Media media={cs?.heroMedia} swatch={project.previewSwatch} />
      <Links project={project} />
      {/* tags are their own quiet line, separate from the hero */}
      <p className="case-meta mono">{metaLine}</p>

      {cs ? (
        <>
          <div className="section" style={{ ['--c' as string]: '#4aa5ff' }}>
            <h2>Why</h2>
            <div className="prose">
              {cs.why.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <div className="section" style={{ ['--c' as string]: '#3ddc84' }}>
            <h2>How</h2>
            <div className="prose">
              {cs.how.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          {/* required section — the debugging/failure story */}
          <div className="section broke" style={{ ['--c' as string]: '#ff2d95' }}>
            <h2>What broke</h2>
            <div className="prose">
              {cs.whatBroke.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="section">
          <h2>Write-up</h2>
          <div className="prose">
            <p style={{ color: 'var(--dim)' }}>
              The case study for this project isn’t written yet.
            </p>
          </div>
        </div>
      )}

      <Link className="back-link" to="/work">
        ← back to work
      </Link>
    </article>
  );
}
