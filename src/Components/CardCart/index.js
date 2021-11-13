import { useCart } from "../../Providers/Cart";
import { CardCartContainer } from "./style";

export const CardCart = ({ item }) => {
  const { cartList, rmvAllIDProducts, rmvToCart, addToCart } = useCart();

  const quantity = cartList.filter((product) => item.id === product.id);

  return (
    <CardCartContainer>
      <div className="imgProduct">
        <img src={item.img} alt={"product image"} />
      </div>
      <div className="info">
        <div>{item.title}</div>

        <div>{`Preço: ${item.price}`}</div>
        <div className="quantity">
          <button onClick={() => rmvToCart(item.id)}>-</button>
          <span>{quantity.length}</span>
          <button onClick={() => addToCart(item)}>+</button>
        </div>
      </div>
      <button className="delete" onClick={() => rmvAllIDProducts(item.id)}>
        X
      </button>
    </CardCartContainer>
  );
};
