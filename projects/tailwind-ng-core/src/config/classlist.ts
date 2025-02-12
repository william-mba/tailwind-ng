import { signal, Signal } from "@angular/core";
import { Str, Obj, Type } from "../helpers";
import { Config } from "../types";

/**
 * @TailwindNG Component's class list interface.
 */
export interface IClassList {
  readonly base: Signal<string[]>;
  readonly value: Signal<string[]>;
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
  /**
   * Takes a value and resolves it with the class list without altering it current value or base.
   * @param value The value to resolve.
   * @param behavior The behavior to resolve the class list. By default the current value is used.
   * @returns The resolved class list value.
   */
  with(value: string | string[] | Config, behavior: ResolveBehavior): string;
}
type ClearBehavior = 'all' | 'value';
interface ResolveBehavior {
  /**
   * Whether to resolve using the base value.
   */
  useBase?: boolean,
  /**
   * Whether to resolve using the current classlit value.
   */
  useValue?: boolean
};

export class ClassList implements IClassList {
  /**
   * The current class list value.
   */
  value = signal<string[]>([])

  /**
  * The custom class list to merge with the default class list's value.
  */
  base = signal<string[]>([]);

  /**
   * Creates a new instance of the class list.
   * @param base The custom class list to merge with the default class list's value.
   */
  // The classlist should be initiliazed only with a string or string array
  // and not with a config object to keep the base value as short as possible.
  // This make future updates to the classlist value even faster.
  constructor(base: string | string[] | Config = []) {
    this.base.set(Str.resolve([this.base(), arrayFrom(base)], { keepClassDeletor: true }));
    this.value.set(arrayFrom(base));
  }

  set<T extends string>(value: T): ClassList;
  set<T extends string[]>(value: T[]): ClassList;
  set<T extends Config>(value: T): ClassList;
  set<T extends string | string[] | Config>(value: T): ClassList {
    this.value.set(Str.resolve([arrayFrom(value), this.base()]));
    return this;
  }

  update<T extends string>(value: T): ClassList;
  update<T extends string[]>(value: T[]): ClassList;
  update<T extends Config>(value: T): ClassList;
  update<T extends string | string[] | Config>(value: T): ClassList {
    this.value.set(Str.resolve([this.value(), arrayFrom(value)]));;
    return this;
  }

  toString(): string {
    return this.value().join(' ');
  }

  clear(behavior: ClearBehavior = 'all'): ClassList {
    if (behavior === 'all') {
      this.base.set([]);
    }
    this.value.set([]);
    return this;
  }

  with(value?: string | string[] | Config, behavior: ResolveBehavior = {}): string {
    const { useBase } = behavior;
    value = arrayFrom(value);
    if (!value || value.length < MIN_CLASS_NAMES) return this.value().join(' ');
    if (useBase) {
      return Str.resolve([this.base(), arrayFrom(value)]).join(' ');
    }
    return Str.resolve([this.value(), arrayFrom(value)]).join(' ');
  }
}

const MIN_CLASS_NAMES = 1;

function arrayFrom(value?: string | string[] | Config): string[] {
  let newValue: string[] = [];
  if (Type.isString(value)) {
    newValue = Str.toArray(value);
  } else if (Type.isArray(value)) {
    newValue = value;
  } else if (Type.isConfigObject(value)) {
    newValue = Obj.toArray(value);
  }
  return newValue;
}

/**
 * Creates a class list that can be used to set, update and merge Tailwind CSS class names for a component.
 */
export function classlist(initialValue?: string | string[] | Config): ClassList {
  return new ClassList(initialValue);
}
