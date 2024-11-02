import { resultsCard, testCard, testInput } from "../ui";
import { tryFocusTestInput } from "./input";
import { setTestInfo, type TestInfo } from "./set-test-info";
import { setTest } from "./set-text";
import { resetTimer, stopTimer } from "./start-timer";
import { setWordIndex } from "./word-index";

export const handleStartTest = () => {
  const testInfo: TestInfo = {
    words: 20
  };

  setTestInfo(testInfo);
  setTest(testInfo);

  setWordIndex(0);

  testInput.value = "";
  stopTimer();
  resetTimer();

  testCard.classList.replace("hidden", "block");
  resultsCard.classList.replace("block", "hidden");

  tryFocusTestInput();
};
