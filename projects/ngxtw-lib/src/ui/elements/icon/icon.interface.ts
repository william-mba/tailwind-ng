import { ElementBaseEvents, ElementBaseState } from "@core/directives/element-base.interface";
import { SizeOption } from "@core/types/size-options.type";
import { IconKey, IconSourceOption } from "./icon.config";

export interface IconState extends ElementBaseState<HTMLElement> {
  readonly key: IconKey;
  readonly size: SizeOption;
  readonly source: IconSourceOption;
}

export interface IconActions extends ElementBaseEvents {
  setKey(value: IconKey): void;
  setSize(value: SizeOption): void;
  setSource(value: IconSourceOption): void;
}

/**
 * @ngxtw Icon component
 */
export interface Icon extends IconState, IconActions { }
