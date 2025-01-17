import { inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ConfigKey } from "./config-key.type";
import { ConfigStore } from "./config-store";
import { mergeConfig } from "./config.helper";
import { ConfigFrom } from "./config-from.type";

/**
 * @ngx-tailwind Reactive configuration interface.
 */
export interface IReactiveConfig {
  /** Returns a Subject of the configuration corresponding to the key.
   * If it does not exist, it will be initialized with the default configuration
   * @param key The configuration key
   */
  get(key: ConfigKey): BehaviorSubject<ConfigFrom<typeof key>>;

  /** Updates the configuration value
   * @param key The configuration key
   * @param value The value to update
   */
  update(key: ConfigKey, ...value: Partial<ConfigFrom<typeof key>>[]): void;
}

/** @ngx-tailwind Reactive configuration */
@Injectable({ providedIn: 'root' })
export class ReactiveConfig implements IReactiveConfig {
  private readonly store = new Map<ConfigKey, BehaviorSubject<ConfigFrom<ConfigKey>>>();
  protected readonly config: ConfigStore = inject(ConfigStore);

  private set(key: ConfigKey, config: ConfigFrom<typeof key>): void {
    if (!this.store.has(key)) {
      this.store.set(key, new BehaviorSubject(config));
    }
  }

  update(key: ConfigKey, ...value: Partial<ConfigFrom<typeof key>>[]): IReactiveConfig {
    if (this.store.has(key)) {
      const config = this.get(key)!;
      config.next(mergeConfig([config.value!, ...value]));
    }
    return this;
  }

  get<T extends ConfigKey = ConfigKey>(key: T) {
    // If there is no key in the store,
    // we set an initial value then return it
    if (!this.store.has(key)) {
      this.set(key, this.config[key as keyof ConfigStore]);
    }
    return this.store.get(key) as BehaviorSubject<ConfigFrom<typeof key>>;
  }
}
