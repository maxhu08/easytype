import { currentWordIndicator } from "../ui";

export const alignCurrentWordIndicator = (wordSpanEl: HTMLSpanElement) => {
  const rect = wordSpanEl.getBoundingClientRect();

  const x = rect.x;
  const y = rect.y;
  const w = rect.width;
  const h = rect.height;

  currentWordIndicator.style.position = "absolute";
  currentWordIndicator.style.left = `${x}px`;
  currentWordIndicator.style.top = `${y}px`;
  currentWordIndicator.style.width = `${w}px`;
  currentWordIndicator.style.height = `${h}px`;

  console.log({ x, y, w, h });
};
