import { IoIosArrowForward } from "react-icons/io";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { CartContainer } from "./style";
import { useCart } from "../../Providers/Cart";
import { CardCart } from "../CardCart";

export const Cart = ({ show }) => {
  const { cartList, handleShowCart } = useCart();

  const cartFiltred = cartList.filter((item, index, array) => {
    return array.map((item) => item.id).indexOf(item.id) === index;
  });

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
          <button>Finalizar compra</button>
        </div>
      )}
    </CartContainer>
  );
};
