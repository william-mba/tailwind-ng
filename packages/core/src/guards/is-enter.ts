export type EnterKey = 'Enter';
export function isEnter(key: string): key is EnterKey {
	return key === 'Enter';
}
