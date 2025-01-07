import { StringHelper } from "../core/helpers/string.helper";
import { ObjectHelper } from "../core/helpers/object.helper";
import { ConfigValue } from "../core/types/config.type";

/**
 * @ngxtw An interface to manipulate the component's class list.
 */
export interface ClassList {
  /**
   * Initializes the class list.
   * - Resolves class list from given `value` to `this.base` keeping class deletor.
   */
  init(value?: string | string[]): ClassList;
  /**
   * Sets a brand new class list.
   * - Resolves class list from `this.base` to given `value`.
   */
  set(value: string | string[]): ClassList;
  /**
   * Updates the current class list.
   * - Resolves class list from given `value` to current `this.value`.
   */
  update(value: string | string[]): ClassList;
  /**
   * Initializes class list using the specified config object.
   * - Calls `this.init` method passing the given `config` converted to `string[]`.
   */
  initFrom<T extends ConfigValue>(config: T): ClassList;
  /**
   * Sets class list using config object.
   * - Calls `this.set` method passing the given `config` converted to `string[]`.
   */
  setFrom<T extends ConfigValue>(config: T): ClassList;
  /**
   * Updates class list using config object.
   * - Calls `this.update` method passing the given `config` converted to `string[]`.
   */
  updateFrom<T extends ConfigValue>(config: T): ClassList;
  /**
   * Returns the string representation of the class list value.
   */
  toString(): string;
}

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

  init(value?: string | string[]): ClassList {
    if (value && value.length > 0) {
      this._base = StringHelper.resolve(this._base, value, { keepClassDeletor: true });
    } else {
      this._base = [];
    }
    return this;
  }

  set(value: string | string[]): ClassList {
    this._value = StringHelper.resolve(value, this._base);
    return this;
  }

  update(value: string | string[]): ClassList {
    this._value = StringHelper.resolve(this._value, value);
    return this;
  }

  initFrom<T extends ConfigValue>(config: T): ClassList {
    return this.init(ObjectHelper.toArray(config));
  }

  setFrom<T extends ConfigValue>(config: T): ClassList {
    return this.set(ObjectHelper.toArray(config));
  }

  updateFrom<T extends ConfigValue>(config: T) {
    return this.update(ObjectHelper.toArray(config));
  }

  toString(): string {
    return this.value.join(' ');
  }
}
