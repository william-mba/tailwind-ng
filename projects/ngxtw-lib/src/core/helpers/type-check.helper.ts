/** Returns true if value is an object, otherwise false */
export function isObject(value: any): boolean {
  return typeof value === 'object' && !Array.isArray(value);
}

/** Returns true if value is an empty object, otherwise false */
export function isEmptyObject(value: any): boolean {
  return isObject(value) && Object.keys(value || {}).length === 0;
}

export function isFunction(value: any): boolean {
  return typeof value === 'function';
}

export function isString(value: any): boolean {
  return typeof value === 'string';
}

export function isNumber(value: any): boolean {
  return typeof value === 'number';
}

export function isBoolean(value: any): boolean {
  return typeof value === 'boolean';
}

export function isArray(value: any): boolean {
  return Array.isArray(value);
}

export function isUndefined(value: any): boolean {
  return typeof value === 'undefined';
}
