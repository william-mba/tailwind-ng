import { AvatarConfig, AvatarSizeOptions } from "./avatar.config";

/**
 * Ngx-twcss Avatar
 */
export interface Avatar {
  class: string;
  size: keyof AvatarSizeOptions;
  setConfig(config: Partial<AvatarConfig>): void;
}
