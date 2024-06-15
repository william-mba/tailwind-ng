import { Position } from "../../core/types/layout/position";
import { DropdownBaseConfig } from "./dropdown-base.config";
import { DropdownContentConfig } from "./dropdown-content/dropdown-content.config";
import { DropdownItemConfig } from "./dropdown-item/dropdown-item.config";

/**Dropdown config key
 * @package ngx-twcss
 */
export const DropdownContainerConfigKey = 'DropdownContainerConfigKey';

/**Dropdown container config
 * @package ngx-twcss
 */
export type DropdownContainerConfig = Partial<DropdownBaseConfig> & {
  group: string,
  position: Position
};

export const DropdownContainerConfig: DropdownContainerConfig = {
  ...DropdownBaseConfig,
  group: 'group',
  position: 'relative'
};

/**Dropdown config
 * @package ngx-twcss
 */
export type DropdownConfig = {
  container: DropdownContainerConfig,
  content: DropdownContentConfig,
  item: DropdownItemConfig
}

export const DropdownConfig: DropdownConfig = {
  container: DropdownContainerConfig,
  content: DropdownContentConfig,
  item: DropdownItemConfig
}
