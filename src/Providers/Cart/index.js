import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState(() => {
    return JSON.parse(localStorage.getItem("@BHealthy: cart")) || [];
  });
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCartList([...cartList, product]);
    localStorage.setItem("@BHealthy: cart", JSON.stringify(cartList));
  };

  const rmvToCart = (idProduct) => {
    //refatorar depois
    const newCartList = cartList
      .filter((item) => item.id === idProduct)
      .slice(1);
    const filtred = cartList.filter((item) => item.id !== idProduct);
    setCartList([...filtred, ...newCartList]);
    localStorage.setItem("@BHealthy: cart", JSON.stringify(cartList));
  };

  const rmvAllIDProducts = (idProduct) => {
    const newCartList = cartList.filter((item) => item.id !== idProduct);
    setCartList(newCartList);
    localStorage.setItem("@BHealthy: cart", JSON.stringify(cartList));
  };

  const clearCart = () => {
    setCartList([]);
    localStorage.setItem("@BHealthy: cart", JSON.stringify(cartList));
  };

  return (
    <CartContext.Provider
      value={{
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
