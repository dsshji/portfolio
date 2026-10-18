import './Menu.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV, SOCIAL } from '@/data/nav';
import { accentAt } from '@/data/palette';

/* ═══════════════════════════════════════════════════════════════
   MENU — a hidden, collapsible trigger. Just a small icon fixed in the
   top-right corner (no "menu" word, no wordmark); it morphs to an X and
   opens a full-screen overlay of big slanted links. Keeps the page calm
   and spacious — nothing but the trigger is visible until you want it.

   A11y: role="dialog" + aria-modal, Escape closes, focus moves into the
   panel on open and back to the trigger on close, body scroll locked.
   ═══════════════════════════════════════════════════════════════ */

export default function Menu() {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();
    document.body.style.overflow = 'hidden';
    // lets CSS hide the top-left name while the menu is open (no overlap)
    document.body.classList.add('menu-open');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    };
  }, [open]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (!open) btnRef.current?.focus();
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        type="button"
        className={`menu-btn${open ? ' is-open' : ''}`}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="menu-ico" aria-hidden="true">
          <span />
          <span />
        </span>
      </button>

      {open && (
        <div
          className="menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          ref={panelRef}
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <nav className="menu-nav" aria-label="Primary">
            <Link
              className="menu-link"
              style={{ ['--i' as string]: 0, ['--c' as string]: accentAt(0) }}
              to="/"
              onClick={() => setOpen(false)}
            >
              home
            </Link>
            {NAV.map((n, i) => (
              <Link
                key={n.to}
                className="menu-link"
                style={{ ['--i' as string]: i + 1, ['--c' as string]: accentAt(i + 1) }}
                to={n.to}
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="menu-social mono">
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
          </div>
        </div>
      )}
    </>
  );
}
