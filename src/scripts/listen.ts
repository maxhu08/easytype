import { testInput } from "./ui";
import { focusTestInput, unfocusTestInput } from "./input";

export const listenToEvents = () => {
  testInput.addEventListener("blur", () => {
    // prevent getting unfocused on window unfocus
    if (document.hasFocus()) unfocusTestInput();
  });

  testInput.addEventListener("focus", (e) => focusTestInput(e));
};
