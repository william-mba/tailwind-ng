import { Provider } from "@angular/core";
import { ComboboxItemConfig, provideComboboxItemConfig } from './combobox';
import { InputConfig, provideInputConfig } from './input';
import { ToggleConfig, provideToggleConfig } from './toggle';

/**
 * @ngx-tailwind Forms configuration interface.
 */
export interface FormsConfig {
  comboboxItem: Partial<ComboboxItemConfig>;
  input: Partial<InputConfig>;
  toggle: Partial<ToggleConfig>;
}

/**
 * Provides the Forms configuration tokens.
 */
export function provideFormsConfig(customization?: Partial<FormsConfig>): Provider[] {
  return [
    provideComboboxItemConfig(customization?.comboboxItem),
    provideInputConfig(customization?.input),
    provideToggleConfig(customization?.toggle)
  ]
}
