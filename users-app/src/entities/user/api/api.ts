import { apiUrl } from "~shared/api/axiosInstance";
import { routes } from "./routes";
import { User } from "./types";

export const getUsers = () => {
  return apiUrl.get<string, User[]>(routes.getUsers());
};
