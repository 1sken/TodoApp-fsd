import { useAtomValue, useSetAtom } from "jotai";
import { setUsersAtom, usersAtom } from "./atom";

export const useUsers = () => {
  return useAtomValue(usersAtom);
};

export const useSetUsers = () => {
  return useSetAtom(setUsersAtom);
};
