export type CurrentState = "in-progress" | "finished";

// config related

export type TestType = "words" | "time" | "quote";
export interface TestInfo {
  type: TestType;
  words: number;
}

export type CurrentWordIndicatorAnimations = "on" | "off";

export interface Config {
  testInfo: TestInfo;
  currentWordIndicatorAnimations: CurrentWordIndicatorAnimations;
}
