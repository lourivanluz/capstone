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

  const logout = () => {
    localStorage.removeItem("@BHealthy: accessToken");
    localStorage.removeItem("@BHealthy: user");
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
          <li onClick={handleRegister}>Editar perfil</li>
          <li onClick={logout}>Logout</li>
        </ul>
      )}
    </UserDrawContainer>
  );
};
