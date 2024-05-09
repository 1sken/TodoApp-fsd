import axios from "axios";

export const apiUrl = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
