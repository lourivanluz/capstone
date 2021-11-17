import { ProductCardContainer } from "./style";
import { useCart } from "../../Providers/Cart";
import { useHistory } from "react-router";

const CardProduct = ({ product }) => {
  const { addToCart } = useCart();
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
      <div>
        <p onClick={() => history.push(`/products/${product.id}`)}>
          {product.title.length > 15
            ? product.title.slice(0, 15).concat("...")
            : product.title}
        </p>
      </div>
      <div className="subscribe">
        <span>{"Filiado"}</span>
        <span>{`R$ ${priceDiscount.toFixed(2).replace(".", ",")}`}</span>
      </div>
      <div>
        <span>{product.weight}</span>
        <span>{`R$ ${price.toFixed(2).replace(".", ",")}`}</span>
      </div>
      <button onClick={() => addToCart(product)}>Adicionar</button>
    </ProductCardContainer>
  );
};

export default CardProduct;
