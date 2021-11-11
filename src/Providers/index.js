import { CartProvider } from "./Cart";
import { UserProvider } from "./User";

export const Providers = ({ children }) => {
  return (
    <CartProvider>
      <UserProvider>{children}</UserProvider>
    </CartProvider>
  );
};
