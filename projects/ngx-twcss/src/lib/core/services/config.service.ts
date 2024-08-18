import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { isObject, mergeConfigs } from '../helpers/config.helper';
import { ButtonConfig, ButtonConfigKey } from '../../components/button/button.config';
import { ModalDialogConfig, ModalDialogConfigKey } from '../../components/modal-dialog/modal-dialog.config';
import { DropdownConfig, DropdownConfigKey } from '../../components/dropdown/dropdown.config';
import { ModalDialog } from '../../components/modal-dialog/modal-dialog.module';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configs: Record<string, BehaviorSubject<any>> = {};

  /**
   * Get config
   */
  get<T extends Record<string, any>>(key: string): Observable<T> {
    if (!isObject(this.configs[key])) {
      this.set(key, DefaultConfigs[key]);
    }
    return this.configs[key].asObservable() as Observable<T>;
  }

  /**
   * Set config
   */
  private set<T extends Record<string, any>>(key: string, target: T, source: Partial<T> = {}): ConfigService {
    if (!isObject(this.configs[key])) {
      this.configs[key] = new BehaviorSubject<T>(target);
    }
    else {
      const config = mergeConfigs(target, source);
      this.configs[key].next(config);
    }
    return this;
  }

  /**
   * Set button config
   */
  setButton(config: Partial<ButtonConfig> = {}): ConfigService {
    this.set(ButtonConfigKey, ButtonConfig, config);
    return this;
  }

  /**
   * Set modal dialog config
   */
  setModalDialog(config: Partial<ModalDialog> = {}): ConfigService {
    this.set(ModalDialogConfigKey, ModalDialogConfig, config);
    return this;
  }

  /**
   * Set dropdown config
   */
  setDropdown(config: Partial<DropdownConfig> = {}): ConfigService {
    this.set(DropdownConfigKey, DropdownConfig, config);
    return this;
  }
}

export const DefaultConfigs: Record<string, object> = {
  ButtonConfigKey: ButtonConfig,
  ModalDialogConfigKey: ModalDialogConfig,
  DropdownConfigKey: DropdownConfig
}
