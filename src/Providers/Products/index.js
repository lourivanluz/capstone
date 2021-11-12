import { createContext, useContext, useEffect, useState } from "react";
import { getProducts, getProductsPerCategory } from "../../Services";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterPerCategory = (category) => {
    getProductsPerCategory(category)
      .then((response) => setFilteredProducts(response.data))
      .catch((err) => console.log(err));
  };

  const showAllProducts = () => {
    setFilteredProducts([]);
  };

  return (
    <ProductsContext.Provider
      value={{ products, filteredProducts, filterPerCategory, showAllProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
