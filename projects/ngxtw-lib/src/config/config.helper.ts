import { mergeStrictly, mergeSimply } from "../core/helpers/object.helper";
import { ConfigValue } from "../core/types/config.type";
import { DeepPartial } from "../core/types/deep-partial.type";

/**
 * Merges the source objects into the target object.
 * @param arg The merge arguments. If strict is true, empty child object(s) of source are not ignored during the merge.
 * @returns The merged object
 */
export function mergeConfig<T extends ConfigValue>(arg: { target: T, source: DeepPartial<T>[], strict?: boolean }): T {
  if (arg.strict) {
    return mergeStrictly(arg.target, ...arg.source);
  }
  return mergeSimply(arg.target, ...arg.source);
}
