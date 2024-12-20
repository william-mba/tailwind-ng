import { inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ConfigKey } from "./config-key";
import { ConfigStore } from "./config-store";
import { mergeConfig } from "./config.helper";
import { ConfigValue } from "../core/types/config.type";

export interface ReactiveConfig {
  /** Returns a Subject of the configuration corresponding to the key.
   * If it does not exist, it will be initialized with the default configuration
   * @param key The configuration key
   */
  get<T extends ConfigValue>(key: ConfigKey): BehaviorSubject<T>;

  /** Updates the configuration value
   * @param key The configuration key
   * @param value The value to update
   */
  update<T extends ConfigValue>(key: ConfigKey, ...value: Partial<T>[]): void;
}

/** @ngxtw Reactive configuration */
@Injectable({ providedIn: 'root' })
export class ReactiveConfig implements ReactiveConfig {
  protected readonly store: Map<ConfigKey, BehaviorSubject<any>> = new Map();
  protected readonly config: ConfigStore = inject(ConfigStore);

  protected set(key: ConfigKey, config: ConfigValue): void {
    if (!this.store.has(key)) {
      this.store.set(key, new BehaviorSubject(config));
    }
  }

  update<T extends ConfigValue>(key: ConfigKey, ...value: Partial<T>[]): ReactiveConfig {
    if (this.store.has(key)) {
      const config = this.get(key);
      config.next(mergeConfig({ target: config.value as T, source: value }));
    }
    return this;
  }

  get<T extends ConfigValue>(key: ConfigKey): BehaviorSubject<T> {
    // If there is no key in the store, set an initial value then returning it
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
        case 'ModalDialog':
          this.set(key, this.config.modalDialog);
          break;
        case 'Toggle':
          this.set(key, this.config.toggle);
          break;
      }
    }
    return this.store.get(key)!;
  }
}
