export type TabKey = 'Tab';
export function isTab(key: string): key is TabKey {
  return key === 'Tab';
}
