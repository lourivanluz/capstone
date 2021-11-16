import { ModalContent, ModalShadow } from "./style";
import { useUser } from "../../Providers/User";
import { useCart } from "../../Providers/Cart";

const ConfirmModal = ({ haveBox, setShowModal }) => {
  const { user, subscribeAccount } = useUser();
  const { clearCart } = useCart();

  const handleCancel = () => {
    setShowModal(false);
  };

  const handlePurchase = () => {
    console.log(!!haveBox);
    console.log(user);
    if (haveBox) {
      subscribeAccount();
      clearCart();

      console.log("Compra finalizada");
    } else {
      clearCart();

      console.log("Compra finalizada");
    }
    setShowModal(false);
  };

  return (
    <ModalShadow>
      <ModalContent>
        <h3>Confirmação de compra</h3>
        <p>
          {haveBox
            ? "Você se tornará assinante e texto texto texto texto texto texto texto texto texto texto"
            : "Um e-mail será enviado e texto texto texto texto texto texto texto texto texto texto"}
        </p>
        <div>
          <button onClick={() => handleCancel()}>Cancelar</button>
          <button onClick={() => handlePurchase()}>Confirmar</button>
        </div>
      </ModalContent>
    </ModalShadow>
  );
};

export default ConfirmModal;
