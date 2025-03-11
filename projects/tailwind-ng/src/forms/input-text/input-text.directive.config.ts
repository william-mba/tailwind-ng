import { Provider } from '@angular/core';
import { INPUT_TEXT_CONFIG, ClassName } from "@tailwind-ng/core";

const DefaultConfig = () => {
  const className = 'placeholder:text-gray-400 placeholder:dark:text-gray-600 backdrop-blur-xs bg-transparent dark:ring-white/15 data-visual-focused:ring-2 data-visual-focused:ring-indigo-600 disabled:bg-black/5 disabled:dark:bg-white/5 focus:border-transparent focus:ring-2 focus:ring-indigo-600 focus:ring-inset invalid:focus:ring-red-600/60 invalid:ring-red-600/60 leading-6 outline-none px-3 py-1.5 ring-1 ring-black/15 ring-inset rounded-md text-sm w-full';
  return className;
}

/**
 * @TailwindNG InputText config provider.
 */
export function provideInputText(className = ''): Provider {
  return {
    provide: INPUT_TEXT_CONFIG,
    useValue: className.length < 3 ? DefaultConfig() : ClassName.resolve([DefaultConfig(), (className)])
  };
}
