import { listenToEvents } from "./listen";
import { optionsButton, optionsDoneButton, restartTestButton } from "./ui";
import { getConfig } from "./utils/config/config-helpers";
import { fillOptions } from "./utils/config/fill-options";
import { handleAllButtonSwitches } from "./utils/config/handle-switch";
import { closeOptions, openOptions } from "./utils/open-options";
import { getTestInfo } from "./utils/set-test-info";
import { handleStartTest } from "./utils/start-test";

const config = getConfig();

handleStartTest();
const testInfo = getTestInfo();

listenToEvents(testInfo);

restartTestButton.onclick = () => handleStartTest();
optionsButton.onclick = () => openOptions();
optionsDoneButton.onclick = () => closeOptions();

handleAllButtonSwitches();
fillOptions(config);
