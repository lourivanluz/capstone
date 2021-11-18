import { createContext, useContext, useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import api from "../../Services/";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const accessToken = localStorage.getItem("@Inham: accessToken");
    const user = localStorage.getItem("@Inham: user");

    if (accessToken && user) {
      return { accessToken, user: JSON.parse(user) };
    }

    return {};
  });

  const logout = () => {
    setData({});
    localStorage.removeItem("@Inham: accessToken");
    localStorage.removeItem("@Inham: user");

    toast.success("Volte sempre!", { position: "top-center" });
  };

  const loginAccount = (userInput) => {
    const payload = {
      email: userInput.email,
      password: userInput.password,
    };

    api
      .post("/login", payload)
      .then((response) => {
        const { accessToken, user } = response.data;

        localStorage.setItem("@Inham: accessToken", accessToken);
        localStorage.setItem("@Inham: user", JSON.stringify(user));

        setData({ accessToken, user });

        toast.success(`Bem vindo, ${user.name}!`, {
          position: "top-center",
        });
      })
      .catch((_) => {
        toast.error("E-mail ou senha incorretos", { position: "top-center" });
      });
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
      .then((_) => {
        loginAccount(payload);
      })
      .catch((_) =>
        toast.info("E-mail já cadastrado", { position: "top-center" })
      );
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
        localStorage.setItem("@Inham: user", JSON.stringify(response.data));
        setData({ accessToken: data.accessToken, user: response.data });
        toast.success("Alterações salvas", { position: "top-center" });
      })
      .catch((_) =>
        toast.error("Desculpe, algo deu errado", { position: "top-center" })
      );
  };

  const subscribeAccount = () => {
    const payload = { subscriber: true };

    api
      .patch(`/users/${data.user.id}`, payload, {
        headers: { Authorization: `Bearer ${data.accessToken}` },
      })
      .then((response) => {
        localStorage.setItem("@Inham: user", JSON.stringify(response.data));
        setData({ accessToken: data.accessToken, user: response.data });
        toast.success("Aproveite os descontos!", {
          position: "top-center",
        });
      })
      .catch((_) =>
        toast.error("Desculpe, algo deu errado", { position: "top-center" })
      );
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
