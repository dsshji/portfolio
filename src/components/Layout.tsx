import { useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Menu from './Menu';
import Footer from './Footer';
import Wordmark from './Wordmark';

/* App shell shared by every route (brief §9 landmarks: header/main/footer).
   - Skip link jumps keyboard users past the nav straight into content.
   - On each route change we reset scroll to top (SPA doesn't do this for
     you) and move focus to <main> so screen-reader users land in content. */
export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  // a single work case-study page also gets a "← work" link under the name,
  // so leaving a project returns to the full work index (not home).
  const isCaseStudy = /^\/work\/.+/.test(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.getElementById('main')?.focus({ preventScroll: true });
  }, [pathname]);

  return (
    /* Home is a single full-viewport screen — no bottom padding, no footer,
       so it stays clean and scroll-free. Interior pages keep the shell. */
    <div className={`wrap${isHome ? ' wrap--home' : ''}`}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      {/* name, top-left on every page (types out once, links home) */}
      <Wordmark />
      {isCaseStudy && (
        <Link to="/work" className="wordmark-back" aria-label="Back to work">
          ← work
        </Link>
      )}
      {/* hidden floating menu trigger, top-right */}
      <Menu />
      {/* tabIndex -1 so it can receive focus on route change without being a tab stop */}
      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>
      {/* no footer on home (clean screen) or on /contact (it repeats the same links) */}
      {!isHome && pathname !== '/contact' && <Footer />}
    </div>
  );
}
