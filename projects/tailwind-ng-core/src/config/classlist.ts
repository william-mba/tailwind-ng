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
   * Initializes the class list value.
   */
  init<T extends string>(value?: T): Promise<IClassList>;
  init<T extends string[]>(value?: T[]): Promise<IClassList>;
  init<T extends Config>(value?: T): Promise<IClassList>;
  /**
   * Sets a brand new class list value.
   */
  set<T extends string>(value: T): Promise<IClassList>;
  set<T extends string[]>(value: T[]): Promise<IClassList>;
  set<T extends Config>(value: T): Promise<IClassList>;
  /**
   * Updates the current class list value.
   */
  update<T extends string>(value: T): Promise<IClassList>;
  update<T extends string[]>(value: T[]): Promise<IClassList>;
  update<T extends Config>(value: T): Promise<IClassList>;
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
  clear(behavior: ClearBehavior): Promise<IClassList>;
  /**
   * Takes a value and resolves it with the class list without altering it current value or base.
   * @param value The value to resolve.
   * @param behavior The behavior to resolve the class list. By default the current value is used.
   * @returns The resolved class list value.
   */
  with(value: string | string[] | Config, behavior: ResolveBehavior): Promise<string>;
}
type ClearBehavior = 'all' | 'value';
type ResolveBehavior = {
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
  constructor(base: string | string[] | Config = []) {
    this.base.set(valueFrom(base));
    this.value.set(valueFrom(base));
  }

  async init<T extends string>(value?: T): Promise<ClassList>;
  async init<T extends string[]>(value?: T[]): Promise<ClassList>;
  async init<T extends Config>(value?: T): Promise<ClassList>;
  async init<T extends string | string[] | Config>(value: T): Promise<ClassList> {
    Str.resolve([this.base(), valueFrom(value)], { keepClassDeletor: true })
      .then((result) => this.base.set(result));
    return this;
  }

  async set<T extends string>(value: T): Promise<ClassList>;
  async set<T extends string[]>(value: T[]): Promise<ClassList>;
  async set<T extends Config>(value: T): Promise<ClassList>;
  async set<T extends string | string[] | Config>(value: T): Promise<ClassList> {
    Str.resolve([valueFrom(value), this.base()])
      .then((result) => this.value.set(result));
    return this;
  }

  async update<T extends string>(value: T): Promise<ClassList>;
  async update<T extends string[]>(value: T[]): Promise<ClassList>;
  async update<T extends Config>(value: T): Promise<ClassList>;
  async update<T extends string | string[] | Config>(value: T): Promise<ClassList> {
    Str.resolve([this.value(), valueFrom(value)])
      .then((result) => this.value.set(result));
    return this;
  }

  toString(): string {
    return this.value().join(' ');
  }

  async clear(behavior: ClearBehavior = 'all'): Promise<ClassList> {
    if (behavior === 'all') {
      this.base.set([]);
    }
    this.value.set([]);
    return this;
  }

  async with(value?: string | string[] | Config, behavior: ResolveBehavior = {}): Promise<string> {
    const { useBase } = behavior;
    value = valueFrom(value);
    if (!value || value.length < MIN_CLASS_NAMES) return this.value().join(' ');
    if (useBase) {
      return Str.resolve([this.base(), valueFrom(value)]).then(res => res.join(' '));
    }
    return Str.resolve([this.value(), valueFrom(value)]).then(res => res.join(' '));
  }
}

const MIN_CLASS_NAMES = 1;
export function valueFrom<T extends string | string[] | Config>(value?: T): string[] {
  let newValue: string[] = [];
  if (!value) return newValue;
  if (Type.isString(value)) {
    newValue = Str.toArray(value);
  } else if (Type.isArray(value)) {
    newValue = value;
  } else if (Type.isObject(value)) {
    newValue = Obj.toArray(value);
  }
  return newValue;
}
