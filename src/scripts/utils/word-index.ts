import { testText } from "../ui";

export const getWordIndex = () => {
  return parseInt(testText.getAttribute("word-index") as string);
};

export const setWordIndex = (val: number) => {
  testText.setAttribute("word-index", val.toString());
};
