import { Provider } from "@angular/core";
import { BUTTON_CONFIG, ButtonConfig, Str } from "@tailwind-ng/core";

const BASE = () => {
  const className = 'border-0 inline-flex items-center justify-center shadow-xs text-nowrap select-none cursor-pointer w-fit leading-none transition-colors duration-100 disabled:opacity-50 disabled:cursor-not-allowed';
  return className;
};
const PRIMARY = () => {
  const className = 'text-white bg-blue-600 hover:bg-blue-600/90 outline-0 outline-blue-600 outline-offset-2 focus:outline-1 active:bg-blue-700/90';
  return className;
};
const SECONDARY = () => {
  const className = 'ring-inset ring-1 ring-gray-300 bg-inherit text-gray-800 backdrop-blur-xs dark:bg-inherit dark:text-gray-200 dark:ring-gray-700/90 hover:bg-gray-300/30 hover:dark:bg-gray-700/30 outline-0 outline-gray-500/80 focus:ring-0 focus:outline-1 active:bg-gray-300/60 active:dark:bg-gray-700/60';
  return className;
};
const TONAL = () => {
  const className = 'text-blue-500 bg-blue-600/10 hover:bg-blue-600/15 backdrop-blur-xs active:bg-blue-600/25 outline-0 outline-blue-500/80 focus:outline-1';
  return className;
};
const TEXT = () => {
  const className = 'shadow-none text-gray-700 dark:text-gray-300 hover:text-gray-900 hover:dark:text-gray-100 active:outline-0 focus:border-dotted focus:outline-1 focus:outline-gray-500/80';
  return className;
};
const FAB = () => {
  const className = 'shadow-lg';
  return className;
};

const DefaultConfig: ButtonConfig = {
  primary: `${BASE()} ${PRIMARY()}`,
  secondary: `${BASE()} ${SECONDARY()}`,
  tonal: `${BASE()} ${TONAL()}`,
  text: `${BASE()} ${TEXT()}`,
  fab: FAB()
};

/**
 * Button config provider
 * @param customization The custom config
 * @returns The configured provider
 */
export function provideButton(customization?: Partial<ButtonConfig>): Provider {
  const mergedConfig = DefaultConfig;
  if (customization) {
    for (const prop in customization) {
      const className = Str.resolve([DefaultConfig[prop as keyof ButtonConfig].split(' '), (prop).split(' ')]).join(' ')
      mergedConfig[prop as keyof ButtonConfig] = className;
    }
  }
  return {
    provide: BUTTON_CONFIG,
    useValue: !customization ? DefaultConfig : mergedConfig
  }
}
