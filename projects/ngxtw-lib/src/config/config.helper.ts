import { ValueObject, mergeStrictly, mergeSimply } from "../core/helpers/object.helper";

/**
 * Merges the source objects into the target object.
 * @param arg The merge arguments. If strict is true, empty child object(s) of source are not ignored during the merge.
 * @returns The merged object
 */
export function mergeConfig<T extends ValueObject>(arg: { target: T, source: Partial<T>[], strict?: boolean }): T {
  if (arg.strict) {
    return mergeStrictly(arg.target, ...arg.source);
  }
  return mergeSimply(arg.target, ...arg.source);
}
