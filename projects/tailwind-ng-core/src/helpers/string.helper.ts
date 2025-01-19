import { Type } from "./type-check.helper";

/** Transfroms string value to an array then returns it.
 * Returns an empty array if value is undefined. */
function stringToArray(value: unknown, separator = ' '): string[] {
  return Type.isString(value) ? (value as string).split(separator) : [];
}

/**
 * A helper class for string operations.
 */
export abstract class Str {
  static readonly resolve = resolve;
  static readonly toArray = stringToArray;
}

interface ResolveOptions {
  /** Whether to keep the class-deletor in the target array. */
  keepClassDeletor: boolean;
  /** The minimum string length. Default is 2.
   */
  minStringLength: number;
}

/** Returns an array of resolved values from source to target.
 *
 * The first argument is the target and the rest are source arrays.
 * - Replace target values that partially or fully match source value(s).
 * - Adds to target, source value(s) that does not end by the '-' character.
 * @param arg The target and source values to resolve.
 * @param options The options for resolving.
 * */
function resolve(arg: [...string[][]], { keepClassDeletor = false, minStringLength = 2 }: Partial<ResolveOptions> = {}): string[] {

  // eslint-disable-next-line prefer-const
  let [target, ...sources] = arg;

  if (!sources || sources.length === 0) return target;
  if ((!sources || sources.length === 0) && (!target || target.length === 0)) return [];

  /* Given an array of strings to resolve from source to target
    For each value in source, remove target values that partially or fully match the source value.
    If the source value don't ends by the character '-' (class-deletor), add it to target.
  */
  const temp: string[] = [];

  if (sources.length === 1) {
    for (const className of sources[0]) {
      if (className.length >= minStringLength!) {
        // When the class name is a class-deletor, target values starting with source value should be removed.
        // Ex: bg-red-' remove 'bg-red-*', 'bg-' remove 'bg-*' etc.
        if (className.charAt(className.length - 1) === '-') {
          const lengthsEqual = className.length === minStringLength;
          const searchString = className.substring(0, lengthsEqual ? className.length : className.length - 1);
          target = target.filter(value => {
            return !value.startsWith(searchString);
          })
          // Keep the class-deletor in the target array.
          // Usefull when setting the initial class list of a component.
          if (keepClassDeletor) {
            temp.push(className);
          }
        } else {
          // When the class name is not a class-deletor
          let lastIndexOfSeperator = className.lastIndexOf('-');
          let searchString = lastIndexOfSeperator > 0 ? className.substring(0, lastIndexOfSeperator) : className;
          const foundInSource = Array.from(className.matchAll(/-/g)).length;

          target = target.filter(value => {
            const foundInTarget = Array.from(value.matchAll(/-/g)).length;
            const matchPercentage = (value.length * 100) / className.length;

            // When target is for instance 'bg-blue-*' and source 'bg-red-*'
            if (foundInSource >= foundInTarget && foundInSource > 1) {
              // When source is for instance 'text-blue-600' and target is 'text-sm'
              if (foundInSource > foundInTarget && foundInTarget === 1) {
                return true;
              }

              // When target is for instance 'bg-blue-*' and source is 'bg-blue-*'
              if (value.startsWith(searchString)) return false;

              // Else, we need to extract another string segment
              // searchString 'bg-red' is truncate to 'bg'
              lastIndexOfSeperator = searchString.lastIndexOf('-');
              if (lastIndexOfSeperator > 0) {
                searchString = searchString.substring(0, lastIndexOfSeperator);
              }
              return !value.startsWith(searchString);
            } else if (foundInSource === foundInTarget) {
              if (matchPercentage < 150) {
                return !value.startsWith(searchString);
              } else {
                // When target is 'ring-2' and source is 'ring-inset' or
                // target is `rounded-md` and source is `ring-2` for instance
                if (matchPercentage < 170) {
                  return true;
                }
                return !value.startsWith(searchString);
              }
            } else if (foundInSource < foundInTarget) {
              // When target value is for instance scale-y-100 and source value is scale-100
              if (matchPercentage < 150) {
                return !value.startsWith(searchString);
              }
            }
            return true;
          })
          temp.push(className);
        }
      }
    }
  }
  if (sources.length > 1) {
    for (const src of sources) {
      target = resolve([target, src], { keepClassDeletor, minStringLength });
    }
  }
  return target.concat(temp);
}