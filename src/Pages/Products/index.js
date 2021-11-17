import { PageBase } from "../../Components/PageBase";
import { ProductFiltred } from "../../Components/ProductsFiltred";
import { Container } from "./style";

export const Products = () => {
  return (
    <PageBase>
      <Container>
        <ProductFiltred />
      </Container>
    </PageBase>
  );
};
