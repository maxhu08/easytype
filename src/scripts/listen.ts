import { testInput } from "./ui";
import { focusTestInput, tryFocusTestInput, unfocusTestInput } from "./input";

export const listenToEvents = () => {
  testInput.addEventListener("blur", () => {
    // prevent getting unfocused on window unfocus
    if (document.hasFocus()) unfocusTestInput();
  });

  testInput.addEventListener("focus", (e) => focusTestInput(e));

  document.addEventListener("keydown", (e) => {
    if (e.key === " ") tryFocusTestInput(e);
  });
};
