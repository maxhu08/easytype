import type { TestInfo } from "../types";
import { resultsCard, testCard, testInput } from "../ui";
import { alignCurrentWordIndicator, resetCurrentWordIndicatorColor, showCurrentWordIndicator } from "./current-word-indicator";
import { tryFocusTestInput } from "./input";
import { setCharsTyped, setTestInfo, setWordIndex } from "./set-test-info";
import { setTest } from "./set-text";
import { resetTimer, stopTimer } from "./start-timer";

export const handleStartTest = () => {
  const testInfo: TestInfo = {
    words: 2
  };

  setTestInfo(testInfo);
  setTest(testInfo);

  setWordIndex(0);
  setCharsTyped(0);

  testInput.value = "";
  stopTimer();
  resetTimer();

  testCard.classList.replace("hidden", "block");
  resultsCard.classList.replace("block", "hidden");

  const firstWordSpan = document.getElementById(`w-${0}`) as HTMLSpanElement;
  alignCurrentWordIndicator(firstWordSpan);
  resetCurrentWordIndicatorColor();
  showCurrentWordIndicator();

  tryFocusTestInput();
};
