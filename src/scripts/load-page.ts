import { listenToEvents } from "./listen";
import { optionsButton, optionsDoneButton, restartTestButton } from "./ui";
import { getConfig } from "./utils/config/config-helpers";
import { fillOptions } from "./utils/config/fill-options";
import { handleAllButtonSwitches } from "./utils/config/handle-switch";
import { saveOptionsToConfig } from "./utils/config/save-options";
import { closeOptions, openOptions } from "./utils/open-options";
import { handleStartTest } from "./utils/start-test";

export const loadPage = () => {
  const config = getConfig();

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
