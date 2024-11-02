import { listenToEvents } from "./listen";
import { restartTestButton } from "./ui";
import { setTest } from "./utils/set-text";
import { handleStartTest } from "./utils/start-test";

listenToEvents();
setTest();

restartTestButton.onclick = () => handleStartTest();
