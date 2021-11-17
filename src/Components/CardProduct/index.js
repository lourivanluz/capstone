import { PriceStyle, PriceSubscribeStyle, ProductCardContainer } from "./style";
import { useCart } from "../../Providers/Cart";
import { useHistory } from "react-router";
import { useUser } from "../../Providers/User";

const CardProduct = ({ product }) => {
  const { addToCart } = useCart();
  const { user } = useUser();
  const history = useHistory();

  const price = Number(product.price.replace("R$ ", "").replace(",", "."));
  const priceDiscount = price - price * 0.1;

  return (
    <ProductCardContainer>
      <img
        src={product.img}
        alt={product.title}
        onClick={() => history.push(`/products/${product.id}`)}
      />
      <div className="title">
        <p onClick={() => history.push(`/products/${product.id}`)}>
          {product.title.length > 20
            ? product.title.slice(0, 20).concat("...")
            : product.title}
        </p>
      </div>

      <div className="subscribe">
        <span>{"Filiado"}</span>
        <PriceStyle user={user}>{`R$ ${priceDiscount
          .toFixed(2)
          .replace(".", ",")}`}</PriceStyle>
      </div>
      <div>
        <span className="weight">{product.weight}</span>
        <PriceSubscribeStyle user={user}>{`R$ ${price
          .toFixed(2)
          .replace(".", ",")}`}</PriceSubscribeStyle>
      </div>
      <button onClick={() => addToCart(product)}>Adicionar</button>
    </ProductCardContainer>
  );
};

export default CardProduct;
