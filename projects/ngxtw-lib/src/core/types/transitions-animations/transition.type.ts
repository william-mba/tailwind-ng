import { TransitionDuration } from "./transition-duration.type";
import { TransitionProperty } from "./transition-property.type";
import { TransitionTimingFunction } from "./transition-timing-function.type";

export interface Transition {
  property?: TransitionProperty;
  duration?: TransitionDuration;
  timing?: TransitionTimingFunction;
}
