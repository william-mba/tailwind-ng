import { Provider } from "@angular/core";
import { BADGE_CONFIG, Str } from "@tailwind-ng/core";

const DefaultConfig = () => {
  const className = 'inline-flex gap-1 items-center justify-center text-xs font-medium';
  return className;
};

/**
 * Badge component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideBadge(className = ''): Provider {
  return {
    provide: BADGE_CONFIG,
    useValue: className.length < 3 ? DefaultConfig() : Str.resolve([DefaultConfig(), (className)])
  }
}
