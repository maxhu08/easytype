import { resultsCard, testCard, wpmText } from "../ui";
import { setCurrentState } from "./current-state";
import { formatTime } from "./format";
import { getTestInfo } from "./set-test-info";
import { setTestEndTime, getTestStartTime, getTestEndTime } from "./set-time";
import { stopTimer } from "./start-timer";

export const finishTest = () => {
  setTestEndTime(Date.now());

  setCurrentState("finished");

  testCard.classList.replace("block", "hidden");
  resultsCard.classList.replace("hidden", "block");

  stopTimer();

  const testInfo = getTestInfo();

  const timeAsMinutes = (getTestEndTime() - getTestStartTime()) / 60000;
  const wpm = Math.floor(testInfo.words / timeAsMinutes);

  wpmText.textContent = wpm + " wpm";
};
