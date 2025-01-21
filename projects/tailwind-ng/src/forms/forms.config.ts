import { Provider } from "@angular/core";
import { provideComboboxItemConfig } from './combobox';
import { provideInputConfig } from './input';
import { provideToggleConfig } from './toggle';
import { ComboboxItemConfig, InputConfig, InputRadioConfig, ToggleConfig } from "@tailwind-ng/core";
import { provideInputRadioConfig } from "./input-radio";

/**
 * @TailwindNG Forms configuration interface.
 */
export interface FormsConfig {
  comboboxItem: Partial<ComboboxItemConfig>;
  input: Partial<InputConfig>;
  inputRadio: Partial<InputRadioConfig>;
  toggle: Partial<ToggleConfig>;
}

/**
 * Provides the Forms configuration tokens.
 */
export function provideFormsConfig(customization?: Partial<FormsConfig>): Provider[] {
  return [
    provideComboboxItemConfig(customization?.comboboxItem),
    provideInputConfig(customization?.input),
    provideInputRadioConfig(customization?.inputRadio),
    provideToggleConfig(customization?.toggle)
  ]
}
