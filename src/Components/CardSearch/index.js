import { useHistory } from "react-router";
import { useCart } from "../../Providers/Cart";
import FlexButton from "../FlexButton";
import { CardSearchContainer } from "./style";

const CardSearch = ({ product, setShowSearch }) => {
  const history = useHistory();
  const { addToCart } = useCart();

  const handleClick = () => {
    history.push(`/products/${product.id}`);
    setShowSearch(false);
  };
  return (
    <CardSearchContainer>
      <img src={product.img} alt={product.title} onClick={handleClick} />
      <div>
        <h3 onClick={handleClick}>{product.title}</h3>
        <span>{product.price}</span>
      </div>
      <FlexButton width="30%" onClick={() => addToCart(product)}>
        Adicionar
      </FlexButton>
    </CardSearchContainer>
  );
};

export default CardSearch;
