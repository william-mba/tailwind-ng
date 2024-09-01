import { BadgeConfig } from "./badge.config";

/**
 * Ngx-twcss Badge
 */
export interface Badge {
  class: string;
  setConfig(config: Partial<BadgeConfig>): void;
}
