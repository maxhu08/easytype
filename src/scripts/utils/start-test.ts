import { resultsCard, testCard, testInput } from "../ui";
import { tryFocusTestInput } from "./input";
import { setTest } from "./set-text";
import { resetTimer } from "./start-timer";
import { setWordIndex } from "./word-index";

export const handleStartTest = () => {
  setTest();
  setWordIndex(0);
  testInput.value = "";
  resetTimer();

  testCard.classList.replace("hidden", "block");
  resultsCard.classList.replace("block", "hidden");

  tryFocusTestInput();
};
