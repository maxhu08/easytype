import english from "../../languages/english";
import { testText } from "../ui";

export const setTest = () => {
  let testContent = "";

  for (let i = 0; i < 20; i++) {
    const word = english.words[Math.floor(Math.random() * english.words.length)];
    const span = document.createElement("span");
    span.id = `w-${i}`;
    span.textContent = word;

    testText.appendChild(span);

    if (i !== 19) testText.appendChild(document.createTextNode(" "));
  }

  (document.getElementById(`w-${0}`) as HTMLSpanElement).classList.add(
    "bg-neutral-500",
    "rounded-md"
  );
};
