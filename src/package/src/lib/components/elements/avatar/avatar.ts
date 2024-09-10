import { AvatarConfig, AvatarSizeOptions } from "./avatar.config";

/**
 * ngxtw Avatar
 */
export interface Avatar {
  class: string;
  size: keyof AvatarSizeOptions;
  setConfig(config: Partial<AvatarConfig>): void;
}
