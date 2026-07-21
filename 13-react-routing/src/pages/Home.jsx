import { Link } from "react-router";

const Home = () => {
  return (
    <section className="page-shell">
      <p className="page-kicker">Welcome</p>
      <h1 className="page-title">Home</h1>
      <p className="page-copy">
        This mini project covers the core of React routing with clean, readable
        examples.
      </p>
      <div className="page-actions">
        <Link to="/product" className="page-btn page-btn-primary">
          View Products
        </Link>
      </div>
    </section>
  );
};

export default Home;
