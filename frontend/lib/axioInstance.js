import axios from "axios";

const url = "http://localhost:5050/api/users";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const axioInstance = axios.create({ baseURL: url, ...config });

export default axioInstance;
