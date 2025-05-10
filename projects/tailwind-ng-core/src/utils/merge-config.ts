import { Obj } from './object.util';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Config = Record<string, any>;

/**
 * Merges configurations into a single configuration object and returns it.
 * @param arg Configurations to merge.
 * @param options Options for merging.
 */
export function mergeConfig<T extends Config>(
	arg: [...(T | Partial<T>)[]],
	{ strict = false }: MergeOptions = {},
): T {
	if (strict) {
		return Obj.merge.strict(...arg);
	}
	return Obj.merge.simple(...arg);
}

interface MergeOptions {
	/**
	 * If true, empty child object(s) of source are not ignored during the merge. Default is false.
	 */
	strict?: boolean;
}
