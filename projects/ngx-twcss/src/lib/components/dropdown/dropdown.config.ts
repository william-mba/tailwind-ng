import { Position } from "../../core/types/layout/position";
import { DropdownBaseConfig } from "./dropdown-base.config";
import { DropdownContentConfig } from "./dropdown-content.config";
import { DropdownItemConfig } from "./dropdown-item.config";

/**Dropdown container config
 * @package ngx-twcss
 */
export type DropdownContainerConfig = Partial<DropdownBaseConfig> & {
  position: Position
};

export const DropdownContainerConfig: DropdownContainerConfig = {
  ...DropdownBaseConfig,
  position: 'relative',
  extends: {
    cursor: 'hover:cursor-pointer'
  }
};

/**Dropdown config key
 * @package ngx-twcss
 */
export const DropdownConfigKey = 'DropdownConfigKey';

/**Dropdown config
 * @package ngx-twcss
 */
export type DropdownConfig = {
  container: Partial<DropdownContainerConfig>,
  content: Partial<DropdownContentConfig>,
  item: Partial<DropdownItemConfig>
}

export const DropdownConfig: DropdownConfig = {
  container: DropdownContainerConfig,
  content: DropdownContentConfig,
  item: DropdownItemConfig
}
