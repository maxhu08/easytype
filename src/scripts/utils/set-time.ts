import { testText } from "../ui";

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
