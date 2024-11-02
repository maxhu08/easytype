import english from "../languages/english";

const testText = document.getElementById("test-text") as HTMLParagraphElement;

for (let i = 0; i < english.words.length; i++) {
  testText.textContent += english.words[i] + " ";
}
