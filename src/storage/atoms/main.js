import { atom } from "recoil";

export const dataState = atom({
  key: "dataState",
  default: null,
});
export const formatListState = atom({
  key: "formatListState",
  default: "vertical",
});
export const locationHistoryState = atom({
  key: "locationHistoryState",
  default: [],
});
