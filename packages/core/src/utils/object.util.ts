import { ClassName } from './classname'
import {
  isArray,
  isConfigObject,
  isEmptyConfigObject,
  isEmptyObject,
  isObject,
  isString,
} from './type-assertion'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Config = Record<string, any>
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
  let res = ''

  if (!isObject(obj)) return res

  for (const value of Object.values(obj)) {
    if (isString(value)) {
      if (res.length === 0) {
        res += value
      } else {
        res += separator + value
      }
    } else if (isObject(value)) {
      res += separator + toString(value, separator)
    }
  }
  return res
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
  const res: string[] = []

  if (!isObject(obj) || isEmptyObject(obj)) return res

  for (const value of Object.values(obj)) {
    if (isString(value)) {
      res.push(value)
    } else if (isArray(value)) {
      res.concat(value)
    } else if (isObject(value)) {
      res.concat(toArray(value))
    }
  }
  return res
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

  const [target, ...source] = arg

  if (!target) return {} as T

  for (const obj of source) {
    for (const k in obj) {
      if (isString(obj[k])) {
        if (isString(target[k])) {
          const s = obj[k] as string
          const t = target[k] as string
          const res = ClassName.merge(t, s, { keepClassDeletor: true })
          Object.assign(target, { [k]: res })
        } else {
          Object.assign(target, { [k]: obj[k] })
        }
      } else if (isConfigObject(obj[k])) {
        if (!target[k]) {
          Object.assign(target, { [k]: obj[k] })
        } else if (isConfigObject(target[k])) {
          simpleMerge(target[k], obj[k])
        }
      }
    }
  }
  return target as T
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

  const [target, ...source] = arg

  if (!target) return {} as T

  for (const obj of source) {
    for (const k in obj) {
      if (isString(obj[k])) {
        Object.assign(target, { [k]: obj[k] })
      } else if (isEmptyConfigObject(obj[k])) {
        Object.assign(target, { [k]: obj[k] })
      } else if (isConfigObject(obj[k]) && isConfigObject(target[k])) {
        strictMerge(target[k], obj[k])
      }
    }
  }
  return target as T
}

/**
 * Object helper class with static methods for object manipulation.
 */
export abstract class Obj {
  /** Returns the object properties values,
   * including properties values of it child objects in a string.
   * */
  static readonly toString = toString

  /** Returns the object properties values,
   * including properties values of it child objects in an array.
   * */
  static readonly toArray = toArray
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
