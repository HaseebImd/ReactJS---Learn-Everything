import React from "react";
import { Link, Outlet } from "react-router";

const Product = () => {
  return (
    <div>
      <h1>This is Product Page </h1>
      <h1>This is Header </h1>
      <Link to="/product/men">Men's Collections</Link>
      <Link to="/product/women">Women's Collections</Link>
      <Outlet />
      <h2>This is Footer</h2>
    </div>
  );
};

export default Product;
