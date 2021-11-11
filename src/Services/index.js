import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
});

const getHeaders = () => {
  const token = localStorage.getItem("token") || "";
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

export default api;
