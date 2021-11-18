import { useEffect } from "react";
import { useParams } from "react-router";
import { useProducts } from "../../Providers/Products";
import CardProduct from "../CardProduct";
import { Container, ContainerUl } from "./style";

export const ProductFiltred = () => {
  const { category } = useParams();
  const { filterPerCategory, filteredProducts } = useProducts();

  useEffect(() => {
    filterPerCategory(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  return (
    <Container>
      <h1>{category}</h1>
      <ContainerUl>
        {filteredProducts.map((item) => (
          <CardProduct key={item.id} product={item} />
        ))}
      </ContainerUl>
    </Container>
  );
};
