import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <section className="collection-shell">
      <h2>Product Details</h2>
      <p>
        Showing details for product id: <strong>{id ?? "N/A"}</strong>
      </p>
    </section>
  );
};

export default ProductDetails;
