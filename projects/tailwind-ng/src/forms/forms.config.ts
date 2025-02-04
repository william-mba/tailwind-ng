import { Provider } from "@angular/core";
import { provideComboboxItem } from './combobox';
import { provideInputText } from './input-text';
import { provideToggle } from './toggle';
import { CheckboxConfig, ComboboxItemConfig, InputTextConfig, InputRadioConfig, ToggleConfig } from "@tailwind-ng/core";
import { provideInputRadio } from "./input-radio";
import { provideCheckbox } from "./checkbox";

/**
 * @TailwindNG Forms configuration interface.
 */
export interface FormsConfig {
  comboboxItem: Partial<ComboboxItemConfig>;
  input: Partial<InputTextConfig>;
  inputRadio: Partial<InputRadioConfig>;
  toggle: Partial<ToggleConfig>;
  checkbox: Partial<CheckboxConfig>;
}

/**
 * Provides the Forms configuration tokens.
 */
export function provideForms(customization?: Partial<FormsConfig>): Provider[] {
  return [
    provideComboboxItem(customization?.comboboxItem),
    provideInputText(customization?.input),
    provideInputRadio(customization?.inputRadio),
    provideToggle(customization?.toggle),
    provideCheckbox(customization?.checkbox)
  ]
}
