import { ElementBaseActions, ElementBaseState } from "../../core/bases/element-base.interface";
import { SizeOption } from "../../core/types/size-options.type";

export interface AvatarState extends ElementBaseState<HTMLElement> {
  readonly size: SizeOption;
}

export interface AvatarActions extends ElementBaseActions {
  setSize(value: SizeOption): void
}

/**
 * @ngxtw Avatar
 */
export interface Avatar extends AvatarState, AvatarActions { }
