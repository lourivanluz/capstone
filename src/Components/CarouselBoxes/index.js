import CardBox from "../CardBox";
import { Container, ContainerUl } from "./style";

const CarouselBoxes = ({ products }) => {
  return (
    <Container>
      <ContainerUl>
        {!products[0]
          ? null
          : products.map((product) => <CardBox product={product} />)}
      </ContainerUl>
    </Container>
  );
};

export default CarouselBoxes;
