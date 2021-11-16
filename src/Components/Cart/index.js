import { IoIosArrowForward } from "react-icons/io";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { CartContainer } from "./style";
import { useCart } from "../../Providers/Cart";
import { CardCart } from "../CardCart";
import { useHistory } from "react-router-dom";
import ConfirmModal from "../ConfirmModal";
import { useState } from "react";

export const Cart = ({ show }) => {
  const { cartList, setShowCart } = useCart();

  const [haveBox] = cartList.filter((item) => item.category === "boxs");
  const [showModal, setShowModal] = useState(false);

  const history = useHistory();
  const handleShowCart = () => {
    setShowCart(false);
  };

  const cartFiltred = cartList.filter((item, index, array) => {
    return array.map((item) => item.id).indexOf(item.id) === index;
  });

  const handleBuy = () => {
    console.log(haveBox);
    if (localStorage.getItem("@BHealthy: user")) {
      setShowModal(true);
    } else {
      history.push("/register");
    }
  };

  const totalPrice = cartList.reduce(
    (acc, item) =>
      Number(item.price.replace("R$ ", "").replace(",", ".")) + acc,
    0
  );

  const priceForSubscribe = totalPrice - totalPrice * 0.1;

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
          {/* usar o user.subscribe como parametro pra riscar um dos dois preços no styled componente */}
          <span>{`Subtotal: R$ ${totalPrice.toFixed(2)}`}</span> <br />
          <span>{`Total para assinantes: R$ ${priceForSubscribe.toFixed(
            2
          )}`}</span>
          <br />
          <button onClick={handleBuy}>Finalizar compra</button>
        </div>
      )}
      {showModal && (
        <ConfirmModal haveBox={haveBox} setShowModal={setShowModal} />
      )}
    </CartContainer>
  );
};
