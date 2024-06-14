import { Position } from "../../../core/types/layout/position";
import { DropdownBaseConfig } from "../dropdown-base.config";

/**Dropdown container config key
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
