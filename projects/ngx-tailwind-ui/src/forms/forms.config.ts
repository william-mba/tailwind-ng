import { Provider } from "@angular/core";
import { provideComboboxItemConfig } from './combobox';
import { provideInputConfig } from './input';
import { provideToggleConfig } from './toggle';
import { ComboboxItemConfig, InputConfig, ToggleConfig } from "@ngx-tailwind/core";

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
