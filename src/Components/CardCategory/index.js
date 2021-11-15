import { useHistory } from "react-router";
import { CardCategoryContainer, CardCategoryContent } from "./style";

const CardCategory = ({ product, imageBackground }) => {
  const history = useHistory();
  return (
    <CardCategoryContainer imageBackground={imageBackground}>
      <CardCategoryContent>
        <h1> {product.category} </h1>
        <button
          onClick={() => history.push(`/products/filter/${product.category}`)}
        >
          Ver mais
        </button>
      </CardCategoryContent>
    </CardCategoryContainer>
  );
};

export default CardCategory;
