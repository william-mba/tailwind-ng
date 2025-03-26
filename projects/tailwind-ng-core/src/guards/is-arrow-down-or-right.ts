import { ArrowDownKey, isArrowDown } from './is-arrow-down';
import { ArrowRightKey, isArrowRight } from './is-arrow-right';

export type ArrowDownOrRightKey = ArrowDownKey | ArrowRightKey;
export function isArrowDownOrRight(key: ArrowDownOrRightKey | (string & {})): key is ArrowDownOrRightKey {
	return isArrowDown(key) || isArrowRight(key);
}
