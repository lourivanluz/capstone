import { BoxProvider } from "./Box";
import { CartProvider } from "./Cart";
import { ProductsProvider } from "./Products";
import { UserProvider } from "./User";

export const Providers = ({ children }) => {
  return (
    <ProductsProvider>
      <BoxProvider>
        <CartProvider>
          <UserProvider>{children}</UserProvider>
        </CartProvider>
      </BoxProvider>
    </ProductsProvider>
  );
};
