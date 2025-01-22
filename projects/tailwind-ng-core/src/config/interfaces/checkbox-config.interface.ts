import { ComponentConfig } from "../../types/component-config.type";
import { Modifier } from "../../types/element-config.type";

interface InputConfig extends ComponentConfig {
  checked: Modifier<'checked', InputConfig>;
  forcedColors: Modifier<'forced-colors', InputConfig>;
  indeterminate: Modifier<'indeterminate', InputConfig>;
};

interface ContainerConfig extends ComponentConfig {
  notFirst: Modifier<'*:not-first', ComponentConfig>;
};

export interface CheckboxConfig {
  container: ContainerConfig;
  input: InputConfig;
};
