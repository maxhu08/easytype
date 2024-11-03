import type { TestInfo } from "../types";
import { testText } from "../ui";

export const setTestInfo = (test: TestInfo) => {
  testText.setAttribute("test-info", JSON.stringify(test));
};

export const getTestInfo = () => {
  return JSON.parse(testText.getAttribute("test-info") as string) as TestInfo;
};

export const getWordIndex = () => {
  return parseInt(testText.getAttribute("word-index") as string);
};

export const setWordIndex = (val: number) => {
  testText.setAttribute("word-index", val.toString());
};

export const getCharsTyped = () => {
  return parseInt(testText.getAttribute("chars-typed") as string);
};

export const setCharsTyped = (val: number) => {
  testText.setAttribute("chars-typed", val.toString());
};

export const setTestStartTime = (time: number) => {
  testText.setAttribute("start-time", time.toString());
};

export const getTestStartTime = () => {
  return parseInt(testText.getAttribute("start-time") as string);
};

export const setTestEndTime = (time: number) => {
  testText.setAttribute("end-time", time.toString());
};

export const getTestEndTime = () => {
  return parseInt(testText.getAttribute("end-time") as string);
};
