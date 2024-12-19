import { StringHelper } from "../core/helpers/string.helper";
import { objectToArray } from "../core/helpers/object.helper";
import { ConfigValue } from "../core/types/config.type";

export interface ClassList {
  init(value: string[]): void;
  set(value: string[]): void;
  update(value: string[]): void;
  initFrom<T extends ConfigValue>(config: T): void;
  setFrom<T extends ConfigValue>(config: T): void;
  updateFrom<T extends ConfigValue>(config: T): void;
}

/**
 * Class list instance of the component.
 */
export class ClassList implements ClassList {
  private _value!: string[];
  /**
   * The current class list value.
   */
  get value(): string[] {
    if (!this._value) {
      this._value = this._base;
    }
    return this._value;
  };

  private _base: string[] = []

  /**
  * The custom class list to merge with the default class list's value.
  */
  get base(): string[] {
    return this._base;
  }

  /**
   * Creates a new instance of the class list.
   * @param base The custom class list to merge with the default class list's value.
   */
  constructor(base: string[] = []) {
    this._base = base;
  }

  /**
   * Initializes the class list.
   * - Resolves class list from given `value` to `this.base` keeping class deletor.
   */
  init(value: string[]): void {
    this._base = StringHelper.resolve(this._base, value, { keepClassDeletor: true });
  }

  /**
   * Sets a brand new class list.
   * - Resolves class list from `this.base` to given `value`.
   */
  set(value: string[]): void {
    this._value = StringHelper.resolve(value, this._base);
  }

  /**
   * Updates the current class list.
   * - Resolves class list from given `value` to current `this.value`.
   */
  update(value: string[]): void {
    this._value = StringHelper.resolve(this._value, value);
  }

  /**
   * Initializes class list using the specified config object.
   * - Calls `this.init` method passing the given `config` converted to `string[]`.
   */
  initFrom<T extends ConfigValue>(config: T): void {
    this.init(objectToArray(config));
  }

  /**
   * Sets class list using config object.
   * - Calls `this.set` method passing the given `config` converted to `string[]`.
   */
  setFrom<T extends ConfigValue>(config: T): void {
    this.set(objectToArray(config));
  }

  /**
   * Updates class list using config object.
   * - Calls `this.update` method passing the given `config` converted to `string[]`.
   */
  updateFrom<T extends ConfigValue>(config: T) {
    this.update(objectToArray(config));
  }
}
