import { Link } from "react-router";

const MenCollection = () => {
  return (
    <section className="collection-shell">
      <h2>Men&apos;s Collection</h2>
      <p>Browse selected items and open product details by id.</p>
      <div className="mini-links">
        <Link to="/product/201">Product 201</Link>
        <Link to="/product/202">Product 202</Link>
      </div>
    </section>
  );
};

export default MenCollection;
