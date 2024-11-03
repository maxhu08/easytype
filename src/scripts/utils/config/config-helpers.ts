import type { Config } from "../../types";
import { defaultConfig } from "./default-config";

export const getConfig = (): Config => {
  const storedConfig = localStorage.getItem("config");
  let config: Config;

  if (storedConfig) {
    config = JSON.parse(storedConfig);
  } else {
    localStorage.setItem("config", JSON.stringify(defaultConfig));
    config = defaultConfig;
  }

  // fill empty properties
  return deepMerge(structuredClone(defaultConfig), config);
};

export const deepMerge = (target: any, source: any): any => {
  const isObject = (obj: any) => obj && typeof obj === "object";

  if (!isObject(target) || !isObject(source)) {
    return source;
  }

  Object.keys(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = sourceValue;
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = deepMerge({ ...targetValue }, sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });

  return target;
};

export const setConfig = (newConfig: Config) => {
  localStorage.setItem("config", JSON.stringify(newConfig));
};
