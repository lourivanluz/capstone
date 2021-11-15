import { useHistory } from "react-router";
import { CardSearchContainer } from "./style";

const CardSearch = ({ product, setShowSearch }) => {
  const history = useHistory();

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
      <button>Adicionar</button>
    </CardSearchContainer>
  );
};

export default CardSearch;
