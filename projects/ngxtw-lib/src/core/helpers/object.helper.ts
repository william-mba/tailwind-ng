import { ConfigValue } from "../types/config.type";
import { TypeChecker } from "./type-check.helper";

/** Returns the object properties values, including properties values of it child objects in a string.*/
function objectToString(obj: ConfigValue): string {
  /* Given an object with values to extract

  1. If the object is undefined, return an empty string
  2. Else, create a variable named res and initialized with an empty string
  3. Iterate over the properties values of the object.
    For each property:
      1. If the property value is a string, add a single space on it then add it in res
      2. Else, if it is an object, make a recursion on it and store the result in res
  4. Return res.
  */
  if (!TypeChecker.isObject(obj)) return '';

  let res = '';
  for (let value of Object.values(obj)) {
    if (TypeChecker.isString(value)) {
      res += value + ' ';
    } else if (TypeChecker.isObject(value)) {
      res += objectToString(value);
    }
  }
  return res;
}

/** Returns the object properties values, including properties values of it child objects in an array.*/
function objectToArray(obj: ConfigValue): string[] {
  /* Given an object with values to extract

  1. If the object is undefined, return an empty []
  2. Else, create a variable named res and initialized with an empty []
  3. Iterate over the properties values of the object.
    For each property:
      1. If the property value is a string, add it in res
      2. Else, if it is an object, make a recursion on it and store the result in res
  4. Return res.
  */
  if (!TypeChecker.isObject(obj)) return [];

  let res: string[] = [];
  for (let value of Object.values(obj)) {
    if (TypeChecker.isString(value)) {
      res.push(value);
    } else if (TypeChecker.isObject(value)) {
      res = res.concat(objectToArray(value));
    }
  }
  return res;
}

/** Simply merges objects from source to target.
 * @NOTE Empty child objet(s) of source are ignored during the merge.
 * @param target - The target object to update
 * @param source - The source objects to merge
 * @returns The merged object
 */
function mergeSimply<T extends ConfigValue>(
  target: T,
  ...source: Partial<ConfigValue>[]
): T {
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

  for (const obj of source) {
    for (const k in obj) {
      if (TypeChecker.isObject(target[k])) {
        mergeSimply(target[k], obj[k]);
      } else {
        Object.assign(target, { [k]: obj[k] });
      }
    }
  }
  return target;
}

/** Strictly merges objects from source to target.
 * @NOTE Empty child objet(s) of source are not ignored during the merge.
 * @param target - The target object to update
 * @param source - The source object to merge
 * @returns The merged object
 */
function mergeStrictly<T extends ConfigValue>(
  target: T,
  ...source: Partial<ConfigValue>[]
): T {
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

  for (const obj of source) {
    if (TypeChecker.isEmptyObject(obj)) return obj as T;

    for (const k in obj) {
      if (TypeChecker.isObject(target[k])) {
        Object.assign(target, {
          [k]: mergeStrictly(target[k], obj[k]),
        });
      } else {
        Object.assign(target, { [k]: obj[k] });
      }
    }
  }
  return target;
}

/**
 * Object helper class with static methods for object manipulation.
 */
export abstract class ObjectHelper {
  static readonly toString = objectToString
  static readonly toArray = objectToArray
  static readonly merge = {
    /**
     * Merges objects from source to target ignoring empty child objects from source.
     */
    simply: mergeSimply,
    /**
     * Merges objects from source to target including empty child objects from source. If a property exists in both objects, the value from the source object will be used.
     */
    strictly: mergeStrictly,
  }
}
