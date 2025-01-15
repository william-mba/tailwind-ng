/** Returns true if value is an object, otherwise false */
function isObject(value: unknown): boolean {
  return typeof value === 'object' && !Array.isArray(value);
}

/** Returns true if value is an empty object, otherwise false */
function isEmptyObject(value: unknown): boolean {
  return isObject(value) && Object.keys(value || {}).length === 0;
}

function isFunction(value: unknown): boolean {
  return typeof value === 'function';
}

function isString(value: unknown): boolean {
  return typeof value === 'string';
}

function isNumber(value: unknown): boolean {
  return typeof value === 'number';
}

function isBoolean(value: unknown): boolean {
  return typeof value === 'boolean';
}

function isArray(value: unknown): boolean {
  return Array.isArray(value);
}

function isUndefined(value: unknown): boolean {
  return typeof value === 'undefined';
}

export abstract class Type {
  static readonly isObject = isObject;
  static readonly isEmptyObject = isEmptyObject;
  static readonly isFunction = isFunction;
  static readonly isString = isString;
  static readonly isNumber = isNumber;
  static readonly isBoolean = isBoolean;
  static readonly isArray = isArray;
  static readonly isUndefined = isUndefined;
}
