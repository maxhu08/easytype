import { resultsCard, testCard, testInput } from "../ui";
import { focusTestInput, tryFocusTestInput } from "./input";
import { setTest } from "./set-text";
import { setWordIndex } from "./word-index";

export const handleStartTest = () => {
  setTest();
  setWordIndex(0);
  testInput.value = "";

  tryFocusTestInput();

  testCard.classList.replace("hidden", "block");
  resultsCard.classList.replace("block", "hidden");
};
