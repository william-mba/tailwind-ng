import { ConfigTypeOf } from "@tailwind-ng/core";
import { provideAvatar } from "./avatar";
import { provideBadge } from "./badge";
import { provideButton } from "./button";
import { provideDropdown } from "./dropdown";
import { provideIcon } from "./icon";
import { Provider } from "@angular/core";
import { provideButtonGroup } from "./button-group";

/**
 * @TailwindNG UI Elements config interface.
 */
export interface ElementsConfig {
  avatar: ConfigTypeOf<'Avatar'>;
  badge: ConfigTypeOf<'Badge'>;
  button: ConfigTypeOf<'Button'>;
  buttonGroup: ConfigTypeOf<'ButtonGroup'>;
  dropdown: ConfigTypeOf<'Dropdown'>;
  icon: ConfigTypeOf<'Icon'>;
}

/**
 * @TailwindNG UI Elements config provider.
 */
export function provideElements(customization?: Partial<ElementsConfig>): Provider[] {
  return [
    provideAvatar(customization?.avatar),
    provideBadge(customization?.badge),
    provideButton(customization?.button),
    provideButtonGroup(customization?.buttonGroup),
    provideDropdown(customization?.dropdown),
    provideIcon(customization?.icon),
  ]
}
