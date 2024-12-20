import { charsText, resultsCard, testTypeText, timeText, wordsText, wpmText } from "../ui";
import { displayCard } from "./card";
import { setCurrentState } from "./current-state";
import { hideCurrentWordIndicator } from "./current-word-indicator";
import { formatTimeShort } from "./format";
import {
  getCharsTyped,
  getTestEndTime,
  getTestInfo,
  getTestStartTime,
  setTestEndTime
} from "./set-test-info";
import { hideTimer, stopTimer } from "./timer";

export const finishTest = () => {
  setTestEndTime(Date.now());

  setCurrentState("finished");

  hideCurrentWordIndicator();
  displayCard(resultsCard);

  stopTimer();
  hideTimer();

  const testInfo = getTestInfo();
  const charsTyped = getCharsTyped();

  const time = getTestEndTime() - getTestStartTime();
  const timeAsMinutes = time / 60000;
  const wpm = Math.floor(charsTyped / (timeAsMinutes * 5));

  if (wpm < 1) {
    wpmText.textContent = "< 0 wpm";
  } else {
    wpmText.textContent = wpm + " wpm";
  }
  testTypeText.textContent = "words " + testInfo.words;

  wordsText.textContent = testInfo.words + " words";
  charsText.textContent = charsTyped + " chars";
  timeText.textContent = formatTimeShort(time) + "s";
};
