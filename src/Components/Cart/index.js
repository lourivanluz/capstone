import { IoIosArrowForward } from "react-icons/io";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { CartContainer } from "./style";
import { useCart } from "../../Providers/Cart";
import { CardCart } from "../CardCart";
import { useHistory } from "react-router-dom";

export const Cart = ({ show }) => {
  const { cartList, setShowCart } = useCart();
  const history = useHistory();

  const handleShowCart = () => {
    setShowCart(false);
  };

  const cartFiltred = cartList.filter((item, index, array) => {
    return array.map((item) => item.id).indexOf(item.id) === index;
  });

  const handleBuy = () => {
    if (localStorage.getItem("@BHealthy: user")) {
      console.log("compra finalizada");
    } else {
      history.push("/confirm");
    }
  };

  const totalPrice = cartList
    .reduce(
      (acc, item) =>
        Number(item.price.replace("R$ ", "").replace(",", ".")) + acc,
      0
    )
    .toFixed(2)
    .replace(".", ",");

  return (
    <CartContainer show={show}>
      <div onClick={handleShowCart}>
        <IoIosArrowForward /> Minha Sacola
      </div>
      {cartList.length === 0 ? (
        <div className="bagEmpty">
          <RiShoppingBag2Fill />
          <span>Clique em “adicionar” para adicionar produtos na sacola</span>
        </div>
      ) : (
        <div>
          <ul>
            {cartFiltred.map((item, index) => (
              <li key={index}>
                <CardCart item={item} />
              </li>
            ))}
          </ul>
          <span>previsão de entrega: 21/11</span>
          <br />
          <span>{`Subtotal: R$ ${totalPrice}`}</span>
          <br />
          <button onClick={handleBuy}>Finalizar compra</button>
        </div>
      )}
    </CartContainer>
  );
};
