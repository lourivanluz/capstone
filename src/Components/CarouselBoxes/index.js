import CardBox from "../CardBox";
import { Container, ContainerUl } from "./style";

const CarouselBoxes = ({ products }) => {
  return (
    <Container>
      <h2>boxes</h2>
      <ContainerUl>
        {!products[0]
          ? null
          : products.map((product) => (
              <CardBox key={product.id} product={product} />
            ))}
      </ContainerUl>
    </Container>
  );
};

export default CarouselBoxes;
