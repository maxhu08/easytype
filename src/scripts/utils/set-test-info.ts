import { testText } from "../ui";

export interface TestInfo {
  words: number;
}

export const setTestInfo = (test: TestInfo) => {
  testText.setAttribute("test-info", JSON.stringify(test));
};

export const getTestInfo = () => {
  return JSON.parse(testText.getAttribute("test-info") as string) as TestInfo;
};
