import { testTimerText } from "../ui";
import { formatTime } from "./format";

let intervalId: Timer;

export const startTimer = () => {
  let time = 0; // milliseconds

  intervalId = setInterval(() => {
    time += 10;
    testTimerText.textContent = formatTime(time) + "s";
  }, 10);
};

export const stopTimer = () => {
  clearInterval(intervalId);
};

export const resetTimer = () => {
  testTimerText.textContent = "00:00.00s";
};

export const hideTimer = () => {
  testTimerText.style.transition = "none"; // no transition
  testTimerText.style.opacity = "0";
};

export const showTimer = () => {
  testTimerText.style.transition = "opacity 1s"; // 2-second transition
  testTimerText.style.opacity = "1";
};
