export function isKeyboardEvent(event: Event): event is KeyboardEvent {
  return event instanceof KeyboardEvent && event.key !== undefined;
}
