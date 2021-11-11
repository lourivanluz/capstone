import { createContext, useContext, useState } from "react";
import { api } from "./../../Services/";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const accessToken = localStorage.getItem("@BHealthy: accessToken");
    const user = localStorage.getItem("@BHealthy: user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {};
  });

  const createAccount = (userInput) => {
    const payload = {
      name: userInput.name,
      email: userInput.email,
      phone: userInput.phone,
      password: userInput.password,
      cep: userInput.cep,
      address: userInput.address,
      area: userInput.cep,
      number: userInput.number,
      complement: userInput.complement,
    };

    api
      .post("/register", payload)
      .then((response) => {
        const { accessToken, user } = response.data;

        localStorage.setItem("@BHealthy: accessToken", accessToken);
        localStorage.setItem("@BHealthy: user", JSON.stringify(user));

        setData({ accessToken, user });
      })
      .catch((_) => console.log("Email já cadastrado"));
  };

  const loginAccount = (userInput) => {
    const payload = {
      name: userInput.name,
      email: userInput.email,
    };

    api
      .post("/login", payload)
      .then((response) => {
        const { accessToken, user } = response.data;

        localStorage.setItem("@BHealthy: accessToken", accessToken);
        localStorage.setItem("@BHealthy: user", JSON.stringify(user));

        setData({ accessToken, user });
      })
      .catch((_) => console.log("Email ou senha incorretos"));
  };

  const editAccount = (userInput) => {
    api
      .patch(`/users/${data.user.id}`, userInput, {
        headers: { Authorization: `Bearer ${data.accessToken}` },
      })
      .then((response) => {
        setData({ accessToken: data.accessToken, response });
      })
      .catch((_) => console.log("Desculpe, algo deu errado"));
  };

  return (
    <UserContext.Provider
      value={{
        accessToken: data.accessToken,
        user: data.user,
        createAccount,
        loginAccount,
        editAccount,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
