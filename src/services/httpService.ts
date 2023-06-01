import axios from "axios";

const app = axios.create({
  baseURL: "https://api.open-meteo.com/v1/forecast",
});

const http = {
  get: app.get,
  post: app.post,
  put: app.put,
  delete: app.delete,
};

export default http;
