import { selector } from "recoil";
import {
  dataState,
  formatListState,
  locationHistoryState,
} from "../atoms/main";

export const dataSelector = selector({
  key: "dataSelector",
  get: ({ get }) => get(dataState),
  set: ({ set }, value) =>
    set(dataState, (state) => ({ ...state, value: value })), // setter example
});
export const formatListSelector = selector({
  key: "formatListSelector",
  get: ({ get }) => get(formatListState),
  set: ({ set }, value) =>
    set(formatListState, (state) => ({ ...state, value: value })), // setter example
});
export const locationHistorySelector = selector({
  key: "locationHistorySelector",
  get: ({ get }) => get(locationHistoryState),
  set: ({ set }, value) =>
    set(locationHistoryState, (state) => ({ ...state, value: value })), // setter example
});
