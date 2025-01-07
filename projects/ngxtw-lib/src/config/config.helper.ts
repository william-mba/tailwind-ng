import { ObjectHelper } from "../core/helpers/object.helper";
import { ConfigValue } from "../core/types/config.type";
import { FullyOptional } from "../core/types/fully-optional.type";

/**
 * Merges the source objects into the target object.
 * @param arg The merge arguments. If strict is true, empty child object(s) of source are not ignored during the merge.
 * @returns The merged object
 */
export function mergeConfig<T extends ConfigValue>(arg: { target: T, source: FullyOptional<T>[], strict?: boolean }): T {
  if (arg.strict) {
    return ObjectHelper.merge.strictly(arg.target, ...arg.source);
  }
  return ObjectHelper.merge.simply(arg.target, ...arg.source);
}
