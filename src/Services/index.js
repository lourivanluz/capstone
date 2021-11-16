import axios from "axios";

const api = axios.create({
  baseURL: "https://behelty-api.herokuapp.com/",
});

const getHeaders = () => {
  const token = localStorage.getItem("@BHealthy: accessToken") || "";
  const headers = !!token
    ? {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    : "";

  return headers;
};

const genericPost = (url, data) => {
  const headers = getHeaders();

  return api
    .post(url, data, headers)
    .then((response) => response)
    .catch((error) => error.response);
};

const genericGet = (url) => {
  const headers = getHeaders();

  return api
    .get(url, headers)
    .then((response) => response)
    .catch((error) => error.response);
};

const genericPatch = (url, data) => {
  const headers = getHeaders();

  return api
    .patch(url, data, headers)
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
