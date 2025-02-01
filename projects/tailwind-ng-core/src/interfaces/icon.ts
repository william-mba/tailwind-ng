import { Observable } from "rxjs";
import { IconConfig, IconName } from "../config/interfaces";
import { SizeOption } from "../types/size-options.type";

/**
 * @TailwindNG Icon component interface.
 */
export interface Icon {
  name: IconName;
  size: SizeOption;
  config: Observable<IconConfig>;
}
