import { Provider } from "@angular/core";
import { provideComboboxItem } from './combobox';
import { provideInputText } from './input-text';
import { provideToggle } from './toggle';
import { provideInputRadio } from "./input-radio";
import { provideCheckbox } from "./checkbox";
import { InputConfig } from "@tailwind-ng/core";

/**
 * @TailwindNG Forms configuration interface.
 */
export interface FormsConfig {
  comboboxItem: string;
  inputText: InputConfig;
  inputRadio: string;
  toggle: string;
  checkbox: string;
}

/**
 * Provides the Forms configuration tokens.
 */
export function provideForms(customization?: Partial<FormsConfig>): Provider[] {
  return [
    provideComboboxItem(customization?.comboboxItem),
    provideInputText(customization?.inputText),
    provideInputRadio(customization?.inputRadio),
    provideToggle(customization?.toggle),
    provideCheckbox(customization?.checkbox)
  ]
}
