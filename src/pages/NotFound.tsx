import { Link } from 'react-router-dom';

/* Catch-all 404. Keeps the same quiet layout language. */
export default function NotFound() {
  return (
    <div className="page-head">
      <p className="mono">404</p>
      <h1>Nothing here</h1>
      <p className="lede">That page doesn’t exist — or hasn’t been built yet.</p>
      <Link className="back-link" to="/">
        ← back home
      </Link>
    </div>
  );
}
