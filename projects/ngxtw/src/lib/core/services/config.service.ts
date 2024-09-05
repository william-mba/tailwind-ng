// import { BehaviorSubject, Observable } from 'rxjs';
// import { Injectable, Provider } from "@angular/core";
// import { isObject, mergeConfigs } from '../helpers/config.helper';
// import { ButtonConfig } from '../../components/elements/button/button.config';
// import { DropdownConfig } from '../../components/elements/dropdown/dropdown.config';

// /** ngxtw config service token */
// export abstract class ConfigServiceToken {
//   abstract get<T extends Record<string, any>>(key: string): Observable<T>;
//   abstract setButton(config?: Partial<ButtonConfig>): ConfigService;
//   abstract setModalDialog(config?: Partial<ModalDialogModule>): ConfigService;
//   abstract setDropdown(config?: Partial<DropdownConfig>): ConfigService;
// }
// /**
//  * ngxtw config service
//  */
// @Injectable({
//   providedIn: 'root',
// })
// export class ConfigService extends ConfigServiceToken {
//   private configs: Record<string, BehaviorSubject<any>> = {};

//   /**
//    * Get config
//    */
//   get<T extends Record<string, any>>(key: string): Observable<T> {
//     if (!isObject(this.configs[key])) {
//       this.set(key, DEFAULT_CONFIG[key]);
//     }
//     return this.configs[key].asObservable() as Observable<T>;
//   }

//   /**
//    * Set config
//    */
//   private set<T extends Record<string, any>>(key: string, target: T, source: Partial<T> = {}): ConfigService {
//     if (!isObject(this.configs[key])) {
//       this.configs[key] = new BehaviorSubject<T>(target);
//     }
//     else {
//       const config = mergeConfigs(target, source);
//       this.configs[key].next(config);
//     }
//     return this;
//   }

//   /**
//    * Set button config
//    */
//   setButton(config: Partial<ButtonConfig> = {}): ConfigService {
//     this.set(ButtonConfigKey, ButtonConfig, config);
//     return this;
//   }

//   /**
//    * Set modal dialog config
//    */
//   setModalDialog(config: Partial<ModalDialogModule> = {}): ConfigService {
//     this.set(ModalDialogConfigKey, ModalDialogConfig, config);
//     return this;
//   }

//   /**
//    * Set dropdown config
//    */
//   setDropdown(config: Partial<DropdownConfig> = {}): ConfigService {
//     this.set(DropdownConfigKey, DropdownConfig, config);
//     return this;
//   }
// }
// /**
//  * ngxtw components default configurations
//  */
// export type DefaultConfigs = {
//   ButtonConfig: ButtonConfig,
//   ModalDialogConfig: ModalDialogConfig,
//   DropdownConfig: DropdownConfig,
// } & Record<string, object>;

// /**
//  * ngxtw components default configurations
//  */
// export const DEFAULT_CONFIG: DefaultConfigs = {
//   ButtonConfig: ButtonConfig,
//   ModalDialogConfig: ModalDialogConfig,
//   DropdownConfig: DropdownConfig,
// }

// /** ngxtw config service provider */
// export const provideConfigService = (): Provider[] => {
//   return [{
//     provide: ConfigServiceToken,
//     useExisting: ConfigService
//   }]
// };
