import { inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ConfigKey } from "./config-key";
import { ConfigStore } from "./config-store";
import { mergeConfig } from "./config.helper";
import { ComponentConfig, Config } from "../types";

/**
 * @ngxtw Reactive configuration interface.
 */
export interface IReactiveConfig {
  /** Returns a Subject of the configuration corresponding to the key.
   * If it does not exist, it will be initialized with the default configuration
   * @param key The configuration key
   */
  get<T extends Config = ComponentConfig>(key: ConfigKey): BehaviorSubject<T>;

  /** Updates the configuration value
   * @param key The configuration key
   * @param value The value to update
   */
  update<T extends Config = ComponentConfig>(key: ConfigKey, ...value: Partial<T>[]): void;
}

/** @ngxtw Reactive configuration */
@Injectable({ providedIn: 'root' })
export class ReactiveConfig implements IReactiveConfig {
  private readonly _store = new Map<ConfigKey, BehaviorSubject<Config>>();
  protected readonly config: ConfigStore = inject(ConfigStore);

  private set(key: ConfigKey, config: Config): void {
    if (!this._store.has(key)) {
      this._store.set(key, new BehaviorSubject(config));
    }
  }

  update<T extends Config = ComponentConfig>(key: ConfigKey, ...value: Partial<T>[]): IReactiveConfig {
    if (this._store.has(key)) {
      const config = this.get(key);
      config.next(mergeConfig([config.value as T, ...value]));
    }
    return this;
  }

  get<T extends Config = ComponentConfig>(key: ConfigKey): BehaviorSubject<T> {
    // If there is no key in the store, set an initial value then returning it
    if (!this._store.has(key)) {
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
    return this._store.get(key) as BehaviorSubject<T>;
  }
}
