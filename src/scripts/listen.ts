import { testInput } from "./ui";
import { getCurrentState } from "./utils/current-state";
import { finishTest } from "./utils/finish-test";
import { focusTestInput, tryFocusTestInput, unfocusTestInput } from "./utils/input";
import { tryFocusRestartButton, unfocusRestartButton } from "./utils/restart-button";
import { startTimer } from "./utils/start-timer";
import { getWordIndex, setWordIndex } from "./utils/word-index";

export const listenToEvents = () => {
  listenFocusTestInput();
  listenUnfocusTestInput();

  listenCompleteWord();
  listenCharInput();
};

const listenUnfocusTestInput = () => {
  testInput.addEventListener("blur", () => {
    // prevent getting unfocused on window unfocus
    if (document.hasFocus()) unfocusTestInput();
  });
};

const listenFocusTestInput = () => {
  testInput.addEventListener("focus", (e) => focusTestInput(e));
};

const listenCompleteWord = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      unfocusTestInput();
      unfocusRestartButton();
    }

    if (e.key === "Tab") {
      tryFocusRestartButton(e);
    }

    if (e.key === " " && getCurrentState() === "in-progress") {
      e.preventDefault();
      tryFocusTestInput(e);
      let wordIndex = getWordIndex();

      const wordSpanEl = document.getElementById(`w-${wordIndex}`) as HTMLSpanElement;

      if (testInput.value === wordSpanEl.textContent) {
        const prevWordSpanEl = document.getElementById(`w-${wordIndex}`) as HTMLSpanElement;

        prevWordSpanEl.classList.remove("bg-neutral-500", "text-white");
        prevWordSpanEl.classList.add("text-emerald-500");

        wordIndex += 1;
        setWordIndex(wordIndex);

        if (wordIndex === 20) {
          finishTest();
        } else {
          const currWordSpanEl = document.getElementById(`w-${wordIndex}`) as HTMLSpanElement;
          currWordSpanEl.classList.add("bg-neutral-500", "rounded-md");
          testInput.value = "";
        }
      }
    }
  });
};

const listenCharInput = () => {
  testInput.addEventListener("input", () => {
    const wordIndex = getWordIndex();
    const currWordSpanEl = document.getElementById(`w-${wordIndex}`) as HTMLSpanElement;

    if (wordIndex === 0 && testInput.value.length === 1) startTimer();

    const correctSoFar = currWordSpanEl.textContent?.startsWith(testInput.value);

    if (!correctSoFar) currWordSpanEl.classList.replace("bg-neutral-500", "bg-rose-500");
    else currWordSpanEl.classList.replace("bg-rose-500", "bg-neutral-500");

    if (wordIndex === 19 && testInput.value === currWordSpanEl.textContent) finishTest();
  });
};
