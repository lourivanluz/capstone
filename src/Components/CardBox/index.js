import { useHistory } from "react-router";
import { useCart } from "../../Providers/Cart";
import FlexButton from "../FlexButton";
import { BoxCardContainer } from "./style";

const CardBox = ({ product }) => {
  const { addToCart } = useCart();
  const history = useHistory();

  return (
    <BoxCardContainer>
      <img
        src={product.img}
        alt={product.title}
        onClick={() => history.push(`/boxDeteil/${product.id}`)}
      />

      <div>
        <p onClick={() => history.push(`/boxDeteil/${product.id}`)}>
          {product.title}
        </p>
        <span>{product.price}</span>
      </div>
      <span className="weight">{product.weight}</span>
      <div>
        <div className="content">
          <span className="plus">+ {product.contents[2]}</span>
          <span>Disponível no dia 30/11</span>
        </div>
        <FlexButton width="90%" onClick={() => addToCart(product)}>
          Adicionar
        </FlexButton>
      </div>
    </BoxCardContainer>
  );
};

export default CardBox;
