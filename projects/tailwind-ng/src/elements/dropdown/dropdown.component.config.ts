import { Provider } from "@angular/core";
import { DROPDOWN_CONFIG, ClassName } from "@tailwind-ng/core";

const DefaultConfig = () => {
  const className = 'hidden text-start py-1 z-10 min-w-56 select-none overflow-y-auto overscroll-contain text-sm absolute border rounded-md border-gray-200 bg-white shadow-lg cursor-pointer dark:bg-gray-950 dark:border-gray-800 dark:text-gray-100 open:grid open:opacity-100 open:translate-0 open:scale-100 opacity-0 -translate-y-1 starting:open:opacity-0 starting:open:scale-y-90 starting:open:-translate-y-3 origin-top will-change-auto ease-out duration-25 transition-all transition-discrete top-2 right-0';
  return className;
};

/**
 *  Dropdown config provider
 * @param config The custom config
 * @returns The config provider
 */
export function provideDropdown(className = ''): Provider {
  return {
    provide: DROPDOWN_CONFIG,
    useValue: className.length < 3 ? DefaultConfig() : ClassName.resolve([DefaultConfig(), (className)])
  }
};

