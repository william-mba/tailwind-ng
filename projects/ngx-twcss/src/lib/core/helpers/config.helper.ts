/** Convert an object to a string of class names
 * @param obj - The object to convert to class names
 * @returns The class names
 */
export function toClassNames(obj: Record<string, any>): string {
  return Object.values(obj).map(value => {
    if (typeof value === "undefined") {
      return;
    }
    if (isObject(value)) {
      value = toClassNames(value);
    }
    return value

  }).join(' ');
}

/** Check if a value is an object
 * @param value The value to check
 * @returns True if the value is an object otherwise false
 */
export function isObject(value: any): boolean {
  return ((Object.keys(value || {}).length > 0) && !Array.isArray(value) && (typeof value === "object"));
}

/** Merge configs from source to target
 * @param target - The target config to update
 * @param source - The source config to merge
 * @returns The merged config
 */
export function mergeConfigs<T extends Record<string, any>>(target: T, source: Partial<T> = {}): T {

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) {
          Object.assign(target, { [key]: {} });
        }
        mergeConfigs(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  if (isObject(target)) {
    return target;
  }
  return {} as T;
}

/** Merge class names from source to target
 * @param target - The target style to update
 * @param source - A list of space separated class names to add or replace in style
 * @param strategy - The strategy to use to resolve the class name
 * @example
 * mergeClassNames('text-red-500', 'text-blue-500') => 'text-blue-500'
 * mergeClassNames('text-opacity-10 text-lg', 'text-opacity-30', true) => 'text-opacity-30 text-lg'
 * @returns The resolved style
*/
export function mergeClassNames(target: string, source: string, strategy: 'first' | 'last' = 'first'): string {
  if (!source || (target === source)) return target;

  if (!target && source) return source;

  if (!target && !source) return '';

  const minimumClassNameLength = 3;

  const divider = '+' // the divider that separate custom style from default style

  if (source.length >= minimumClassNameLength) {
    target = target.replace(` ${divider} `, ' ');

    source.split(' ')
      .forEach((name) => {
        if (!name || name.length < minimumClassNameLength) return;

        const classPrefix = getPrefix(name, '-', strategy);

        if (classPrefix.length > 0) {
          target = target.split(' ')
            .filter(name => !name.startsWith(classPrefix))
            .join(' ');
        }

        /* Remove class name if ending with '-' character.
        Such class are only used to remove existing classes in style
        and should not be added to the new style.
        e.g. 'text-', '-p-', 'bg-', 'border-', 'rounded-'
        */
        if (name.charAt(name.length - 1) === '-') {
          source = source.split(name)
            .join(' ');
        }
      });
    target = `${source} ${divider} ${target}`;
  }
  return target;
}

/**
 * Get the preffix of a word
 * @param word The word to get the prefix from
 * @param separator The separator to use
 * @param strategy The strategy to use to get the prefix
 * @returns prefix of the word
 * @example
 * getPrefix('text-red-500', '-') => 'text'
 * getPrefix('text-red-500', '-', true) => 'text-red'
 */
export const getPrefix = (word: string, separator: string = '-', strategy: 'first' | 'last' = 'first'): string => {
  if (strategy === 'first') {
    return word.substring(0, word.indexOf(separator, 1));
  }
  return word.substring(0, word.lastIndexOf(separator));
}
