import { testText } from "../ui";

type CurrentState = "in-progress" | "finished";

export const getCurrentState = () => {
  return testText.getAttribute("current-state") as CurrentState;
};

export const setCurrentState = (state: CurrentState) => {
  testText.setAttribute("current-state", state.toString());
};
