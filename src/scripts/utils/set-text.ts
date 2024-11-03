import english from "../../languages/english";
import type { TestInfo } from "../types";
import { testText } from "../ui";
import { setCurrentState } from "./current-state";
import { alignCurrentWordIndicator } from "./current-word-indicator";

export const setTest = ({ words }: TestInfo) => {
  testText.textContent = "";

  setCurrentState("in-progress");

  for (let i = 0; i < words; i++) {
    const word = english.words[Math.floor(Math.random() * english.words.length)];
    const span = document.createElement("span");
    span.id = `w-${i}`;
    span.style.zIndex = "100";
    span.textContent = word;

    testText.appendChild(span);

    if (i !== words - 1) testText.appendChild(document.createTextNode(" "));
  }

  const firstWordSpan = document.getElementById(`w-${0}`) as HTMLSpanElement;
  alignCurrentWordIndicator(firstWordSpan);
};
