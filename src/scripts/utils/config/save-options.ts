import { getConfig, setConfig } from "./config-helpers";
import { modifyNestedObject } from "./modify";

export const saveOptionsToConfig = () => {
  const draft = modifyNestedObject(getConfig(), (draft) => {
    const selectedTestType = document.querySelector(`button[btn-option-type="options-test-type"][selected="yes"]`) as HTMLButtonElement;
    const selectedWords = document.querySelector(`button[btn-option-type="options-words"][selected="yes"]`) as HTMLButtonElement;
    const selectedCurrentWordIndicatorAnimations = document.querySelector(`button[btn-option-type="options-current-word-indicator-animations"][selected="yes"]`) as HTMLButtonElement;

    if (selectedTestType.id === "options-test-type-words-button") draft.testInfo.type = "words";

    if (selectedWords.id === "options-words-10-button") draft.testInfo.words = 10;
    else if (selectedWords.id === "options-words-25-button") draft.testInfo.words = 25;
    else if (selectedWords.id === "options-words-50-button") draft.testInfo.words = 50;
    else if (selectedWords.id === "options-words-100-button") draft.testInfo.words = 100;
    else if (selectedWords.id === "options-words-200-button") draft.testInfo.words = 200;

    if (selectedCurrentWordIndicatorAnimations.id === "options-current-word-indicator-animations-on-button") draft.currentWordIndicatorAnimations = "on";
    else if (selectedCurrentWordIndicatorAnimations.id === "options-current-word-indicator-animations-off-button") draft.currentWordIndicatorAnimations = "off";
  });

  setConfig(draft);
};
