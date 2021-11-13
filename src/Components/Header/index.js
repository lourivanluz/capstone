import { HeaderContainer } from "./style";
import { AiOutlineMenu } from "react-icons/ai";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import { useState } from "react";
import { ProductsDraw } from "./ProducDraw";
import { useCart } from "../../Providers/Cart";
import { Cart } from "../Cart";
import { UserDraw } from "./UserDraw";
import { Search } from "./Search";

export const Header = () => {
  const [dropDraw, setDropDraw] = useState(false);
  const [showUserDrop, setShowUserDrop] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { showCart, setShowCart } = useCart();

  const handleShowCart = () => {
    setShowCart(!showCart);
    setShowUserDrop(false);
  };

  const handleShowUserDrop = () => {
    setShowUserDrop(!showUserDrop);
  };

  return (
    <HeaderContainer>
      <div className="header">
        <div className="logo">logo</div>
        <div className="filters">
          <span
            onMouseEnter={() => setDropDraw(true)}
            onMouseLeave={() => setDropDraw(false)}
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
          <ImSearch
            className="icons icon-search"
            onClick={() => setShowSearch(true)}
          />
          <FaUserAlt className="icons icon-user" onClick={handleShowUserDrop} />
          <RiShoppingBag2Fill
            className="icons icon-bag"
            onClick={handleShowCart}
          />
        </div>
        {dropDraw && <ProductsDraw setDropDraw={setDropDraw} />}
        <Cart show={showCart} />
        {showUserDrop && <UserDraw setShowUserDrop={setShowUserDrop} />}
        {showSearch && <Search setShowSearch={setShowSearch} />}
      </div>
    </HeaderContainer>
  );
};
