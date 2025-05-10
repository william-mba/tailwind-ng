import { EnterKey, isEnter } from './is-enter';
import { SpaceKey, isSpace } from './is-space';

export type EnterOrSpaceKey = EnterKey | SpaceKey;
export function isEnterOrSpace(
	key: EnterOrSpaceKey | (string & {}),
): key is EnterOrSpaceKey {
	return isEnter(key) || isSpace(key);
}
