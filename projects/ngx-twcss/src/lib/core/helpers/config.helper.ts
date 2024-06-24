/**Convert an object to a string assignable to a className*/
export function toClassName(obj: Record<string, any>): string {
  return Object.values(obj).map(value => {
    if (typeof value === "undefined") {
      return;
    }
    if (typeof value === "object") {
      value = toClassName(value);
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

/**
 * Merge config from sources to target
 * @param target
 * @param ...sources
 */
export function resolveConfig<T extends Record<string, any>>(target: T, ...sources: T[]): T {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        resolveConfig(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return resolveConfig(target, ...sources);
}

/** Add or replace existing class name in style with matching one in className
 * @param style - The target style to update
 * @param className - A list of space separated class names to add or replace in style
 * @returns The resolved style
*/
export function resolveStyle(style: string, className: string): string {
  if (className.trim().length >= 3) {
    let newStyle = style;
    let newClassName = className.trim();

    newClassName.split(' ').forEach((cls) => {

      /* Extract the first part of the class name.
      If the class name is 'text-red-500', the term will be 'text'.
      If the class name is '-space-x-1', the term will be '-space'.
      That term is used to remove the existing class that matches in style.

      Search from index 1 to avoid the first '-' in class name that begin with it.
      e.g. '-m-2', '-p-3'
      */
      let term = cls.substring(0, cls.indexOf('-', 1));

      if (newStyle.includes(term)) {

        const filteredStyle = newStyle.split(' ')
          .filter(name => !name.includes(term));

        newStyle = filteredStyle.join(' ');
      }

      /* Remove class name if ending with '-' character.
      Such class are only used to remove existing classes in style
      and should not be added to the new style.
      e.g. 'text-', '-p-', 'bg-', 'border-', 'rounded-'
      */
      if (cls.charAt(cls.length - 1) === '-') {
        newClassName = newClassName.replace(cls, '');
      }
    });

    newClassName = newClassName.trim().replace('  ', ' ');
    // Add a '+' to help identify the className final value when inspecting the DOM element.
    style = `${newClassName } + ${newStyle}`;
  }
  return style;
}
