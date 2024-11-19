/** Merges strings from source to target.
 * @param separator The character to use as seperator in the set of merged strings.
 * @returns An array of merged string set or a string set separated by the given separator. */
export function merge(target: string[], source: string[], separator?: string): string[] | string {
  if (!source || source.length === 0) return separator ? target.join(separator) : target;
  let set = new Set<string>([...target, ...source]);
  return separator ? [...set].join(separator) : [...set];
}

/** Resolves strings from source to target.
 * - Replace target values that partially or fully match source value(s).
 * - Adds to target, source value(s) that does not end by the '-' character.
 * @param keepClassDeletor Whether to keep the class-deletor in the target array.
 * @returns An array of resolved strings. */
export function resolve(target: string[], source: string[], keepClassDeletor = false): ResolveResult {
  if (!source || source.length === 0) return { resolved: target, deleted: [] };
  /* Given an array of strings to resolve from source to target
    For each value in source, remove target values that partially or fully match the source value.
    If the source value don't ends by the character '-' (class-deletor), add it to target.
  */
  const temp: string[] = []
  const deleted: string[] = []
  const minStringLength = 3 // The minimum class name length. ex: p-0 = 3
  for (let i = 0; i < source.length; i++) {
    /* If source value end with '-', remove all target values that partially or fully match.
      ex.:
        target: 'text-blue-500'
        source: 'text-blue-'
        result: ''
      Note: text-blue-500 will be remove in target
    */
    if (source[i].length >= minStringLength) {
      // Check if source value has a class-deletor '-'. ex: 'text-blue-'
      if (source[i].charAt(source[i].length - 1) === '-') {
        const searchString = source[i].substring(0, source[i].length - 1);
        target = target.filter(value => {
          const valueStartsWithSearchString = value.startsWith(searchString);
          if (valueStartsWithSearchString) deleted.push(value);
          return !valueStartsWithSearchString;
        })
        // Keep the class-deletor in the target array.
        // Needed when setting the initial class list of a component.
        if (keepClassDeletor) {
          temp.push(source[i]);
        }
      } else {
        const separatorIndex = source[i].lastIndexOf('-');
        const searchString = separatorIndex > 0 ? source[i].substring(0, separatorIndex) : source[i];
        target = target.filter(value => {
          const valueStartsWithSearchString = value.startsWith(searchString);
          if (valueStartsWithSearchString) deleted.push(value);
          return !valueStartsWithSearchString;
        })
        temp.push(source[i]);
      }
    }
  }
  return { resolved: target.concat(temp), deleted };
}

type ResolveResult = {
  deleted: string[]
  resolved: string[]
}

/** Transfroms string value to an array then returns it. Returns an empty array if value is undefined. */
export function stringToArray(value?: string): string[] {
  return value ? value.split(' ') : [];
}

/** Naïvely cast value */
export function asString(value: any): string {
  return value;
}

