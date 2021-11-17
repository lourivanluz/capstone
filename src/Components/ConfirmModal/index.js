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
        <div classNam="container">
          {haveBox && <p>{"Você está prestes a se tornar um assinante"}</p>}
          <p>{"Para finalizar a compra confirme os dados de envio"}</p>
          <span>{`Nome: ${user.name}`}</span>
          <span>{`E-mail: ${user.email}`}</span>
          <span>{`Endereço: ${user.address}`}</span>
          <span>{`Bairro: ${user.area}`}</span>
          <span>{`Cep: ${user.cep}`}</span>
          <span>{`Complemento: ${user.complement}`}</span>
        </div>
        <div>
          <button onClick={() => handleCancel()}>Cancelar</button>
          <button onClick={() => handlePurchase()}>Confirmar</button>
        </div>
      </ModalContent>
    </ModalShadow>
  );
};

export default ConfirmModal;
