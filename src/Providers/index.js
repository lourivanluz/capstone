import { CartProvider } from "./Cart";

export const Providers = ({ children }) => {
  return <CartProvider>{children}</CartProvider>;
};
