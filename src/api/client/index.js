// error handling
// error 401 (unauth) -> redirectto login pages
// api interceptor -> show a loader
// auth-token

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5500",
});

export default api;
