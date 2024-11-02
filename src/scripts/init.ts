import { listenToEvents } from "./listen";
import { restartTestButton } from "./ui";
import { tryFocusTestInput } from "./utils/input";
import { setTest } from "./utils/set-text";
import { handleStartTest } from "./utils/start-test";

listenToEvents();
setTest();
tryFocusTestInput();

restartTestButton.onclick = () => handleStartTest();
