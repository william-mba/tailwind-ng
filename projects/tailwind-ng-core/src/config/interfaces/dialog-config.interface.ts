import { ComponentConfig } from "../../types/component-config.type";
import { Variant } from "../../types/element-config.type";

export interface DialogConfig {
  scrim: ComponentConfig & {
    open: Variant<'open'>;
  };
  container: ComponentConfig & {
    inOpen: Variant<'in-open'>;
    starting: Variant<'starting'>;
  };
  backdrop: Variant<'open', ComponentConfig>;
}
