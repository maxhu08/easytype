import { resultsCard, testCard } from "../ui";
import { setCurrentState } from "./current-state";
import { stopTimer } from "./start-timer";

export const finishTest = () => {
  setCurrentState("finished");
  testCard.classList.replace("block", "hidden");
  resultsCard.classList.replace("hidden", "block");
  stopTimer();
};
