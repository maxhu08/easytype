import { listenToEvents } from "./listen";
import { optionsButton, optionsDoneButton, restartTestButton } from "./ui";
import { getConfig } from "./utils/config/config-helpers";
import { closeOptions, openOptions } from "./utils/open-options";
import { getTestInfo } from "./utils/set-test-info";
import { handleStartTest } from "./utils/start-test";

handleStartTest();
const testInfo = getTestInfo();
listenToEvents(testInfo);

console.log(getConfig());

restartTestButton.onclick = () => handleStartTest();
optionsButton.onclick = () => openOptions();
optionsDoneButton.onclick = () => closeOptions();
