import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import api from "../../Services/";

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

  const logout = () => {
    setData({});
    localStorage.removeItem("@BHealthy: accessToken");
    localStorage.removeItem("@BHealthy: user");
  };

  const createAccount = (userInput) => {
    const payload = {
      subscriber: false,
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
    let payload = {};

    !!userInput.name && (payload.name = userInput.name);
    !!userInput.email && (payload.email = userInput.email);
    !!userInput.phone && (payload.phone = userInput.phone);
    !!userInput.cep && (payload.cep = userInput.cep);
    !!userInput.address && (payload.address = userInput.address);
    !!userInput.area && (payload.area = userInput.area);
    !!userInput.number && (payload.number = userInput.number);
    !!userInput.complement && (payload.complement = userInput.complement);

    api
      .patch(`/users/${data.user.id}`, payload, {
        headers: { Authorization: `Bearer ${data.accessToken}` },
      })
      .then((response) => {
        setData({ accessToken: data.accessToken, response });
      })
      .catch((_) => console.log("Desculpe, algo deu errado"));
  };

  const subscribeAccount = () => {
    const payload = { subscriber: true };

    api
      .patch(`/users/${data.user.id}`, payload, {
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
        subscribeAccount,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
