import { inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ConfigKey } from "./config-key";
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
      switch (key) {
        case 'Avatar':
          this.set(key, this.config.avatar);
          break;
        case 'Badge':
          this.set(key, this.config.badge);
          break;
        case 'Button':
          this.set(key, this.config.button);
          break;
        case 'ButtonGroup':
          this.set(key, this.config.buttonGroup);
          break;
        case 'ComboboxItem':
          this.set(key, this.config.comboboxItem);
          break;
        case 'Dropdown':
          this.set(key, this.config.dropdown);
          break;
        case 'Icon':
          this.set(key, this.config.icon);
          break;
        case 'Input':
          this.set(key, this.config.input);
          break;
        case 'Dialog':
          this.set(key, this.config.dialog);
          break;
        case 'Toggle':
          this.set(key, this.config.toggle);
          break;
      }
    }
    return this.store.get(key) as BehaviorSubject<ConfigFrom<typeof key>>;
  }
}
