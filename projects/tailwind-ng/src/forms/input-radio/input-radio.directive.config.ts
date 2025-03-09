import { Provider } from '@angular/core';
import { INPUT_RADIO_CONFIG, Str } from "@tailwind-ng/core";

const CLASS_NAME = () => {
  const className = 'appearance-none border-1 border-black/20 checked:before:absolute checked:before:bg-white checked:before:inset-1 checked:before:rounded-full checked:bg-blue-600 checked:border-blue-600 dark:border-white/20 disabled:bg-black/5 disabled:dark:bg-white/5 focus:outline-2 focus:outline-blue-600 focus:outline-offset-2 forced-colors:appearance-auto forced-colors:before:hidden relative rounded-full size-4';
  return className;
};


/**
 * Provides the input radio config.
 */
export function provideInputRadio(className = ''): Provider {
  return {
    provide: INPUT_RADIO_CONFIG,
    useValue: className.length < 3 ? CLASS_NAME() : Str.resolve([CLASS_NAME().split(' '), (className).split(' ')]).join(' ')
  };
}
