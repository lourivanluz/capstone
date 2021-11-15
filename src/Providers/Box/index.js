import { createContext, useContext, useEffect, useState } from "react";
import api from "../../Services/";

export const BoxContext = createContext({});

export const BoxProvider = ({ children }) => {
  const [boxList, setBoxList] = useState();

  useEffect(() => {
    api
      .get("/boxes")
      .then((response) => setBoxList(response.data))
      .catch((err) => console.log("deu errado"));
  }, []);

  return (
    <BoxContext.Provider value={{ boxList }}>{children}</BoxContext.Provider>
  );
};

export const useBox = () => useContext(BoxContext);