import { Link } from "react-router-dom";
import { useBox } from "../../../Providers/Box";
import { BoxDrawStyle } from "./style";

export const BoxsDraw = ({ setDropDrawBox }) => {
  const { boxList } = useBox();
  return (
    <BoxDrawStyle onMouseEnter={() => setDropDrawBox(true)}>
      <ul onMouseLeave={() => setDropDrawBox(false)}>
        {boxList?.map((item, index) => (
          <li key={index} onClick={() => setDropDrawBox(false)}>
            <Link to={`/boxDeteil/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </BoxDrawStyle>
  );
};
