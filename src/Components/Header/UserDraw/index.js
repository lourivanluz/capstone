import { useHistory } from "react-router";
import { useUser } from "../../../Providers/User";
import LoginForm from "../../LoginForm";
import { UserDrawContainer } from "./style";

export const UserDraw = ({ setShowUserDrop }) => {
  const { accessToken } = useUser();
  const history = useHistory();

  const handleRegister = () => {
    history.push("/register");
    setShowUserDrop(false);
  };

  return (
    <UserDrawContainer>
      {!accessToken ? (
        <div>
          <p>Entrar:</p>
          <LoginForm />
          <p>
            ou{" "}
            <span className="linkRegister" onClick={handleRegister}>
              Cadastre-se
            </span>
          </p>
        </div>
      ) : (
        <ul>
          <li>Editar perfil</li>
          <li>Logout</li>
        </ul>
      )}
    </UserDrawContainer>
  );
};
