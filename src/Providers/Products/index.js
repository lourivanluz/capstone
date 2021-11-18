import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getProducts, getProductsPerCategory } from "../../Services";

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filteredInputProducts, setFilteredInputProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response.data);
      })
      .catch((_) =>
        toast.error("Desculpe, algo deu errado", { position: "top-center" })
      );
  }, []);

  const filterPerCategory = (category) => {
    getProductsPerCategory(category)
      .then((response) => setFilteredProducts(response.data))
      .catch((_) =>
        toast.error("Desculpe, algo deu errado", { position: "top-center" })
      );
  };

  const filterPerInput = (value) => {
    value.toLowerCase();
    if (value === "") {
      setFilteredInputProducts([]);
    } else {
      const filterProd = products.filter(
        (product) =>
          product.title.toLowerCase().includes(value) ||
          product.description.toLowerCase().includes(value) ||
          product.category.toLowerCase().includes(value) ||
          product.ingredient.toLowerCase().includes(value)
      );
      setFilteredInputProducts(filterProd);
    }
  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        filteredProducts,
        filterPerCategory,
        filteredInputProducts,
        filterPerInput,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => useContext(ProductsContext);
