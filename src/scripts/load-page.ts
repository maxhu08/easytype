import { listenToEvents } from "./listen";
import { optionsButton, optionsDoneButton, restartTestButton } from "./ui";
import { getConfig } from "./utils/config/config-helpers";
import { fillOptions } from "./utils/config/fill-options";
import { handleAllButtonSwitches } from "./utils/config/handle-switch";
import { saveOptionsToConfig } from "./utils/config/save-options";
import { insertCSS } from "./utils/insert-css";
import { closeOptions, openOptions } from "./utils/open-options";
import { handleStartTest } from "./utils/start-test";

export const loadPage = () => {
  const config = getConfig();

  if (config.currentWordIndicatorAnimations === "on") insertCSS(".indicator-animation{transition:150ms cubic-bezier(0.25, 1.25, 0.5, 1);}");
  else if (config.currentWordIndicatorAnimations === "off") insertCSS(".indicator-animation{transition:0s !important;}");

  handleStartTest();
  listenToEvents();

  restartTestButton.onclick = () => handleStartTest();
  optionsButton.onclick = () => openOptions();
  optionsDoneButton.onclick = () => {
    saveOptionsToConfig();
    closeOptions();
  };

  handleAllButtonSwitches();
  fillOptions(config);
};
