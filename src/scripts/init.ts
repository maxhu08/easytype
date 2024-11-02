import { listenToEvents } from "./listen";
import { restartTestButton } from "./ui";
import { getTestInfo } from "./utils/set-test-info";
import { handleStartTest } from "./utils/start-test";

handleStartTest();
const testInfo = getTestInfo();
listenToEvents(testInfo);

restartTestButton.onclick = () => handleStartTest();
