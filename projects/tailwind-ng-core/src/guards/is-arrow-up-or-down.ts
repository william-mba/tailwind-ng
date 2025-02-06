import { ArrowDownKey, isArrowDown } from "./is-arrow-down";
import { ArrowUpKey, isArrowUp } from "./is-arrow-up";

export function isArrowUpOrDown(key: ArrowUpKey | ArrowDownKey | string & {}): key is ArrowUpKey | ArrowDownKey {
  return isArrowUp(key) || isArrowDown(key);
}
