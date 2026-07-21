import { Link } from "react-router";

const WomenCollection = () => {
  return (
    <section className="collection-shell">
      <h2>Women&apos;s Collection</h2>
      <p>Explore featured items and jump into details pages.</p>
      <div className="mini-links">
        <Link to="/product/301">Product 301</Link>
        <Link to="/product/302">Product 302</Link>
      </div>
    </section>
  );
};

export default WomenCollection;
