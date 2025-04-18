/**
 * A utility for merging class names.
 */
export const ClassName = {
	/**
	 * Merges multiple class names from right (source) to left (target).
	 *
	 * @param args - The values to merge. This function accepts a merge options as last parameter.
	 * @returns The merged result.
	 */
	merge: mergeMultiple,
	/**
	 * Converts value to an array of strings using the specified separator.
	 * If value is not a string, an empty array is returned.
	 * @param value The value to convert.
	 * @param separator The separator to use.
	 */
	toArray: stringToArray,
};

interface MergeOptions {
	/** Whether to keep the class-deletor in the target array. */
	keepClassDeletor?: boolean;
	/** The minimum string length. Default is 2.
	 */
	minStringLength?: number;
}

function assertClassName(value: unknown): asserts value is string | string[] {
	if (typeof value === 'string') {
		value ??= '';
	} else if (Array.isArray(value)) {
		value = value.filter((x) => typeof x === 'string');
	} else {
		throw new TypeError('ClassName must be a string or an array of string.');
	}
}

const NON_COLORS = ['transparent', 'white', 'black'];

/** Returns an array of merged values from source to target.
 *
 * The first argument is the target and the rest are source arrays.
 * - Replace target values that partially or fully match source value(s).
 * - Adds to target, source value(s) that does not end by the '-' character.
 * @param arg The target and source values to resolve.
 * @param options The options for merging.
 * */
function mergeTwo(arg: [ClassNameValue, ClassNameValue], options: MergeOptions = {}): string {
	const [t = '', s = ''] = arg;

	if (!t || (t && t.length === 1) || !s || (s && s.length === 1)) {
		let res = '';
		if (t) res += t;
		if (s) res += s;
		return res;
	}

	/* Given an array of strings to merge from source to target
    For each value in source, remove target values that partially or fully match the source value.
    If the source value don't ends by the character '-' (class-deletor), add it to target.
  */
	const temp: string[] = [];
	let target = t.split(' ');
	const source = s.split(' ');

	const { keepClassDeletor = false, minStringLength = 2 } = options;

	for (const className of source) {
		if (className.length >= minStringLength) {
			// If the class name is a class-deletor, target values starting with source value is removed.
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
				// ClassName is not a class-deletor
				let lastIndexOfSeperator = className.lastIndexOf('-');
				let searchString = lastIndexOfSeperator > 0 ? className.substring(0, lastIndexOfSeperator) : className;
				const foundInSource = className.match(/-/g)?.length ?? 0;

				target = target.filter((value) => {
					const foundInTarget = value.match(/-/g)?.length ?? 0;
					// This is a heuristic formula that allow merging values accurately.
					const matchPercentage = (value.length * 100) / className.length;

					// If target is for instance 'bg-blue-*' and source 'bg-red-*'
					if (foundInSource >= foundInTarget && foundInSource > 1) {
						// If source is for instance 'text-blue-600' and target is 'text-sm'
						if (foundInSource > foundInTarget && foundInTarget === 1) {
							const found = NON_COLORS.find((x) => value.endsWith(x));

							// keep non color class that does not have a value in source to merge with.
							if (found && !searchString.startsWith(value.substring(0, value.indexOf('-')))) {
								return true;
							}

							// If target is a non color value and there is a source value to merge with, remove it
							// Otherwise, keep target value
							return !found;
						}

						// If target is for instance 'bg-blue-*' and source is 'bg-blue-*'
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
							// If target is 'ring-2' and source is 'ring-inset' or
							// target is `rounded-md` and source is `ring-2` for instance
							if (matchPercentage < 170) {
								return true;
							}
							return !value.startsWith(searchString);
						}
					} else if (foundInSource < foundInTarget) {
						// If target value is for instance scale-y-100 and source value is scale-100
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
	return target.concat(temp).join(' ');
}
export type ClassNameValue = string | undefined | null;

function mergeMultiple(...args: ClassNameValue[] | [...ClassNameValue[], MergeOptions | ClassNameValue]): string {
	assertClassName(args);
	if (typeof args[args.length - 1] === 'object') {
		const options = args.pop() as MergeOptions;
		const [first, second, ...rest] = args as ClassNameValue[];
		const initialValue = mergeTwo([first, second], options);
		if (rest.length) {
			return rest.reduce((previous, current) => mergeTwo([previous, current], options), initialValue)!;
		} else {
			return initialValue;
		}
	} else {
		const [first, second, ...rest] = args as ClassNameValue[];
		const initialValue = mergeTwo([first, second]);
		if (rest.length) {
			return rest.reduce((previous, current) => mergeTwo([previous, current]), initialValue)!;
		} else {
			return initialValue;
		}
	}
}

/** Transfroms string value to an array then returns it.
 * Returns an empty array if value is undefined. */
function stringToArray(value: unknown, separator = ' '): string[] {
	return typeof value === 'string' ? (value as string).split(separator) : [];
}
