import { ConfigTypeOf } from "./config-type-of";
import { ConfigKey } from "./config.key";

/**
 * Marker interface that enforce the config type a component should have.
 */
export interface ConfigOf<K extends ConfigKey = ConfigKey> {
  readonly config: Partial<ConfigTypeOf<K>>;
}
