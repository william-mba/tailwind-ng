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

/**
 * Returns true if item is an object. Otherwise false.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: any): boolean {
  return (item && typeof item === "object" && !Array.isArray(item));
}

/** Merge configs from sources to target
 * @param target
 * @param ...sources
 */
export function mergeConfigs<T extends Record<string, any>>(target: T, ...sources: T[]): T {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeConfigs(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeConfigs(target, ...sources);
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
  const classNameFinalValueIdentifier = ' + ';

  if (source.length >= minimumClassNameLength) {
    target = target.replace(classNameFinalValueIdentifier, ' ');

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
    // Add a separator to help identify custom style from default when needed.
    target = `${source}${classNameFinalValueIdentifier}${target}`;
  }
  return target;
}

/**
 * Get the preffix of a word
 * @param word The word to get the prefix from
 * @param separator The separator to use
 * @param strategy The strategy to use to get the prefix
 * @returns The extracted prefix
 * @example
 * getPrefix('text-red-500', '-') => 'text'
 * getPrefix('text-red-500', '-', true) => 'text-red'
 */
export const getPrefix = (word: string, separator: string = '-', strategy: 'first' | 'last' = 'first') => {
  if (strategy === 'first') {
    return word.substring(0, word.indexOf(separator, 1));
  }
  return word.substring(0, word.lastIndexOf(separator));
}
