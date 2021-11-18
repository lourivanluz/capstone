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
  }, [category]);

  return (
    <Container>
      <h1>{category}</h1>
      <ContainerUl>
        {filteredProducts.map((item, index) => (
          <li key={index}>
            <CardProduct product={item} />
          </li>
        ))}
      </ContainerUl>
    </Container>
  );
};
