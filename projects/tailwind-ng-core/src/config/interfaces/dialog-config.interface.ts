import { ComponentConfig } from "../../types/component-config.type";
import { Modifier } from "../../types/element-config.type";

export interface DialogConfig {
  scrim: ComponentConfig & {
    open: Modifier<'open'>;
  };
  backdrop: ComponentConfig & {
    open: Modifier<'open'>;
  };
  container: ComponentConfig & {
    inOpen: Modifier<'in-open'>;
    starting: Modifier<'starting'>;
  };
}
