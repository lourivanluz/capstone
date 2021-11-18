import { useCart } from "../../Providers/Cart";
import { CardCartContainer } from "./style";

export const CardCart = ({ item }) => {
  const { cartList, rmvAllIDProducts, rmvToCart, addToCart } = useCart();

  const quantity = cartList.filter((product) => item.id === product.id);

  return (
    <CardCartContainer>
      <div className="imgProduct">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="info">
        <h1>
          {item.title.length > 20
            ? item.title.slice(0, 17).concat("...")
            : item.title}
        </h1>

        <div>{`Preço: ${item.price}`}</div>
        <div className="quantity">
          <button onClick={() => rmvToCart(item.id)}>-</button>
          <span>{quantity.length}</span>
          <button onClick={() => addToCart(item)}>+</button>
        </div>
      </div>
      <button className="delete" onClick={() => rmvAllIDProducts(item.id)}>
        x
      </button>
    </CardCartContainer>
  );
};
