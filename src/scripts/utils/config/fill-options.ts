import type { Config } from "../../types";
import {
  optionsCurrentWordIndicatorAnimationsOffButton,
  optionsCurrentWordIndicatorAnimationsOnButton,
  optionsTestTypeWordsButton,
  optionsWords100Button,
  optionsWords10Button,
  optionsWords200Button,
  optionsWords25Button,
  optionsWords50Button
} from "../../ui";

export const fillOptions = (config: Config) => {
  if (config.testInfo.type === "words") optionsTestTypeWordsButton.click();

  if (config.testInfo.words === 10) optionsWords10Button.click();
  else if (config.testInfo.words === 25) optionsWords25Button.click();
  else if (config.testInfo.words === 50) optionsWords50Button.click();
  else if (config.testInfo.words === 100) optionsWords100Button.click();
  else if (config.testInfo.words === 200) optionsWords200Button.click();

  if (config.currentWordIndicatorAnimations === "on")
    optionsCurrentWordIndicatorAnimationsOnButton.click();
  else if (config.currentWordIndicatorAnimations === "off")
    optionsCurrentWordIndicatorAnimationsOffButton.click();
};
