import { Observable } from "rxjs";
import { ConfigFrom } from "../config/config-from.type";
import { ConfigKey } from "../config/config-key";


export interface ObservableConfig {
  /**
   * The component's config observable.
   */
  readonly config$: Observable<ConfigFrom<ConfigKey>>;
}
