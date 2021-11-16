import { useHistory } from "react-router";
import { useUser } from "../../../Providers/User";
import LoginForm from "../../LoginForm";
import { UserDrawContainer } from "./style";

export const UserDraw = ({ setShowUserDrop }) => {
  const { accessToken, logout } = useUser();
  const history = useHistory();

  const handleRegister = () => {
    history.push("/register");
    setShowUserDrop(false);
  };

  const handleLogout = () => {
    logout();
    console.log(accessToken);
    setShowUserDrop(false);
  };

  return (
    <UserDrawContainer>
      {!accessToken ? (
        <div className="formContainer">
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
          <li onClick={handleRegister}>Editar perfil</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      )}
    </UserDrawContainer>
  );
};
