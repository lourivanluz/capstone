import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/";
import { toast } from "react-toastify";

export const BoxContext = createContext({});

export const BoxProvider = ({ children }) => {
  const [boxList, setBoxList] = useState([]);

  useEffect(() => {
    api
      .get("/boxes")
      .then((response) => setBoxList(response.data))
      .catch((_) =>
        toast.error("Desculpe, algo deu errado", { position: "top-center" })
      );
  }, []);

  return (
    <BoxContext.Provider value={{ boxList }}>{children}</BoxContext.Provider>
  );
};

export const useBox = () => useContext(BoxContext);
