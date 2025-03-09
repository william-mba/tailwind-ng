import { Provider } from "@angular/core";
import { BUTTON_GROUP_CONFIG, Str } from "@tailwind-ng/core";

const CLASS_NAME = () => {
  const className = '*:backdrop-blur-none *:focus:outline-0 *:ring-0 *:rounded-none *:text-sm backdrop-blur-xs dark:divide-gray-700 dark:ring-gray-700 divide-gray-300 divide-x inline-flex isolate overflow-hidden ring-1 ring-gray-300 rounded-md shadow-sm w-fit';
  return className;
};

/**
 * Button group component config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideButtonGroup(className = ''): Provider {
  return {
    provide: BUTTON_GROUP_CONFIG,
    useValue: className.length < 3 ? CLASS_NAME() : Str.resolve([CLASS_NAME().split(' '), (className).split(' ')]).join(' ')
  }
}
