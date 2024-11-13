import type { TestInfo } from "./types";
import { currentWordIndicator, testInput, testText } from "./ui";
import { getConfig } from "./utils/config/config-helpers";
import { getCurrentState, setCurrentState } from "./utils/current-state";
import {
  alignCurrentWordIndicator,
  hideCurrentWordIndicator,
  showCurrentWordIndicator
} from "./utils/current-word-indicator";
import { finishTest } from "./utils/finish-test";
import { focusTestInput, tryFocusTestInput, unfocusTestInput } from "./utils/input";
import { tryFocusRestartButton, unfocusRestartButton } from "./utils/restart-button";
import {
  getCharsTyped,
  getWordIndex,
  setCharsTyped,
  setTestStartTime,
  setWordIndex
} from "./utils/set-test-info";
import { startTimer } from "./utils/timer";

export const listenToEvents = () => {
  listenGlobalKeys();

  listenFocusTestInput();
  listenUnfocusTestInput();

  listenCompleteWord();
  listenCharInput();

  realignCurrentWordIndicatorOnResize();
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
  testInput.addEventListener("keydown", (e) => {
    if (e.key === " " && getCurrentState() === "in-progress") {
      e.preventDefault();
      let wordIndex = getWordIndex();

      const wordSpanEl = document.getElementById(`w-${wordIndex}`) as HTMLSpanElement;

      if (testInput.value === wordSpanEl.textContent) {
        const totalWords = getConfig().testInfo.words;
        const isLastWord = wordIndex === totalWords;

        wordSpanEl.classList.add("text-emerald-500");
        setCharsTyped(getCharsTyped() + wordSpanEl.textContent.length + (isLastWord ? 0 : 1));
        wordIndex += 1;
        setWordIndex(wordIndex);

        if (isLastWord) {
          finishTest();
        } else {
          const currWordSpanEl = document.getElementById(`w-${wordIndex}`) as HTMLSpanElement;
          showCurrentWordIndicator();
          const movedDown = alignCurrentWordIndicator(currWordSpanEl);

          if (wordIndex !== 1 && movedDown) {
            const prevWordSpanEls = Array.from(testText.querySelectorAll("span"));
            for (const span of prevWordSpanEls) {
              if (span === currWordSpanEl) break;
              span.remove();
            }

            alignCurrentWordIndicator(currWordSpanEl);
          }

          testInput.value = "";
        }
      }
    }
  });
};

const listenCharInput = () => {
  testInput.addEventListener("input", () => {
    const wordIndex = getWordIndex();
    const wordSpanEl = document.getElementById(`w-${wordIndex}`) as HTMLSpanElement;

    // user starts typing
    if (wordIndex === 0 && testInput.value.length === 1) {
      setTestStartTime(Date.now());

      if (getCurrentState() === "not-started") {
        startTimer();
        setCurrentState("in-progress");
      }
    }

    const correctSoFar = wordSpanEl.textContent?.startsWith(testInput.value);

    if (!correctSoFar) currentWordIndicator.classList.replace("bg-neutral-500", "bg-rose-500");
    else currentWordIndicator.classList.replace("bg-rose-500", "bg-neutral-500");

    if (getConfig().currentWordIndicatorAnimations === "on") {
      currentWordIndicator.style.scale = "1.20";
      setTimeout(() => {
        currentWordIndicator.style.scale = "1.00";
      }, 50);
    }

    const totalWords = getConfig().testInfo.words;
    const isLastWord = wordIndex === totalWords - 1;

    if (isLastWord && testInput.value === wordSpanEl.textContent) {
      setCharsTyped(
        getCharsTyped() + (wordSpanEl.textContent as string).length + (isLastWord ? 0 : 1)
      );
      finishTest();
    }
  });
};

export const listenGlobalKeys = () => {
  document.addEventListener("keydown", (e) => {
    if (e.key === " ") tryFocusTestInput(e);

    if (e.key === "Escape") {
      unfocusTestInput();
      unfocusRestartButton();
    }

    if (e.key === "Tab") tryFocusRestartButton(e);
  });
};

const realignCurrentWordIndicatorOnResize = () => {
  window.addEventListener("resize", () => {
    hideCurrentWordIndicator();
  });
};
