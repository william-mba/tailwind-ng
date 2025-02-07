type EventOrigin = "self" | "parent" | "child"
export interface CheckboxToggleOptions {
  /**
   * The origin of the event. Default is `'self'`.
   */
  origin?: EventOrigin
  /**
   * The event that triggered the toggle.
   */
  event?: Event
}
