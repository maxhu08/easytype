import { restartTestButton } from "../ui";

export const tryFocusRestartButton = (e: KeyboardEvent) => {
  restartTestButton.focus();
  e.preventDefault();
};

export const unfocusRestartButton = () => {
  restartTestButton.blur();
};
