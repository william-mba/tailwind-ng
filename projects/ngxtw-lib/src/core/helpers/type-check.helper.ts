/** Returns true if value is an object, otherwise false */
function isObject(value: any): boolean {
  return typeof value === 'object' && !Array.isArray(value);
}

/** Returns true if value is an empty object, otherwise false */
function isEmptyObject(value: any): boolean {
  return isObject(value) && Object.keys(value || {}).length === 0;
}

function isFunction(value: any): boolean {
  return typeof value === 'function';
}

function isString(value: any): boolean {
  return typeof value === 'string';
}

function isNumber(value: any): boolean {
  return typeof value === 'number';
}

function isBoolean(value: any): boolean {
  return typeof value === 'boolean';
}

function isArray(value: any): boolean {
  return Array.isArray(value);
}

function isUndefined(value: any): boolean {
  return typeof value === 'undefined';
}

export abstract class TypeCheckHelper {
  static readonly isObject = isObject;
  static readonly isEmptyObject = isEmptyObject;
  static readonly isFunction = isFunction;
  static readonly isString = isString;
  static readonly isNumber = isNumber;
  static readonly isBoolean = isBoolean;
  static readonly isArray = isArray;
  static readonly isUndefined = isUndefined;
}
