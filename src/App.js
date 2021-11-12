import { Cart } from "./Components/Cart";
import { useCart } from "./Providers/Cart";
import { Routers } from "./Routes";

function App() {
  const { handleShowCart, showCart } = useCart();
  return (
    <div>
      <button onClick={handleShowCart}>cart</button>
      <Routers />
      <Cart show={showCart} />
    </div>
  );
}

export default App;
