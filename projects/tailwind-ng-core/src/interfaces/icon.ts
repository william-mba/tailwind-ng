import { Observable } from "rxjs";
import { IconConfig, IconKey } from "../config/interfaces";
import { SizeOption } from "../types/size-options.type";

/**
 * @TailwindNG Icon component interface.
 */
export interface Icon {
  key: IconKey;
  size: SizeOption;
  config: Observable<IconConfig>;
}
