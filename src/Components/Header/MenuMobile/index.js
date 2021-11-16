import { Link } from "react-router-dom";
import { useBox } from "../../../Providers/Box";
import { useProducts } from "../../../Providers/Products";
import { MenuContainer } from "./style";

export const MenuMobile = ({ show, setShowMenu }) => {
  const { products } = useProducts();
  const { boxList } = useBox();
  const categoryFiltred = products.filter((item, index, array) => {
    return array.map((item) => item.category).indexOf(item.category) === index;
  });

  return (
    <MenuContainer show={show}>
      <div>
        <p>Categorias</p>
        <ul>
          {categoryFiltred.map((item, index) => (
            <li key={index} onClick={() => setShowMenu(false)}>
              <Link to={`/products/filter/${item.category}`}>
                {item.category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>Nossas Boxs</p>
        <ul>
          {boxList?.map((item, index) => (
            <li key={index} onClick={() => setShowMenu(false)}>
              <Link to={`/boxDeteil/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={() => setShowMenu(false)}>x</button>
    </MenuContainer>
  );
};
