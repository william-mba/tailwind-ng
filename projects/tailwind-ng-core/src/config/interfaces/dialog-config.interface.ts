import { ComponentConfig } from "../../types/component-config.type";
import { Modifier } from "../../types/element-config.type";

export interface BackdropConfig extends ComponentConfig {
  inOpen: Modifier<'in-open'>;
  starting: Modifier<'starting', BackdropConfig>;
}

export interface ContainerConfig extends ComponentConfig {
  inOpen: Modifier<'in-open'>;
  starting: Modifier<'starting', ContainerConfig>;
}

export interface DialogConfig {
  scrim: ComponentConfig;
  backdrop: BackdropConfig;
  container: ContainerConfig;
}
