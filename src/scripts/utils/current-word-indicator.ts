import { currentWordIndicator } from "../ui";

let previousY = 0;

export const alignCurrentWordIndicator = (wordSpanEl: HTMLSpanElement) => {
  const rect = wordSpanEl.getBoundingClientRect();
  const { x, y, width: w, height: h } = rect;

  const movedDown = y > previousY;
  previousY = y;

  currentWordIndicator.style.left = `${x}px`;
  currentWordIndicator.style.top = `${y}px`;
  currentWordIndicator.style.width = `${w}px`;
  currentWordIndicator.style.height = `${h}px`;

  return movedDown;
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
