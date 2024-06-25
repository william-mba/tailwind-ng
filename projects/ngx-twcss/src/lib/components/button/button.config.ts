import { PrimaryButtonConfig } from "./button.config";
import { SecondaryButtonConfig } from "./secondary-button.config";
import { SoftButtonConfig } from "./soft-button.config";

/**Button config key
 * @package ngx-twcss
 */
export const ButtonConfigKey = 'ButtonConfigKey';

/**Button config
 * @package ngx-twcss
 */
export type ButtonConfig = {
  primary: Partial<PrimaryButtonConfig>,
  secondary: Partial<SecondaryButtonConfig>,
  soft: Partial<SoftButtonConfig>
}

export const ButtonConfig: ButtonConfig = {
  primary: PrimaryButtonConfig,
  secondary: SecondaryButtonConfig,
  soft: SoftButtonConfig
}
