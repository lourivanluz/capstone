import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";
import { UserProvider } from "./User";

export const Providers = ({ children }) => {
  return (
    <ProductsProvider>
      <CartProvider>
        <UserProvider>{children}</UserProvider>
      </CartProvider>
    </ProductsProvider>
  );
};
