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
        // prettier-ignore
        (document.getElementById(`w-${wordIndex}`) as HTMLSpanElement).classList.remove("bg-neutral-500");
        wordIndex++;
        // prettier-ignore
        (document.getElementById(`w-${wordIndex}`) as HTMLSpanElement).classList.add("bg-neutral-500");

        testInput.value = "";
      }
    }
  });
};
