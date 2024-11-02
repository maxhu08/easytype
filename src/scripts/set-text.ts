import english from "../languages/english";
import { testText } from "./ui";

export const setTest = () => {
  let testContent = "";
  for (let i = 0; i < 20; i++) {
    testContent += english.words[Math.round(Math.random() * english.words.length)];
    if (i !== 19) testContent += " ";

    testText.textContent = testContent;
  }
};
