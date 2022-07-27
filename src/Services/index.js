import axios from "axios";

const api = axios.create({
  baseURL: "https://inhamapi.herokuapp.com/",
});

const getHeaders = () => {
  const token = localStorage.getItem("@Inham: accessToken") || "";
  const headers = !!token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : "";

  return headers;
};

const genericGet = (url) => {
  const headers = getHeaders();

  return api
    .get(url, headers)
    .then((response) => response)
    .catch((error) => error.response);
};

export const getProducts = () => {
  const url = "/produtos";

  return genericGet(url);
};

export const getProductsPerCategory = (category) => {
  const url = `/produtos?category=${category}`;

  return genericGet(url);
};

export const getProductDetails = (id) => {
  const url = `/produtos/${id}`;

  return genericGet(url);
};

export default api;
