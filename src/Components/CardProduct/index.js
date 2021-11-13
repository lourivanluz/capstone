import { ProductCardContainer } from "./style";
import { useCart } from "../../Providers/Cart";
import { useHistory } from "react-router";

const CardProduct = ({ product }) => {
  const { addToCart } = useCart();
  const history = useHistory();

  return (
    <ProductCardContainer>
      <img
        src={product.img}
        alt={product.title}
        onClick={() => history.push(`/products/${product.id}`)}
      />
      <p onClick={() => history.push(`/products/${product.id}`)}>
        {product.title}
      </p>
      <div>
        <span>{product.weight}</span>
        <span>{product.price}</span>
      </div>
      <button onClick={() => addToCart(product)}>Adicionar</button>
    </ProductCardContainer>
  );
};

export default CardProduct;
