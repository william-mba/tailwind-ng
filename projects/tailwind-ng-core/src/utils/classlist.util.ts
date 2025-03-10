import { Str } from "./classname.util";
import { isString } from "./type-assertion.util";

/**
 * @TailwindNG Component's class list interface.
 */
export interface IClassList {
  /**
   * The initial (custom) class list value.
   */
  readonly base: string;
  /**
   * The current class list value.
   */
  readonly value: string;
  /**
   * Sets a brand new class list value.
   */
  init<T extends string>(value: T): IClassList;
  /**
   * Sets a brand new class list value.
   */
  set<T extends string>(value: T): IClassList;
  /**
   * Updates the current class list value.
   */
  update<T extends string>(value: T): IClassList;
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
  with(value: string, behavior: ResolveBehavior): string;
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
  value = '';
  base = '';

  /**
   * Creates a new instance of the class list.
   * @param base The custom class list to merge with the default class list's value.
   */
  // The classlist should be initiliazed only with a string or string array
  // and not with a config object to keep the base value as short as possible.
  // This make future updates to the classlist value even faster.
  constructor(base?: string) {
    if (base && base.length > 0) {
      this.base = Str.resolve([this.base, base], { keepClassDeletor: true });
      this.value = this.base;
    }
  }

  init<T extends string | null>(value?: T): ClassList {
    this.base = Str.resolve([this.base, value], { keepClassDeletor: true });
    this.refresh();
    return this;
  }

  private refresh(): void {
    this.value = this.set(this.value).value;
  }

  set<T extends string | null>(value?: T): ClassList {
    this.value = Str.resolve([value, this.base]);
    return this;
  }

  update<T extends string | null>(value?: T): ClassList {
    this.value = Str.resolve([this.value, value]);
    return this;
  }

  clear(behavior: ClearBehavior = 'all'): ClassList {
    if (behavior === 'all') {
      this.base = '';
    }
    this.value = '';
    return this;
  }

  with(value?: string | null, behavior: ResolveBehavior = {}): string {
    const { useBase } = behavior;
    if (useBase) {
      return Str.resolve([this.base, value]);
    }
    return Str.resolve([this.value, value]);
  }
}

/**
 * Creates a class list that can be used to set, update and merge Tailwind CSS class names for a component.
 */
export function classlist(initialValue?: string | null): ClassList {
  if (isString(initialValue)) {
    return new ClassList(initialValue);
  }
  return new ClassList();
}
