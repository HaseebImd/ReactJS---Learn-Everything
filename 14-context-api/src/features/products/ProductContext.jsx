import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext(null);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // simulate a fetch
    const timer = setTimeout(() => {
      setProducts([
        { id: 1, name: "Keyboard", price: 49 },
        { id: 2, name: "Mouse", price: 25 },
        { id: 3, name: "Monitor", price: 180 },
      ]);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = (product) => setCart((c) => [...c, product]);

  return (
    <ProductContext.Provider value={{ products, loading, cart, addToCart }}>
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const ctx = useContext(ProductContext);
  if (!ctx) throw new Error("useProducts must be used inside ProductProvider");
  return ctx;
}
