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
import { switchButtons } from "./switch-buttons";

export interface ButtonSwitch {
  buttons: HTMLButtonElement[];
  attr: string;
}

export const handleAllButtonSwitches = () => {
  buttonSwitches.forEach((btnSwitch) => switchButtons(btnSwitch.buttons, btnSwitch.attr));
};

export const buttonSwitches: ButtonSwitch[] = [
  {
    buttons: [optionsTestTypeWordsButton],
    attr: "options-test-type"
  },
  {
    buttons: [
      optionsWords10Button,
      optionsWords25Button,
      optionsWords50Button,
      optionsWords100Button,
      optionsWords200Button
    ],
    attr: "options-words"
  },
  {
    buttons: [
      optionsCurrentWordIndicatorAnimationsOnButton,
      optionsCurrentWordIndicatorAnimationsOffButton
    ],
    attr: "options-current-word-indicator-animations"
  }
];
