export type CurrentState = "in-progress" | "finished";

// config related

export interface TestInfo {
  words: number;
}

export type CurrentWordIndicatorAnimations = "on" | "off";

export interface Config {
  testInfo: TestInfo;
  currentWordIndicatorAnimations: CurrentWordIndicatorAnimations;
}
