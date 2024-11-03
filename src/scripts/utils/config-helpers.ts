import type { Config } from "../types";

const defaultConfig: Config = {
  testInfo: {
    words: 10
  },
  currentWordIndicatorAnimations: "on"
};

export const getConfig = (): Config => {
  const config = JSON.parse(localStorage.getItem("config") || "null");

  if (config) return config;

  localStorage.setItem("config", JSON.stringify(defaultConfig));
  return defaultConfig;
};

export const setConfig = (newConfig: Config) => {
  localStorage.setItem("config", JSON.stringify(newConfig));
};
