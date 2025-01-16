import { AvatarConfig, BadgeConfig, ButtonConfig, ComponentConfig, DropdownConfig, IconConfig } from "@ngx-tailwind/core";
import { provideAvatarConfig } from "./avatar";
import { provideBadgeConfig } from "./badge";
import { provideButtonConfig } from "./button";
import { provideDropdownConfig } from "./dropdown";
import { provideIconConfig } from "./icon";
import { Provider } from "@angular/core";
import { provideButtonGroupConfig } from "./button-group";

/**
 * @ngx-tailwind Elements configuration interface.
 */
export interface ElementsConfig {
  avatar: Partial<AvatarConfig>;
  badge: Partial<BadgeConfig>;
  button: Partial<ButtonConfig>;
  buttonGroup: Partial<ComponentConfig>;
  dropdown: Partial<DropdownConfig>;
  icon: Partial<IconConfig>;
}

/**
 * Provides the Elements configuration tokens.
 */
export function provideElementsConfig(customization?: Partial<ElementsConfig>): Provider[] {
  return [
    provideAvatarConfig(customization?.avatar),
    provideBadgeConfig(customization?.badge),
    provideButtonConfig(customization?.button),
    provideButtonGroupConfig(customization?.buttonGroup),
    provideDropdownConfig(customization?.dropdown),
    provideIconConfig(customization?.icon),
  ]
}
