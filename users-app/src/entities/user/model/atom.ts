/* eslint-disable @typescript-eslint/no-unused-vars */
import { atom } from "jotai";
import { User, getUsers } from "../api";
import { atomWithDefault } from "jotai/utils";

export const usersAtom = atomWithDefault<User[] | null>((_get) => null);

export const setUsersAtom = atom<unknown, unknown[], unknown>(
  (get) => get(usersAtom),
  async (_get, set) => {
    const data = await getUsers();

    if (!data) {
      set(usersAtom, []);
    } else {
      set(usersAtom, data);
    }
  }
);
