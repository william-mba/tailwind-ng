import { isHTMLElement } from "../guards";
import { ClassName } from "./classname.util";
import { isString } from "./type-assertion.util";

type Value = string | null | undefined;

/**
 * @TailwindNG Class list interface.
 */
export interface ClassList {
  /**
   * Returns the current classlist's value.
   */
  (): NonNullable<Value>;
  /**
   * Sets the classlist's value. If multiple values is provided, they will be merged from right to left.
   * @returns The classlist with it new value.
   */
  set(...value: Value[]): ClassList;
  /**
   * Updates the classlist value.
   * @param fn The update function that returns the new value to be setted.
   * @param currentValue The current classlist's value passed to the update function.
   */
  update(fn: (currentValue: NonNullable<Value>) => Value): ClassList;
  /**
   * Merges multiple classnames to the classlist.
   * @param fn The merge function that returns an array of values to merge from right to left.
   * @param currentValue The current classlist's value passed to the merge function.
   */
  merge(fn: (currentValue: NonNullable<Value>) => Value[]): ClassList;
  /**
   * Returns an array representation of the classlist's value
   */
  toArray(): NonNullable<Value>[];
}

function setClassName(value: Value, el?: HTMLElement) {
  if (value && el) {
    el.className = value
  }
}

/**
 * Creates a `ClassList` that can be set, update or merge directly.
 * @param base The base value of the class list.
 * @param el The element on which the classlist changes apply.
 */
export function classlist(base?: Value | HTMLElement, el?: HTMLElement): ClassList {
  let _value = '';
  if (isString(base)) {
    _value = base;
    if (isHTMLElement(el)) {
      setClassName(_value, el);
    }
  } else if (isHTMLElement(base)) {
    _value = base.className;
  }
  const classlist = (): NonNullable<Value> => {
    return _value;
  }
  // classlist is setted by merging value from right to left.
  classlist.set = (...value: Value[]) => {
    const [first, second, ...rest] = value
    let newValue = ClassName.resolve([first, second]);
    newValue = rest.reduce((prev, curr) => ClassName.resolve([prev, curr]), newValue)!;
    // A new value is setted only if it's null/undefined and different from the current value.
    if (newValue && newValue !== _value) {
      _value = newValue;
      if (isHTMLElement(base)) {
        setClassName(_value, base);
      } else if (isHTMLElement(el)) {
        setClassName(_value, el);
      }
    }
    return classlist;
  }
  classlist.update = (fn: (currentValue: NonNullable<Value>) => Value) => {
    return classlist.set(fn(_value));
  };
  classlist.merge = (fn: (currentValue: NonNullable<Value>) => Value[]) => {
    const [first, second, ...rest] = fn(_value);
    const initialValue = ClassName.resolve([first, second]);
    return classlist.set(rest.reduce((prev, curr) => ClassName.resolve([prev, curr]), initialValue));
  }
  classlist.toArray = () => ClassName.toArray(_value);
  classlist.toString = () => _value;
  return classlist
}
