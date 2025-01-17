import { inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ConfigKey } from "./config-key.type";
import { ConfigStore } from "./config-store";
import { mergeConfig } from "./config.helper";
import { ConfigTypeOf } from "./config-type-of.type";

/**
 * @ngx-tailwind Reactive configuration interface.
 */
export interface IReactiveConfig {
  /** Returns an observable configuration corresponding to the given key. If not setted,
   * it will be initialized with the default value provided by the configuration store which is always an empty object.
   */
  get<K extends ConfigKey>(key: K): BehaviorSubject<ConfigTypeOf<K>>;

  /** Sets a brand new configuration.
   * Returns the `ReactiveConfig` instance after setting.
   */
  set<K extends ConfigKey>(key: K, value: ConfigTypeOf<K>): IReactiveConfig;

  /** Updates the configuration.
   * Returns the `ReactiveConfig` instance after updating.
   */
  update<K extends ConfigKey>(key: K, ...value: Partial<ConfigTypeOf<K>>[]): IReactiveConfig;
}

/** @ngx-tailwind Reactive configuration */
@Injectable({ providedIn: 'root' })
export class ReactiveConfig implements IReactiveConfig {
  private readonly _configMap = new Map<ConfigKey, BehaviorSubject<ConfigTypeOf<ConfigKey>>>();
  protected readonly store = inject(ConfigStore);

  update<K extends ConfigKey>(key: K, ...value: Partial<ConfigTypeOf<K>>[]): ReactiveConfig {
    if (this._configMap.has(key)) {
      const config = this.get(key);
      config.next(mergeConfig([config.value, ...value]) as ConfigTypeOf<K>);
    }
    return this;
  }

  get<K extends ConfigKey>(key: K): BehaviorSubject<ConfigTypeOf<K>> {
    // If there is no key in the store,
    // we set an initial value then return it
    if (!this._configMap.has(key)) {
      this.set(key, this.store[key as keyof ConfigStore] as ConfigTypeOf<K>);
    }
    return this._configMap.get(key) as BehaviorSubject<ConfigTypeOf<K>>;
  }

  set<K extends ConfigKey>(key: K, value: ConfigTypeOf<K>): ReactiveConfig {
    const configSubject = new BehaviorSubject(value);
    this._configMap.set(key, configSubject as BehaviorSubject<ConfigTypeOf<ConfigKey>>);
    return this;
  }
}
