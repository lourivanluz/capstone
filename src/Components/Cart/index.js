import { IoIosArrowForward } from "react-icons/io";
import { RiShoppingBag2Fill } from "react-icons/ri";
import { CartContainer } from "./style";
import { useCart } from "../../Providers/Cart";
import { CardCart } from "../CardCart";
import { useHistory } from "react-router-dom";
import { useUser } from "../../Providers/User";

export const Cart = ({ show }) => {
  const { cartList, setShowCart } = useCart();
  const { user } = useUser();

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
          <span>{`Subtotal: R$ ${totalPrice}`}</span> <br />
          <span>{`Total para assinantes: R$ ${priceForSubscribe.toFixed(
            2
          )}`}</span>
          <br />
          <button onClick={() => console.log(user)}>Finalizar compra</button>
        </div>
      )}
    </CartContainer>
  );
};
