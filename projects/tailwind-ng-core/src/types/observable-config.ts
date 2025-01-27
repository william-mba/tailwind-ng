import { Observable } from "rxjs";
import { ConfigTypeOf } from "../config/config-type-of.type";
import { ConfigKey } from "../config/config-key.type";

export interface ObservableConfig {
  /**
   * The config source on which the componenet should subscribe to get config's updates.
   * - Use the `takeUntilDestroyed` operator to ensure the subscription completes when the component is destroyed.
   * - This behavior is provided by default in the component's specific base class if existing.
   */
  readonly config: Observable<ConfigTypeOf<ConfigKey>>;
}
