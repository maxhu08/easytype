import { optionsCard, resultsCard, testCard } from "../ui";

export const displayCard = (cardEl: HTMLDivElement) => {
  testCard.classList.replace("block", "hidden");
  resultsCard.classList.replace("block", "hidden");
  optionsCard.classList.replace("block", "hidden");

  cardEl.classList.replace("hidden", "block");
};
