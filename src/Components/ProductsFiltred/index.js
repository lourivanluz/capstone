import { useParams } from "react-router";
import { useProducts } from "../../Providers/Products";

export const ProductFiltred = () => {
  const { category } = useParams();
  const { filterPerCategory, products } = useProducts();
  //const listCategory = filterPerCategory(`${category}`);
  const listCategory = products.filter((item) => item.category === category);
  console.log(listCategory);

  return (
    <div>
      <ul>
        {listCategory.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
