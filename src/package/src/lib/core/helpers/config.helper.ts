/** Convert an object to a string of class names
 * @param obj - The object to convert to class names
 * @returns The class names
 */
export function toClassNames(obj: Record<string, any>): string {
  if (isEmptyObject(obj)) return '';

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
export const isObject = (value: any): boolean => (value && !Array.isArray(value) && (typeof value === "object"));

/** Check if a value is an empty object
 * @param value The value to check
 * @returns True if the value is an empty object otherwise false
 */
export const isEmptyObject = (value: any): boolean => (isObject(value) && (Object.keys(value || {}).length === 0));

/** Merge configs from source to target
 * @param target - The target config to update
 * @param source - The source config to merge
 * @returns The merged config
 */
export function mergeConfigs<T extends Record<string, any>>(target: T, source: Partial<T> = {}): T {
  if (!isEmptyObject(target) && isEmptyObject(source)) return target;
  if (!isEmptyObject(source) && isEmptyObject(target)) return source as T;
  
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
  return target;
}

/** Merge class names from source to target
 * @param target - The target style to update
 * @param source - A list of space separated class names to add or replace in style
 * @param match -
 * The matching strategy to be use to resolve the class name.
 * @usage 'first' (default) => the first part of the class name is used as prefix.
 * @usage 'last' => the last part is used as suffix (including the first part).
 * @usage 'exact' => the class name is used as is.
 * @example
 * mergeClassNames('text-red-500', 'text-blue-500') => 'text-blue-500'
 * mergeClassNames('text-opacity-10 text-lg', 'text-opacity-30', true) => 'text-opacity-30 text-lg'
 * @returns The resolved style
*/
export function mergeClassNames(target: string, source: string, match: 'first' | 'last' | 'exact' = 'first'): string {

  const minimumClassNameLength = 3;

  /* Return source if target has no class names and source has class names */
  if ((!target || target?.length < minimumClassNameLength)
    && (source && source.length >= minimumClassNameLength))
    return source;

  /* Return an empty string if both target and source has no class names  */
  if ((!target || target?.length < minimumClassNameLength)
    && (!source || source?.length < minimumClassNameLength))
    return '';

  /* Return target if source has no class names and target has class names or target equals source */
  if ((!source || source?.length < minimumClassNameLength)
    && (target && target.length >= minimumClassNameLength)
    || (target === source)) return target;

  if (source.length >= minimumClassNameLength) {
    source.split(' ').forEach((name) => {
      if (!name || name.length < minimumClassNameLength) return;

      if (match !== 'exact' && name.length > 0) {
        const searchTerm = getPrefix(name, '-', match);

        // Remove class names starting with the search term.
        // Because they will be replaced by the new class name.
        // e.g. Given 'text-red-500' in target and 'text-blue-500' in source,
        // 'text-red-500' will be override by 'text-blue-500'.
        if (searchTerm.length > 0) {
          target = target.split(' ')
            .filter(name => {
              return !name.startsWith(searchTerm);
            }).join(' ');
        }
      }
      /* Remove class name if ending with '-' character.
      Such class are only used to remove existing classes in style
      and should not be added to the new style.
      e.g. 'text-', '-p-', 'bg-', 'border-', 'rounded-'
      */
      if (name.charAt(name.length - 1) === '-') {
        source = source.split(name)
          .join(' ');

        // Remove the class name from the target as well if it exists
        if (match === 'exact') {
          target = target.split(' ')
            .filter(cls => {
              return !cls.startsWith(name.substring(0, name.length - 1));
            }).join(' ');
        }
      }
    });
    target = `${source} ${target}`;
  }
  return target;
}

/**
 * Get the preffix of a word
 * @param word The word to get the prefix from
 * @param separator The separator to use
 * @param match The matching strategy to be use to get the prefix
 * @returns prefix of the word
 * @example
 * getPrefix('text-red-500', '-') => 'text'
 * getPrefix('text-red-500', '-', true) => 'text-red'
 */
export function getPrefix(word: string, separator: string = '-', match: 'first' | 'last' = 'first'): string {
  if (match === 'first') {
    return word.substring(0, word.indexOf(separator, 1));
  }
  return word.substring(0, word.lastIndexOf(separator));
}

/**
 * Call the object member if the condition evaluate to true
 * @param obj the object that contains the member to call
 * @param member the object member to call
 * @param condition the callback function that determines the condition to evaluate
 * @returns void
 * @example
 * call(this, 'setA', () => true); // this.setA() is called
 * call(this, 'setB', () => false); // this.setB() is not called
 * call(this, key, () => key.startsWith('set') && key !== 'setAll');
  */
export function call<T extends object>(obj: T, member: keyof T, condition: Function): void {
  if (condition()) {
    (obj[member] as Function)();
  }
}
