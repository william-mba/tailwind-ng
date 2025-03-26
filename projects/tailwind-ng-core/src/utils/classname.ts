import { isString } from './type-assertion';

/** Transfroms string value to an array then returns it.
 * Returns an empty array if value is undefined. */
function stringToArray(value: unknown, separator = ' '): string[] {
	return isString(value) ? (value as string).split(separator) : [];
}

/**
 * A utility for classname operations.
 */
export abstract class ClassName {
	/**
	 * Resolves classnames from source to target.
	 * @param arg The target and source values to resolve.
	 * @param options The options for resolving.
	 * @returns The resolved classnames.
	 */
	static readonly resolve = resolve;
	/**
	 * Converts value to an array of strings using the specified separator. If value is not a string, an empty array is returned.
	 * @param value The value to convert.
	 * @param separator The separator to use.
	 */
	static readonly toArray = stringToArray;
}

interface ResolveOptions {
	/** Whether to keep the class-deletor in the target array. */
	keepClassDeletor?: boolean;
	/** The minimum string length. Default is 2.
	 */
	minStringLength?: number;
}

function assertValueSetted(value: unknown): asserts value is string | string[] {
	if (typeof value === 'string') {
		value ??= '';
	} else if (Array.isArray(value)) {
		for (let i = 0; i < value.length; i++) {
			value[i] ??= '';
		}
	}
}

function trimSpaces(...values: string[]) {
	let res = values[0];
	if (res.length) {
		res = values[0].replace(/\s/g, '');
	}
	for (let i = 1; i < values.length; i++) {
		res += values[i].replace(/\s/g, '');
	}
	return res;
}

function generateKey(...arg: (string | undefined | null)[]): string {
	assertValueSetted(arg);
	return trimSpaces(...arg);
}

let resolveCache: Map<string, string> | null;
let cacheCleanupScheduled = false;

function scheduleCacheCleanup() {
	if (cacheCleanupScheduled) return;
	setTimeout(() => {
		resolveCache = null;
		cacheCleanupScheduled = false;
	}, 1000 * 60); // 1 minute
	cacheCleanupScheduled = true;
}

/** Returns an array of resolved values from source to target.
 *
 * The first argument is the target and the rest are source arrays.
 * - Replace target values that partially or fully match source value(s).
 * - Adds to target, source value(s) that does not end by the '-' character.
 * @param arg The target and source values to resolve.
 * @param options The options for resolving.
 * */
function resolve(arg: [string | undefined | null, string | undefined | null], options: ResolveOptions = {}): string {
	const key = generateKey(...arg, `${options.keepClassDeletor ?? ''}`);
	if (resolveCache && resolveCache.has(key)) {
		return resolveCache.get(key)!;
	} else {
		resolveCache = new Map();
	}
	// eslint-disable-next-line prefer-const
	let [t = '', s = ''] = arg;

	if (!t || (t && t.length === 1) || !s || (s && s.length === 1)) {
		let res = '';
		if (t) res += t;
		if (s) res += s;
		return res;
	}

	/* Given an array of strings to resolve from source to target
    For each value in source, remove target values that partially or fully match the source value.
    If the source value don't ends by the character '-' (class-deletor), add it to target.
  */
	const temp: string[] = [];
	let target = t.split(' ');
	const source = s.split(' ');

	const { keepClassDeletor = false, minStringLength = 2 } = options;

	for (const className of source) {
		if (className.length >= minStringLength) {
			// When the class name is a class-deletor, target values starting with source value should be removed.
			// Ex: bg-red-' remove 'bg-red-*', 'bg-' remove 'bg-*' etc.
			if (className.charAt(className.length - 1) === '-') {
				const lengthsEqual = className.length === minStringLength;
				const searchString = className.substring(0, lengthsEqual ? className.length : className.length - 1);
				target = target.filter((value) => {
					return !value.startsWith(searchString);
				});
				// Keep the class-deletor in the target array.
				// Usefull when setting the initial class list of a component.
				if (keepClassDeletor) {
					temp.push(className);
				}
			} else {
				// When the class name is not a class-deletor
				let lastIndexOfSeperator = className.lastIndexOf('-');
				let searchString = lastIndexOfSeperator > 0 ? className.substring(0, lastIndexOfSeperator) : className;
				const foundInSource = className.match(/-/g)?.length ?? 0;

				target = target.filter((value) => {
					const foundInTarget = value.match(/-/g)?.length ?? 0;
					const matchPercentage = (value.length * 100) / className.length;

					// When target is for instance 'bg-blue-*' and source 'bg-red-*'
					if (foundInSource >= foundInTarget && foundInSource > 1) {
						// When source is for instance 'text-blue-600' and target is 'text-sm'
						if (foundInSource > foundInTarget && foundInTarget === 1) {
							if (value.endsWith('transparent')) {
								// We extract another string segment
								// searchString 'bg-red' is truncate to 'bg'
								lastIndexOfSeperator = searchString.lastIndexOf('-');
								if (lastIndexOfSeperator > 0) {
									searchString = searchString.substring(0, lastIndexOfSeperator);
								}
								return !value.startsWith(searchString);
							}
							return true;
						}

						// When target is for instance 'bg-blue-*' and source is 'bg-blue-*'
						if (value.startsWith(searchString)) return false;

						// Else, we need to extract another string segment
						// searchString 'bg-red' is truncate to 'bg'
						lastIndexOfSeperator = searchString.lastIndexOf('-');
						if (lastIndexOfSeperator > 0) {
							searchString = searchString.substring(0, lastIndexOfSeperator);
						}
						return !value.startsWith(searchString);
					} else if (foundInSource === foundInTarget) {
						if (matchPercentage < 150) {
							return !value.startsWith(searchString);
						} else {
							// When target is 'ring-2' and source is 'ring-inset' or
							// target is `rounded-md` and source is `ring-2` for instance
							if (matchPercentage < 170) {
								return true;
							}
							return !value.startsWith(searchString);
						}
					} else if (foundInSource < foundInTarget) {
						// When target value is for instance scale-y-100 and source value is scale-100
						if (matchPercentage < 150) {
							return !value.startsWith(searchString);
						}
					}
					return true;
				});
				temp.push(className);
			}
		}
	}
	const result = [...target, ...temp].join(' ');
	if (!cacheCleanupScheduled) scheduleCacheCleanup();
	return resolveCache.set(key, result).get(key)!;
}
