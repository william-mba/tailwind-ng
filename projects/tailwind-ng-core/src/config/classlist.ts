import { Str, Obj, Type } from "../helpers";
import { Config } from "../types";

/**
 * @TailwindNG Component's class list interface.
 */
export interface IClassList {
  readonly value: string[];
  /**
   * Initializes the class list value.
   */
  init<T extends string>(value?: T): IClassList;
  init<T extends string[]>(value?: T[]): IClassList;
  init<T extends Config>(value?: T): IClassList;
  /**
   * Sets a brand new class list value.
   */
  set<T extends string>(value: T): IClassList;
  set<T extends string[]>(value: T[]): IClassList;
  set<T extends Config>(value: T): IClassList;
  /**
   * Updates the current class list value.
   */
  update<T extends string>(value: T): IClassList;
  update<T extends string[]>(value: T[]): IClassList;
  update<T extends Config>(value: T): IClassList;
  /**
   * Returns the string representation of the class list value.
   */
  toString(): string;
  /**
   * Clears the class list.
   * @param behavior The behavior to clear the class list. Default is 'all'.
   * - 'all' clears the class list value and it base.
   * - 'value' clears the class list value only and keeps the base.
   * @returns The class list instance.
   */
  clear(behavior: ClearBehavior): IClassList;
}
type ClearBehavior = 'all' | 'value';

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

  init<T extends string>(value?: T): ClassList;
  init<T extends string[]>(value?: T[]): ClassList;
  init<T extends Config>(value?: T): ClassList;

  init<T extends string | string[] | Config>(value: T): ClassList {
    if (!value) {
      this._base = [];
    } else {
      if (Type.isString(value)) {
        value = Str.toArray(value) as T;
      } else if (Type.isArray(value)) {
        value = value as T;
      } else if (Type.isObject(value)) {
        value = Obj.toArray(value as Config) as T;
      }
      this._base = Str.resolve([this._base, value as string[]], { keepClassDeletor: true });
    }
    return this;
  }

  set<T extends string>(value: T): ClassList;
  set<T extends string[]>(value: T[]): ClassList;
  set<T extends Config>(value: T): ClassList;

  set<T extends string | string[] | Config>(value: T): ClassList {
    if (Type.isString(value)) {
      value = Str.toArray(value) as T;
    } else if (Type.isArray(value)) {
      value = value as T;
    } else if (Type.isObject(value)) {
      value = Obj.toArray(value as Config) as T;
    }
    this._value = Str.resolve([value as string[], this._base]);
    return this;
  }

  update<T extends string>(value: T): ClassList;
  update<T extends string[]>(value: T[]): ClassList;
  update<T extends Config>(value: T): ClassList;

  update<T extends string | string[] | Config>(value: T): ClassList {
    if (Type.isString(value)) {
      value = Str.toArray(value) as T;
    } else if (Type.isArray(value)) {
      value = value as T;
    } else if (Type.isObject(value)) {
      value = Obj.toArray(value as Config) as T;
    }
    this._value = Str.resolve([this._value, value as string[]]);
    return this;
  }

  toString(): string {
    return this.value.join(' ');
  }

  clear(behavior: ClearBehavior = 'all'): ClassList {
    if (behavior === 'all') {
      this._base = [];
    }
    this._value = [];
    return this;
  }
}
