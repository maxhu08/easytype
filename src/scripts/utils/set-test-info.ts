import type { TestInfo } from "../types";
import { testText } from "../ui";

export const setTestInfo = (test: TestInfo) => {
  testText.setAttribute("test-info", JSON.stringify(test));
};

export const getTestInfo = () => {
  return JSON.parse(testText.getAttribute("test-info") as string) as TestInfo;
};
