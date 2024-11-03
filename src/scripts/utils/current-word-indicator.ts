import { currentWordIndicator } from "../ui";

export const alignCurrentWordIndicator = (wordSpanEl: HTMLSpanElement) => {
  const rect = wordSpanEl.getBoundingClientRect();

  const x = rect.x;
  const y = rect.y;
  const w = rect.width;
  const h = rect.height;

  currentWordIndicator.style.left = `${x}px`;
  currentWordIndicator.style.top = `${y}px`;
  currentWordIndicator.style.width = `${w}px`;
  currentWordIndicator.style.height = `${h}px`;
};

export const hideCurrentWordIndicator = () => {
  currentWordIndicator.classList.replace("block", "hidden");
};

export const showCurrentWordIndicator = () => {
  currentWordIndicator.classList.replace("hidden", "block");
};

export const resetCurrentWordIndicatorColor = () => {
  currentWordIndicator.classList.replace("bg-rose-500", "bg-neutral-500");
};
