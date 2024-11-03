import { optionsCard, resultsCard, testCard } from "../ui";

export const displayCard = (cardEl: HTMLDivElement) => {
  testCard.classList.replace("block", "hidden");
  resultsCard.classList.replace("block", "hidden");
  optionsCard.classList.replace("block", "hidden");

  cardEl.classList.add("animate-up-bouncy");
  cardEl.classList.replace("hidden", "block");

  return new Promise<void>((resolve) => {
    cardEl.offsetHeight; // forces a reflow

    setTimeout(() => {
      resolve();
    }, 950);
  });
};
