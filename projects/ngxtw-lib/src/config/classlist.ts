import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { resolve } from "../core/helpers/string.helper";
import { objectToArray, ValueObject } from "../core/helpers/object.helper";

/**
 * Class list instance of the component.
 */
@Injectable()
export class ClassList {
  /**
   * Base class list used to resolve the final class list's value.
   */
  readonly base = new BehaviorSubject<string[]>([]);
  readonly value = signal<string[]>([]);
  private _initial: string[] = []

  constructor() {
    this.base.subscribe((value) => {
      this._initial = resolve(this._initial, value);
      this.update(this._initial);
    });
  }

  /**
   * Sets a brand new class list.
   */
  set(value: string[]): void {
    this.value.set(resolve(value, this._initial));
  }

  /**
   * Updates the current class list.
   * @param value
   */
  update(value: string[]): void {
    this.value.update((current) => resolve(current, value));
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
