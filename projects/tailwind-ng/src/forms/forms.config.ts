import { Provider } from "@angular/core";
import { provideComboboxItem } from './combobox';
import { provideInputText } from './input-text';
import { provideToggle } from './toggle';
import { ConfigTypeOf } from "@tailwind-ng/core";
import { provideInputRadio } from "./input-radio";
import { provideCheckbox } from "./checkbox";

/**
 * @TailwindNG Forms configuration interface.
 */
export interface FormsConfig {
  comboboxItem: ConfigTypeOf<'ComboboxItem'>;
  inputText: ConfigTypeOf<'InputText'>;
  inputRadio: ConfigTypeOf<'InputRadio'>;
  toggle: ConfigTypeOf<'Toggle'>;
  checkbox: ConfigTypeOf<'Checkbox'>;
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
