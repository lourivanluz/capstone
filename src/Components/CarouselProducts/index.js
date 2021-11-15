import CardCategory from "../CardCategory";
import CardProduct from "../CardProduct";
import { Container, ContainerUl } from "./style";

const CarouselProducts = ({ products }) => {
  return (
    <Container>
      <ContainerUl>
        {!products[0] ? null : (
          <CardCategory
            product={products[0]}
            imageBackground={products[0].img}
          />
        )}
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </ContainerUl>
    </Container>
  );
};

export default CarouselProducts;
