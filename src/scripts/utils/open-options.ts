import { optionsCard } from "../ui";
import { displayCard } from "./card";
import { hideCurrentWordIndicator } from "./current-word-indicator";
import { handleStartTest } from "./start-test";
import { resetTimer, stopTimer } from "./timer";

export const openOptions = () => {
  hideCurrentWordIndicator();
  stopTimer();
  resetTimer();
  displayCard(optionsCard);
};

export const closeOptions = () => {
  handleStartTest();
};
