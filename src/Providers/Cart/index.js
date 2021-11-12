import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartList([...cartList]);
  };

  const rmvToCart = (idProduct) => {
    //refatorar depois
    const newCartList = cartList
      .filter((item) => item.id === idProduct)
      .slice(1);
    const filtred = cartList.filter((item) => item.id !== idProduct);
    setCartList([...filtred, ...newCartList]);
  };

  const rmvAllIDProducts = (idProduct) => {
    const newCartList = cartList.filter((item) => item.id !== idProduct);
    setCartList(newCartList);
  };

  const clearCart = () => {
    setCartList([]);
  };

  const handleShowCart = () => {
    setShowCart(!showCart);
  };

  return (
    <CartContext.Provider
      value={{
        handleShowCart,
        rmvAllIDProducts,
        rmvToCart,
        addToCart,
        clearCart,
        setShowCart,
        showCart,
        cartList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
