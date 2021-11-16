import { useEffect } from "react";
import { useParams } from "react-router";
import { useProducts } from "../../Providers/Products";
import CardProduct from "../CardProduct";

export const ProductFiltred = () => {
  const { category } = useParams();
  const { filterPerCategory, filteredProducts } = useProducts();

  useEffect(() => {
    filterPerCategory(category);
  }, [category]);

  return (
    <div>
      <ul>
        {filteredProducts.map((item, index) => (
          <li key={index}>
            <CardProduct product={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};
