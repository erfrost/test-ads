import { atom } from "recoil";

export const dataState = atom({
  key: "dataState",
  default: null,
});
export const formatListState = atom<string>({
  key: "formatListState",
  default: "vertical",
});
export const locationHistoryState = atom<string[]>({
  key: 'locationHistory',
  default: [],
});
