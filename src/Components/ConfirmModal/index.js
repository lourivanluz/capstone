import { ModalContent, ModalShadow } from "./style";
import { useUser } from "../../Providers/User";
import { useCart } from "../../Providers/Cart";
import FlexButton from "../FlexButton";

import { toast } from "react-toastify";

const ConfirmModal = ({ haveBox, setShowModal }) => {
  const { user, subscribeAccount } = useUser();
  const { clearCart } = useCart();

  const handleCancel = () => {
    setShowModal(false);
  };

  const handlePurchase = () => {
    if (haveBox) {
      subscribeAccount();
    } else {
      toast.success("Compra finalizada");
    }
    clearCart();
    setShowModal(false);
  };

  return (
    <ModalShadow>
      <ModalContent>
        <h3>Confirmação de compra</h3>
        <div className="container">
          <div className="headerModal">
            {haveBox && <p>{"Você está prestes a se tornar um assinante"}</p>}
            <p>{"Para finalizar a compra confirme os dados de envio"}</p>
          </div>
          <p>{`Nome: ${user?.name}`}</p>
          <p>{`E-mail: ${user?.email}`}</p>
          <p>{`Endereço: ${user?.address}`}</p>
          <p>{`Bairro: ${user?.area}`}</p>
          <p>{`Cep: ${user?.cep}`}</p>
          <p>{`Complemento: ${user?.complement}`}</p>
        </div>
        <div className="buttonsContainer">
          <FlexButton onClick={() => handleCancel()}>Cancelar</FlexButton>
          <FlexButton onClick={() => handlePurchase()}>Confirmar</FlexButton>
        </div>
      </ModalContent>
    </ModalShadow>
  );
};

export default ConfirmModal;
