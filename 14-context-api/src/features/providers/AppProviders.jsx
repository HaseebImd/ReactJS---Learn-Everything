import { UserProvider } from "../auth/UserContext";
import { ProductProvider } from "../products/ProductContext";
import { ThemeProvider } from "../theme/ThemeContext";

export function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <ProductProvider>{children}</ProductProvider>
      </UserProvider>
    </ThemeProvider>
  );
}
