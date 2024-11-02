import { testInput, testInputContainer } from "../ui";

export const tryFocusTestInput = (e?: KeyboardEvent) => {
  // in case already focused
  if (testInput.matches(":focus")) return;

  focusTestInput(e);
};

export const focusTestInput = (e?: Event) => {
  testInputContainer.classList.remove("border-transparent");
  testInputContainer.style.borderColor = "#0ea5e9";

  testInput.focus();
  e?.preventDefault();
};

export const unfocusTestInput = () => {
  testInput.blur();

  testInputContainer.style.borderColor = "#00000000";
  testInputContainer.classList.add("border-transparent");
};
