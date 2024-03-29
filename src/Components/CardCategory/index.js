import { useHistory } from "react-router";
import FlexButton from "../FlexButton";
import { CardCategoryContainer, CardCategoryContent } from "./style";

const CardCategory = ({ product, imageBackground }) => {
  const history = useHistory();
  return (
    <CardCategoryContainer imageBackground={imageBackground}>
      <CardCategoryContent>
        <h1> {product.category} </h1>
        <FlexButton
          width="80%"
          onClick={() => history.push(`/products/filter/${product.category}`)}
        >
          Ver mais
        </FlexButton>
      </CardCategoryContent>
    </CardCategoryContainer>
  );
};

export default CardCategory;
