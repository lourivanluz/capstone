import { Link } from "react-router-dom";
import { useProducts } from "../../../Providers/Products";
import { ProductsDrawStyle } from "./style";

export const ProductsDraw = ({ setDropDrawProduct }) => {
  const { products } = useProducts();
  const categoryFiltred = products.filter((item, index, array) => {
    return array.map((item) => item.category).indexOf(item.category) === index;
  });

  return (
    <ProductsDrawStyle onMouseEnter={() => setDropDrawProduct(true)}>
      <ul onMouseLeave={() => setDropDrawProduct(false)}>
        {categoryFiltred.map((item, index) => (
          <li key={index} onClick={() => setDropDrawProduct(false)}>
            <Link to={`/products/filter/${item.category}`}>
              {item.category}
            </Link>
          </li>
        ))}
      </ul>
    </ProductsDrawStyle>
  );
};
