import { Config } from "../types/config.type";

/** Returns true if value is an object, otherwise false */
function isObject(value: unknown): value is object {
  return typeof value === 'object' && !Array.isArray(value);
}

function isConfigObject(value: unknown): value is Config {
  return isObject(value) && !isEmptyObject(value);
}

function isEmptyConfigObject(value: unknown): value is Config {
  return isObject(value) && isEmptyObject(value);
}

/** Returns true if value is an empty object, otherwise false */
function isEmptyObject(value: unknown): value is {} {
  return isObject(value) && Object.keys(value || {}).length === 0;
}

function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Returns true if value is an array and has at least one element, otherwise false.
 */
function isArray(value: unknown): value is [] {
  return Array.isArray(value) && value.length > 0;
}

function isUndefined(value: unknown): value is undefined {
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
  static readonly isConfigObject = isConfigObject;
  static readonly isEmptyConfigObject = isEmptyConfigObject;
}
