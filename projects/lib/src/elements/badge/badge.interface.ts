import { ElementBaseActions, ElementBaseState } from "../../core/bases/element-base.interface";
import { SizeOption } from "../../core/types/size-options.type";

export interface BadgeState extends ElementBaseState<HTMLElement> {
  readonly size?: SizeOption;
}

export interface BadgeActions extends ElementBaseActions {
  setSize(value: SizeOption): void
}

/**
 * @ngxtw Badge
 */
export interface Badge extends BadgeState, BadgeActions { }
