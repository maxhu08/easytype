import { charsText, resultsCard, testCard, wordsText, wpmText } from "../ui";
import { setCurrentState } from "./current-state";
import { getCharsTyped, getTestEndTime, getTestInfo, getTestStartTime, setTestEndTime } from "./set-test-info";
import { stopTimer } from "./start-timer";

export const finishTest = () => {
  setTestEndTime(Date.now());

  setCurrentState("finished");

  testCard.classList.replace("block", "hidden");
  resultsCard.classList.replace("hidden", "block");

  stopTimer();

  const testInfo = getTestInfo();
  const charsTyped = getCharsTyped();

  const timeAsMinutes = (getTestEndTime() - getTestStartTime()) / 60000;
  const wpm = Math.floor(charsTyped / (timeAsMinutes * 5));

  wpmText.textContent = wpm + " wpm";
  wordsText.textContent = testInfo.words + " words";
  charsText.textContent = charsTyped + " chars";
};
