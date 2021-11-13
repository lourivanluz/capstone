import { HeaderContainer } from "./style";
import { AiOutlineMenu } from "react-icons/ai";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { Filters } from "./Filters";

export const Header = () => {
  const [teste, setTeste] = useState(false);
  return (
    <HeaderContainer>
      <div className="header">
        <div className="logo">logo</div>
        <div className="filters">
          <span
            onMouseEnter={() => setTeste(true)}
            onMouseLeave={() => setTeste(false)}
          >
            opçoes de box
          </span>
          <span>filtro produto</span>
          <button>Compre uma box</button>
        </div>
        <div className="menuContainer">
          <AiOutlineMenu />
        </div>
        <div className="iconsContainer">
          <ImSearch className="icons icon-search" />
          <FaUserAlt className="icons icon-user" />
          <RiShoppingBag2Fill className="icons icon-bag" />
        </div>
        {teste && <Filters setTeste={setTeste} />}
      </div>
    </HeaderContainer>
  );
};
