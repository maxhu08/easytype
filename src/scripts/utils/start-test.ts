import { testCard, testInput } from "../ui";
import { displayCard } from "./card";
import { getConfig } from "./config/config-helpers";
import { alignCurrentWordIndicator, resetCurrentWordIndicatorColor, showCurrentWordIndicator } from "./current-word-indicator";
import { tryFocusTestInput } from "./input";
import { insertCSS } from "./manipulate-css";
import { setCharsTyped, setTestInfo, setWordIndex } from "./set-test-info";
import { setTest } from "./set-text";
import { resetTimer, stopTimer } from "./start-timer";

export const handleStartTest = () => {
  const config = getConfig();

  if (config.currentWordIndicatorAnimations === "on") insertCSS("indicator-styles", ".indicator-animation{transition:150ms cubic-bezier(0.25, 1.25, 0.5, 1);}");
  else if (config.currentWordIndicatorAnimations === "off") insertCSS("indicator-styles", ".indicator-animation{transition:0s !important;}");

  setTestInfo(config.testInfo);
  setTest(config.testInfo);

  setWordIndex(0);
  setCharsTyped(0);

  testInput.value = "";
  stopTimer();
  resetTimer();

  const testCardShown = testCard.classList.contains("block");

  if (!testCardShown) {
    displayCard(testCard).then(() => {
      handleTestCardAlreadyShown();
    });
  } else handleTestCardAlreadyShown();
};

const handleTestCardAlreadyShown = () => {
  const firstWordSpan = document.getElementById(`w-${0}`) as HTMLSpanElement;
  alignCurrentWordIndicator(firstWordSpan);
  resetCurrentWordIndicatorColor();
  showCurrentWordIndicator();

  tryFocusTestInput();
};
