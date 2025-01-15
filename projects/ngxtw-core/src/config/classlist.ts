import { Str, Obj } from "../helpers";
import { Config } from "../types";

/**
 * @ngxtw Component's class list interface.
 */
export interface IClassList {
  readonly value: string[];
  /**
   * Initializes the class list.
   * - Resolves class list from given `value` to `this.base` keeping class deletor.
   */
  init(value?: string | string[]): IClassList;
  /**
   * Sets a brand new class list.
   * - Resolves class list from `this.base` to given `value`.
   */
  set(value: string | string[]): IClassList;
  /**
   * Updates the current class list.
   * - Resolves class list from given `value` to current `this.value`.
   */
  update(value: string | string[]): IClassList;
  /**
   * Initializes class list using the specified config object.
   * - Calls `this.init` method passing the given `config` converted to `string[]`.
   */
  initFrom<T extends Config>(config: T): IClassList;
  /**
   * Sets class list using config object.
   * - Calls `this.set` method passing the given `config` converted to `string[]`.
   */
  setFrom<T extends Config>(config: T): IClassList;
  /**
   * Updates class list using config object.
   * - Calls `this.update` method passing the given `config` converted to `string[]`.
   */
  updateFrom<T extends Config>(config: T): IClassList;
  /**
   * Returns the string representation of the class list value.
   */
  toString(): string;
}

export class ClassList implements IClassList {
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

  init(value?: string | string[]): IClassList {
    if (value && value.length > 0) {
      if (!Array.isArray(value)) {
        value = Str.toArray(value);
      }
      this._base = Str.resolve([this._base, value], { keepClassDeletor: true });
    } else {
      this._base = [];
    }
    return this;
  }

  set(value: string | string[]): IClassList {
    if (!Array.isArray(value)) {
      value = Str.toArray(value);
    }
    this._value = Str.resolve([value, this._base]);
    return this;
  }

  update(value: string | string[]): IClassList {
    if (!Array.isArray(value)) {
      value = Str.toArray(value);
    }
    this._value = Str.resolve([this._value, value]);
    return this;
  }

  initFrom<T extends Config>(config: T): IClassList {
    return this.init(Obj.toArray(config));
  }

  setFrom<T extends Config>(config: T): IClassList {
    return this.set(Obj.toArray(config));
  }

  updateFrom<T extends Config>(config: T) {
    return this.update(Obj.toArray(config));
  }

  toString(): string {
    return this.value.join(' ');
  }
}
