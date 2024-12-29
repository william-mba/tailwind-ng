import { TypeChecker } from "./type-check.helper";

interface ResolveOptions {
  /** Whether to keep the class-deletor in the target array. */
  keepClassDeletor: boolean;
  /** The minimum string length. Default is 2.
   */
  minStringLength: number;
}

/** Resolves strings from source to target.
 * - Replace target values that partially or fully match source value(s).
 * - Adds to target, source value(s) that does not end by the '-' character.
 * @param resolveOpts The resolve options.
 * @returns An array of resolved strings. */
function resolve(target: string | string[], source: string | string[], opts?: Partial<ResolveOptions>): string[] {
  if (typeof target === 'string') {
    target = StringHelper.toArray(target);
  }
  if (typeof source === 'string') {
    source = StringHelper.toArray(source);
  }
  if (!source || source.length === 0) return target;
  if (!target || target.length === 0) return source;
  if ((!source || source.length === 0) && (!target || target.length === 0)) return [];

  /* Given an array of strings to resolve from source to target
    For each value in source, remove target values that partially or fully match the source value.
    If the source value don't ends by the character '-' (class-deletor), add it to target.
  */
  const temp: string[] = [];

  opts = {
    minStringLength: opts?.minStringLength || 2,
    keepClassDeletor: opts?.keepClassDeletor || false
  }

  for (let i = 0; i < source.length; i++) {
    if (source[i].length >= opts.minStringLength!) {
      // When the class name is a class-deletor, target values starting with source value should be removed.
      // Ex: bg-red-' remove 'bg-red-*', 'bg-' remove 'bg-*' etc.
      if (source[i].charAt(source[i].length - 1) === '-') {
        const lengthsEqual = source[i].length === opts.minStringLength;
        const searchString = source[i].substring(0, lengthsEqual ? source[i].length : source[i].length - 1);
        target = target.filter(value => {
          return !value.startsWith(searchString);
        })
        // Keep the class-deletor in the target array.
        // Usefull when setting the initial class list of a component.
        if (opts.keepClassDeletor) {
          temp.push(source[i]);
        }
      } else {
        // When the class name is not a class-deletor
        let lastIndexOfSeperator = source[i].lastIndexOf('-');
        let searchString = lastIndexOfSeperator > 0 ? source[i].substring(0, lastIndexOfSeperator) : source[i];
        const foundInSource = Array.from(source[i].matchAll(/-/g)).length;

        target = target.filter(value => {
          const foundInTarget = Array.from(value.matchAll(/-/g)).length;
          const matchPercentage = (value.length * 100) / source[i].length;

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
        temp.push(source[i]);
      }
    }
  }
  return target.concat(temp);
}

/** Transfroms string value to an array then returns it.
 * Returns an empty array if value is undefined. */
function stringToArray(value: unknown, separator: string = ' '): string[] {
  return TypeChecker.isString(value) ? (value as string).split(separator) : [];
}

/**
 * A helper class for string operations.
 */
export abstract class StringHelper {
  static readonly resolve = resolve;
  static readonly toArray = stringToArray;
}
