import { resultsCard, testCard, testInput } from "./ui";
import { focusTestInput, tryFocusTestInput, unfocusTestInput } from "./utils/input";
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
    if (e.key === "Escape") unfocusTestInput();
    if (e.key === " ") {
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
          testCard.classList.replace("block", "hidden");
          resultsCard.classList.replace("hidden", "block");
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
    const correctSoFar = currWordSpanEl.textContent?.startsWith(testInput.value);

    if (!correctSoFar) currWordSpanEl.classList.replace("bg-neutral-500", "bg-rose-500");
    else currWordSpanEl.classList.replace("bg-rose-500", "bg-neutral-500");
  });
};
