import { testInput } from "./ui";
import { focusTestInput, tryFocusTestInput, unfocusTestInput } from "./input";

export const listenToEvents = () => {
  testInput.addEventListener("blur", () => {
    // prevent getting unfocused on window unfocus
    if (document.hasFocus()) unfocusTestInput();
  });

  testInput.addEventListener("focus", (e) => focusTestInput(e));

  let wordIndex = 0;
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") unfocusTestInput();
    if (e.key === " ") {
      e.preventDefault();
      tryFocusTestInput(e);

      const wordSpanEl = document.getElementById(`w-${wordIndex}`) as HTMLSpanElement;

      if (testInput.value === wordSpanEl.textContent) {
        const prevWordSpanEl = document.getElementById(`w-${wordIndex}`) as HTMLSpanElement;

        prevWordSpanEl.classList.remove("bg-neutral-500", "text-white");
        prevWordSpanEl.classList.add("text-emerald-500");

        wordIndex++;

        const currWordSpanEl = document.getElementById(`w-${wordIndex}`) as HTMLSpanElement;
        currWordSpanEl.classList.add("bg-neutral-500");

        testInput.value = "";
      }
    }
  });
};
