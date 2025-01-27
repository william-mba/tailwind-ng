import { AvatarConfig, BadgeConfig, ButtonConfig, ComponentConfig, DropdownConfig, FullyOptional, IconConfig } from "@tailwind-ng/core";
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
  avatar: Partial<AvatarConfig>;
  badge: Partial<BadgeConfig>;
  button: Partial<ButtonConfig>;
  buttonGroup: Partial<ComponentConfig>;
  dropdown: Partial<DropdownConfig>;
  icon: FullyOptional<IconConfig>;
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
