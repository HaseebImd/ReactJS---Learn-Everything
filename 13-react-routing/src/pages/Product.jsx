import { Link, Outlet } from "react-router";

const Product = () => {
  return (
    <section className="page-shell">
      <p className="page-kicker">Catalog</p>
      <h1 className="page-title">Product Page</h1>
      <p className="page-copy">Explore nested and dynamic routes here.</p>

      <div className="tab-links">
        <Link to="/product/men" className="page-btn page-btn-secondary">
          Men&apos;s Collection
        </Link>
        <Link to="/product/women" className="page-btn page-btn-secondary">
          Women&apos;s Collection
        </Link>
        <Link to="/product/101" className="page-btn page-btn-primary">
          Open Product #101
        </Link>
      </div>

      <div className="nested-panel">
        <Outlet />
      </div>
    </section>
  );
};

export default Product;
