import { Link } from "react-router-dom";
import { useProducts } from "../../../Providers/Products";
import { ProductsDrawStyle } from "./style";

export const ProductsDraw = ({ setDropDraw }) => {
  const { products } = useProducts();
  const categoryFiltred = products.filter((item, index, array) => {
    return array.map((item) => item.category).indexOf(item.category) === index;
  });

  return (
    <ProductsDrawStyle onMouseEnter={() => setDropDraw(true)}>
      <ul onMouseLeave={() => setDropDraw(false)}>
        {categoryFiltred.map((item, index) => (
          <li key={index}>
            <Link to={`/products/${item.category}`}>{item.category}</Link>
          </li>
        ))}
      </ul>
    </ProductsDrawStyle>
  );
};
