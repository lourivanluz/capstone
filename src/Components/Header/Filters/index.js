import { useProducts } from "../../../Providers/Products";
import { FilterStyle } from "./style";

export const Filters = ({ setTeste }) => {
  const { products } = useProducts();
  const categoryFiltred = products.filter((item, index, array) => {
    return array.map((item) => item.category).indexOf(item.category) === index;
  });

  return (
    <FilterStyle
      onMouseEnter={() => setTeste(true)}
      onMouseLeave={() => setTeste(false)}
    >
      <ul>
        {categoryFiltred.map((item, index) => (
          <li key={index}>{item.category}</li>
        ))}
      </ul>
    </FilterStyle>
  );
};
