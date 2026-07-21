import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="page-shell">
      <p className="page-kicker">Error</p>
      <h1 className="page-title">404 | Page Not Found</h1>
      <p className="page-copy">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="page-actions">
        <Link to="/" className="page-btn page-btn-primary">
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
