import { listenToEvents } from "./listen";
import { restartTestButton } from "./ui";
import { handleStartTest } from "./utils/start-test";

listenToEvents();

handleStartTest();

restartTestButton.onclick = () => handleStartTest();
