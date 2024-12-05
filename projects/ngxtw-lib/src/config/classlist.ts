import { Injectable } from "@angular/core";
import { resolve } from "../core/helpers/string.helper";
import { objectToArray, ValueObject } from "../core/helpers/object.helper";

/**
 * Class list instance of the component.
 */
@Injectable()
export class ClassList {
  private _value: string[] = [];
  /**
   * The current class list value.
   */
  get value(): string[] {
    return this._value;
  };
  /**
  * The custom class list to merge with the default class list's value.
  */
  base: string[] = []

  /**
   * Sets a brand new class list.
   */
  set(value: string[]): void {
    this._value = resolve(value, this.base);
  }

  /**
   * Updates the current class list.
   * @param value
   */
  update(value: string[]): void {
    this._value = resolve(this._value, value);
  }

  /**
   * Sets class list using config object.
   */
  setFrom<T extends ValueObject>(config: T) {
    this.set(objectToArray(config));
  }

  /**
   * Updates class list using config object.
   */
  updateFrom<T extends ValueObject>(config: T) {
    this.update(objectToArray(config));
  }
}
