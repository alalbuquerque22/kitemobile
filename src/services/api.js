import axios from "axios";

const api = axios.create({
  baseURL: "http://140.82.62.112:3333/address/zipcode",
});

export default api;
