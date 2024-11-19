import { resolve } from "../utils/string.util";
import { objectToArray, ValueObject } from "../utils/object.util";
import { ClassName } from "../types/class-name.type";

/**
 * An object for managing the class list of a component.
 */
export class ClassList {
  private _value: ClassName[] = [];
  private _initialValue: string[] = [];
  private _lastDeleted: string[] = [];

  /**
   * The current class list.
   */
  get value(): string[] {
    return this._value as string[];
  }

  /**
   * The initial class list passed to the component before initialization.
   * - Setted in the `ngOnInit` lifecycle hook or in the `buildStyle` method.
   */
  get initial(): string[] {
    return this._initialValue;
  }

  /**
   * Sets the initial class list passed to the component input.
   * @NOTE This method should be used only in the `ngOnInit` lifecycle hook or in the `buildStyle` method.
   */
  init(value: ClassName[]) {
    if (!value || value.length === 0) return;
    this._initialValue = resolve(this._initialValue, value as string[], true).resolved;
  }

  /**
   * The last deleted class list during the last update.
   */
  get lastDeleted(): string[] {
    return this._lastDeleted;
  }

  /**
   * Update the class list by adding or removing classes using the given class list.
   * @param value The class list to use for updating the current class list.
   */
  update(value: ClassName[]): void {
    const { resolved, deleted } = resolve(
      this._value as string[],
      value as string[]
    );
    this._lastDeleted = deleted;
    this._value = resolved;
  }

  /**
   * Set a brand new class list by merging the given class list with the initial class list.
   * - Prefer the `update` method if you want to add or remove classes in the current class list.
   * @param value The class list to set.
   */
  merge(value: ClassName[]): void {
    this.set(resolve(value as string[], this._initialValue).resolved);
  }

  /**
   * Set a brand new class list by merging the given object values with the initial class list.
   * @param value The object from which to extract values.
   */
  setFrom<T extends ValueObject>(config: T) {
    this.set(resolve(objectToArray(config), this._initialValue).resolved);
  }

  /**
   * Set a brand new class list.
   * @param value The class list to set.
   */
  set(value: ClassName[]): void {
    this._value = value;
  }
}
