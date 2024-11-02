import type { CurrentState } from "../types";
import { testText } from "../ui";

export const getCurrentState = () => {
  return testText.getAttribute("current-state") as CurrentState;
};

export const setCurrentState = (state: CurrentState) => {
  testText.setAttribute("current-state", state.toString());
};
