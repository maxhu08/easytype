import english from "../languages/english";
import { listenToEvents } from "./listen";
import { testText } from "./ui";

listenToEvents();

for (let i = 0; i < 20; i++) {
  testText.textContent += english.words[i] + " ";
}
