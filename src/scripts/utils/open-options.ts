import { optionsCard, testCard } from "../ui";
import { displayCard } from "./card";
import { hideCurrentWordIndicator, showCurrentWordIndicator } from "./current-word-indicator";
import { handleStartTest } from "./start-test";
import { resetTimer, stopTimer } from "./start-timer";

export const openOptions = () => {
  hideCurrentWordIndicator();
  stopTimer();
  resetTimer();
  displayCard(optionsCard);
};

export const closeOptions = () => {
  displayCard(testCard);
  handleStartTest();
};
