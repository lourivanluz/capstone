import CardCategory from "../CardCategory";
import CardProduct from "../CardProduct";
import { Container, ContainerUl } from "./style";

const CarouselProducts = ({ products }) => {
  return (
    <Container>
      <h2>{!products[0] ? null : products[0].category}</h2>
      <ContainerUl>
        {!products[0] ? null : (
          <CardCategory
            product={products[0]}
            imageBackground={products[0].img}
          />
        )}
        {products.map((product, index) =>
          index < 5 ? <CardProduct key={product.id} product={product} /> : null
        )}
      </ContainerUl>
    </Container>
  );
};

export default CarouselProducts;
