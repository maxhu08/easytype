import { testTimerText } from "../ui";

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

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 1000 / 60);
  const seconds = Math.floor((time / 1000) % 60);
  const milliseconds = Math.floor((time % 1000) / 10);

  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
};
