type SpaceKey = ' ';
export function isSpaceKey(key: string): key is SpaceKey {
  return key === ' ';
}

type EnterKey = 'Enter';
export function isEnterKey(key: string): key is EnterKey {
  return key === 'Enter';
}

type EscapeKey = 'Escape' | 'Esc';
export function isEscapeKey(key: string): key is EscapeKey {
  return key === 'Escape' || key === 'Esc';
}

type EnterOrSpaceKey = EnterKey | SpaceKey;
export function isEnterOrSpaceKey(key: EnterOrSpaceKey | string & {}): key is EnterOrSpaceKey {
  return isEnterKey(key) || isSpaceKey(key);
}

type ArrowUpKey = 'ArrowUp';
export function isArrowUpKey(key: ArrowUpKey | string & {}): key is ArrowUpKey {
  return key === 'ArrowUp';
}

type ArrowDownKey = 'ArrowDown';
export function isArrowDownKey(key: ArrowDownKey | string & {}): key is ArrowDownKey {
  return key === 'ArrowDown';
}

export function isArrowUpOrDownKey(key: ArrowUpKey | ArrowDownKey | string & {}): key is ArrowUpKey | ArrowDownKey {
  return isArrowUpKey(key) || isArrowDownKey(key);
}

type ArrowLeftKey = 'ArrowLeft';
export function isArrowLeftKey(key: ArrowLeftKey | string & {}): key is ArrowLeftKey {
  return key === 'ArrowLeft';
}

type ArrowRightKey = 'ArrowRight';
export function isArrowRightKey(key: ArrowRightKey | string & {}): key is ArrowRightKey {
  return key === 'ArrowRight';
}

type ArrowDownOrRightKey = ArrowDownKey | ArrowRightKey;
export function isArrowDownOrRightKey(key: ArrowDownOrRightKey | string & {}): key is ArrowDownOrRightKey {
  return isArrowDownKey(key) || isArrowRightKey(key);
}

type ArrowUpOrLeftKey = ArrowUpKey | ArrowLeftKey;
export function isArrowUpOrLeftKey(key: ArrowUpOrLeftKey | string & {}): key is ArrowUpOrLeftKey {
  return isArrowUpKey(key) || isArrowLeftKey(key);
}

type NavigationKey = ArrowUpKey | ArrowDownKey | ArrowLeftKey | ArrowRightKey;
export function isNavigationKey(key: NavigationKey | string & {}): key is NavigationKey {
  return isArrowDownKey(key) || isArrowUpKey(key) || isArrowLeftKey(key) || isArrowRightKey(key);
}

export function isKeyboardEvent(event: Event): event is KeyboardEvent {
  return event instanceof KeyboardEvent && event.key !== undefined;
}

/**
 * Keyboard event key type guard.
 */
export abstract class KBKey {
  static readonly isEnter = isEnterKey;
  static readonly isSpace = isSpaceKey;
  static readonly isEscape = isEscapeKey;
  static readonly isEnterOrSpace = isEnterOrSpaceKey;
  static readonly isArrowUp = isArrowUpKey;
  static readonly isArrowDown = isArrowDownKey;
  static readonly isArrowUpOrDown = isArrowUpOrDownKey;
  static readonly isArrowLeft = isArrowLeftKey;
  static readonly isArrowRight = isArrowRightKey;
  static readonly isNavigation = isNavigationKey;
  static readonly isArrowDownOrRight = isArrowDownOrRightKey;
  static readonly isArrowUpOrLeft = isArrowUpOrLeftKey;
  static readonly isKeyboardEvent = isKeyboardEvent;
}
