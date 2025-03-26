// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Config = Record<string, any>;
export function isObject(value: unknown): value is object {
	return typeof value === 'object' && !Array.isArray(value);
}

export function isConfigObject(value: unknown): value is Config {
	return isObject(value) && !isEmptyObject(value);
}

export function isEmptyConfigObject(value: unknown): value is Config {
	return isObject(value) && isEmptyObject(value);
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export function isEmptyObject(value: unknown): value is {} {
	return isObject(value) && Object.keys(value || {}).length === 0;
}
// eslint-disable-next-line  @typescript-eslint/no-unsafe-function-type
export function isFunction(value: unknown): value is Function {
	return typeof value === 'function';
}

export function isString(value: unknown): value is string {
	return typeof value === 'string';
}

export function isNumber(value: unknown): value is number {
	return typeof value === 'number';
}

export function isBoolean(value: unknown): value is boolean {
	return typeof value === 'boolean';
}

/**
 * Returns true if value is an array and has at least one element, otherwise false.
 */
export function isArray(value: unknown): value is [] {
	return Array.isArray(value) && value.length > 0;
}

export function isUndefined(value: unknown): value is undefined {
	return typeof value === 'undefined';
}

export function isUndefinedOrNull(value: unknown): value is undefined | null {
	return isUndefined(value) || value === null;
}
