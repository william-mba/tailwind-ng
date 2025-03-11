import { Provider } from "@angular/core";
import { TOGGLE_CONFIG, ClassName } from "@tailwind-ng/core";

const DefaultConfig = () => {
  const className = 'before:absolute before:bg-white before:duration-100 before:ease-in-out before:h-full before:inset-y-0 before:items-center before:justify-center before:left-0 before:pointer-events-none before:rounded-full before:shadow-sm before:w-1/2 bg-gray-200 border-2 border-transparent cursor-pointer dark:bg-gray-900 data-checked:before:translate-x-full data-checked:bg-blue-600 duration-200 focus:outline-2 focus:outline-offset-2 h-6 inline-flex items-center outline-0 outline-blue-600 overflow-hidden relative rounded-full select-none transition-colors w-12';
  return className;
}

/**
 * Provides the Toggle component config.
 */
export function provideToggle(className = ''): Provider {
  return {
    provide: TOGGLE_CONFIG,
    useValue: className.length < 3 ? DefaultConfig() : ClassName.resolve([DefaultConfig(), (className)])
  }
}
