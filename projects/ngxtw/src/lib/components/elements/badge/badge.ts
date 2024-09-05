import { BadgeConfig } from "./badge.config";

/**
 * ngxtw Badge
 */
export interface Badge {
  class: string;
  setConfig(config: Partial<BadgeConfig>): void;
}
