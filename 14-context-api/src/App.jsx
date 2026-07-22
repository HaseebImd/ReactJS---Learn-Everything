import { useUser } from "./features/auth/UserContext";
import { useProducts } from "./features/products/ProductContext";
import { useTheme } from "./features/theme/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { user, login, logout } = useUser();
  const { cart } = useProducts();

  return (
    <nav>
      <span>Theme: {theme}</span>
      <button onClick={toggleTheme}>Toggle</button>
      {user ?
        <>
          <span>Hi, {user.name}</span>
          <button onClick={logout}>Logout</button>
        </>
      : <button onClick={() => login("Ali")}>Login</button>}
      <span>Cart: {cart.length}</span>
    </nav>
  );
}

function ProductList() {
  const { products, loading, addToCart } = useProducts();
  const { user } = useUser();

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {products.map((p) => (
        <li key={p.id}>
          {p.name} — ${p.price}
          <button disabled={!user} onClick={() => addToCart(p)}>
            Add
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <Navbar />
      <ProductList />
    </div>
  );
}
