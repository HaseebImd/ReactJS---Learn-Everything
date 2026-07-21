import React from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const param = useParams();

  return <div>{param.id}Product Details</div>;
};

export default ProductDetails;
