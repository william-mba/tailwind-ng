import { isString } from "./type-check.helper";

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
function resolve(target: string[], source: string[], opts?: Partial<ResolveOptions>): string[] {
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
      // When the class name is a class-deletor,
      // all target values starting with the class name should be removed.
      // ex:
      //  - 'bg-red-' remove 'bg-red-*',
      //  - 'bg-' remove 'bg-*' etc.
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

          // When target is for instance 'bg-blue-*' and source 'bg-red-*'
          if (foundInSource >= foundInTarget && foundInSource > 1) {
            // When source is for instance 'text-blue-600' and target is 'text-sm'
            if (foundInSource > foundInTarget && foundInTarget === 1) {
              // if (value === 'rounded-md') {
              //   console.group('if (foundInSource > foundInTarget && foundInTarget === 1)');
              //   console.log(`source: ${source[i].length}`, source[i]);
              //   console.log(`value: ${value.length}`, value);
              //   console.log('keepped');
              //   console.groupEnd();
              // }
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
            const res = value.startsWith(searchString)
            // if (value === 'rounded-md') {
            //   console.group('after if (lastIndexOfSeperator > 0)');
            //   console.log(`source: ${source[i].length}`, source[i]);
            //   console.log(`value: ${value.length}`, value);
            //   console.log('keepped', !res);
            //   console.groupEnd();
            // }
            return !res;
          } else if (foundInSource === foundInTarget) {
            const matchPercentage = (value.length * 100) / source[i].length;
            if (matchPercentage < 150) {
              const res = value.startsWith(searchString)
              // if (value === 'rounded-md') {
              //   console.group('if (matchPercentage < 150)');
              //   console.log(`source: ${source[i].length}`, source[i]);
              //   console.log(`value: ${value.length}`, value);
              //   console.log(`matchPercentage: ${matchPercentage}`);
              //   console.log('keepped', !res);
              //   console.groupEnd();
              // }
              return !res;
            } else {
              const res = value.startsWith(searchString)
              // if (value === 'rounded-md') {
              //   console.group('(else) of if (matchPercentage < 150)');
              //   console.log(`source: ${source[i].length}`, source[i]);
              //   console.log(`value: ${value.length}`, value);
              // }

              // When target is 'ring-2' and source is 'ring-inset' or
              // target is `rounded-md` and source is `ring-2` for instance
              if (matchPercentage < 170) {
                // console.log(`if (matchPercentage < 170)`);
                // console.log(`matchPercentage: ${matchPercentage}`);
                // console.log('keepped', true);
                // console.groupEnd();
                return true;
              }
              // if (value === 'rounded-md') {
              //   console.log(`matchPercentage: ${matchPercentage}`);
              //   console.log('keepped', !res);
              //   console.groupEnd();
              // }
              return !res;
            }
          } else if (foundInSource < foundInTarget) {
            // When target value is for instance scale-y-100 and source value is scale-100
            const matchPercentage = (value.length * 100) / source[i].length;
            if (matchPercentage < 150) {
              const res = value.startsWith(searchString)
              // if (value === 'rounded-md') {
              //   console.group('if (matchPercentage < 150) IN else if (foundInSource < foundInTarget)');
              //   console.log(`source: ${source[i].length}`, source[i]);
              //   console.log(`value: ${value.length}`, value);
              //   console.log(`matchPercentage: ${matchPercentage}`);
              //   console.log('keepped', !res);
              //   console.groupEnd();
              // }
              return !res;
            } else {
              const res = value.startsWith(searchString)
              // if (value === 'rounded-md') {
              //   console.group('(else) IN else if (foundInSource < foundInTarget)');
              //   console.log(`source: ${source[i].length}`, source[i]);
              //   console.log(`value: ${value.length}`, value);
              //   console.log(`matchPercentage: ${matchPercentage}`);
              //   console.log('keepped', !res);
              //   console.groupEnd();
              // }
              return !res;
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

/** Transfroms string value to an array then returns it. Returns an empty array if value is undefined. */
export function stringToArray(value: unknown): string[] {
  return isString(value) ? (value as string).split(' ') : [];
}

export abstract class StringHelper {
  static resolve = resolve;
  static toArray = stringToArray;
}
