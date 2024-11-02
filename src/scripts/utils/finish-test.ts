import { resultsCard, testCard, wpmText } from "../ui";
import { setCurrentState } from "./current-state";
import { formatTime } from "./format";
import { setTestEndTime, getTestStartTime, getTestEndTime } from "./set-time";
import { stopTimer } from "./start-timer";

export const finishTest = () => {
  setTestEndTime(Date.now());

  setCurrentState("finished");

  testCard.classList.replace("block", "hidden");
  resultsCard.classList.replace("hidden", "block");

  stopTimer();

  const timeAsMinutes = (getTestEndTime() - getTestStartTime()) / 60000;
  const wpm = 20 / timeAsMinutes;

  wpmText.textContent = wpm.toFixed() + " wpm";
};
