import { Config } from "../types";
import { Type } from "./type-check.helper";

/** Returns the object properties values, including properties values of it child objects in a string.*/
function toString(obj: Config, separator = ' '): string {
  /* Given an object with values to extract

  1. If the object is undefined, return an empty string
  2. Else, create a variable named res and initialized with an empty string
  3. Iterate over the properties values of the object.
    For each property:
      1. If the property value is a string, add a single space on it then add it in res
      2. Else, if it is an object, make a recursion on it and store the result in res
  4. Return res.
  */
  let res = '';

  if (!Type.isObject(obj)) return res;

  for (const value of Object.values(obj)) {
    if (Type.isString(value)) {
      if (res.length === 0) {
        res += value;
      } else {
        res += separator + value;
      }
    } else if (Type.isObject(value)) {
      res += separator + toString(value, separator);
    }
  }
  return res;
}

/** Returns the object properties values, including properties values of it child objects in an array.*/
function toArray(obj: Config): string[] {
  /* Given an object with values to extract

  1. If the object is undefined, return an empty []
  2. Else, create a variable named res and initialized with an empty []
  3. Iterate over the properties values of the object.
    For each property:
      1. If the property value is a string, add it in res
      2. Else, if it is an object, make a recursion on it and store the result in res
  4. Return res.
  */
  const res: string[] = [];

  if (!Type.isObject(obj) || Type.isEmptyObject(obj)) return res;

  for (const value of Object.values(obj)) {
    if (Type.isString(value)) {
      res.push(value);
    } else if (Type.isObject(value)) {
      res.push(...toArray(value));
    }
  }
  return res;
}

function toArrayMemo(fn: (obj: Config, key?: string) => string[]) {
  const cache = new Map<string, string[]>();
  let cleanupScheduled = false;

  const scheduleCleanupIfNeeded = () => {
    if (cleanupScheduled) return;
    window.addEventListener('load', () => {
      cache.clear();
    }, { once: true, capture: true, passive: true });
    cleanupScheduled = true;
  };

  return function (obj: Config, key?: string): string[] {
    if (!key) {
      key = JSON.stringify(obj);
    }
    if (cache.has(key)) return cache.get(key)!;
    const result = fn(obj);
    cache.set(key, result);
    scheduleCleanupIfNeeded();
    return result;
  };
}

function toStringMemo(fn: (obj: Config, key?: string) => string) {
  const cache = new Map<string, string>();
  let cleanupScheduled = false;

  const scheduleCleanupIfNeeded = () => {
    if (cleanupScheduled) return;
    window.addEventListener('load', () => {
      cache.clear();
    }, { once: true, capture: true, passive: true });
    cleanupScheduled = true;
  };

  return function (obj: Config, key?: string): string {
    if (!key) {
      key = JSON.stringify(obj);
    }
    if (cache.has(key)) return cache.get(key)!;
    const result = fn(obj);
    cache.set(key, result);
    scheduleCleanupIfNeeded();
    return result;
  };
}

/** Simply merges objects from source to target.
 * @NOTE Empty child objet(s) of source are ignored during the merge.
 * @param target - The target object to update
 * @param source - The source objects to merge
 * @returns The merged object
 */
function simpleMerge<T extends Config>(...arg: (T | Partial<T>)[]): T {
  /* Given a list of objects to merge in a target object

  1. Loop through each object of source objects
    1. Loop through each property in the current source object
      1. If target object has a matching property and it's an object,
        make a recursion call with the target object property as target
        and the current source object property as source.
      2. Else if it matches and it's not an object,
        update the target value with the current source object value
  2. Return the target object
  */

  const [target, ...source] = arg;

  if (!target) return {} as T;

  for (const obj of source) {
    for (const k in obj) {
      if (Type.isString(obj[k])) {
        Object.assign(target, { [k]: obj[k] });
      } else if (Type.isConfigObject(obj[k])) {
        if (!target[k]) {
          Object.assign(target, { [k]: obj[k] });
        } else if (Type.isConfigObject(target[k])) {
          simpleMerge(target[k], obj[k]);
        }
      }
    }
  }
  return target as T;
}

/** Strictly merges objects from source to target.
 * @NOTE Empty child objet(s) of source are not ignored during the merge.
 * @param target - The target object to update
 * @param source - The source object to merge
 * @returns The merged object
 */
function strictMerge<T extends Config>(...arg: (T | Partial<T>)[]): T {
  /* Given a list of objects to merge in target object
    1. Loop through each object in source objects
      1. If source object is empty, return it.
      2. Else, loop through each property of the current source object
        1. If target object has a matching property and it is an object,
          make a recursion call with the target object property as target
          and the current source object property as source
          and store the result in the target object property
        2. Else if it matches and it's not an object,
          update the target value with the current source object value
    2. Return the target object
   */

  const [target, ...source] = arg;

  if (!target) return {} as T;

  for (const obj of source) {
    for (const k in obj) {
      if (Type.isString(obj[k])) {
        Object.assign(target, { [k]: obj[k] });
      } else if (Type.isEmptyConfigObject(obj[k])) {
        Object.assign(target, { [k]: obj[k] });
      } else if (Type.isConfigObject(obj[k]) && Type.isConfigObject(target[k])) {
        strictMerge(target[k], obj[k]);
      }
    }
  }
  return target as T;
}

/**
 * Object helper class with static methods for object manipulation.
 */
export abstract class Obj {

  /** Returns the object properties values,
   * including properties values of it child objects in a string.
   * */
  static readonly toString = toStringMemo(toString)

  /** Returns the object properties values,
   * including properties values of it child objects in an array.
   * */
  static readonly toArray = toArrayMemo(toArray)
  static readonly merge = {
    /**
     * Merges objects from source to target ignoring empty child objects from source.
     */
    simple: simpleMerge,
    /**
     * Merges objects from source to target including empty child objects from source. If a property exists in both objects, the value from the source object will be used.
     */
    strict: strictMerge,
  }
}
