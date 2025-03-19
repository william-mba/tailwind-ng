import { Provider } from '@angular/core';
import { INPUT_TEXT_CONFIG, InputConfig, configMerge } from "@tailwind-ng/core";

const DefaultConfig = (): InputConfig => {
  const className = 'placeholder-shown:text-gray-500 backdrop-blur-xs bg-transparent data-visual-focused:ring-2 data-visual-focused:ring-indigo-600 disabled:bg-gray-50 disabled:dark:bg-gray-50/5 focus:border-transparent focus:z-10 focus:ring-2 focus:ring-indigo-600 invalid:focus:ring-red-600/60 invalid:ring-red-600/60 leading-6 outline-none focus:ring-inset ring-1 ring-gray-300 dark:ring-gray-700 rounded-md w-full sm:w-80';
  return {
    className,
    xs: XS(),
    sm: SM(),
    md: MD(),
    lg: LG(),
    xl: XL()
  };
}

const XS = () => {
  const className = 'px-2 py-1 text-sm placeholder:text-xs';
  return className;
}
const SM = () => {
  const className = 'px-3 py-1.5 text-sm placeholder:text-sm';
  return className;
}
const MD = () => {
  const className = 'px-4 py-2 text-base placeholder:text-base';
  return className;
}
const LG = () => {
  const className = 'px-5 py-2.5 text-base placeholder:text-base';
  return className;
}
const XL = () => {
  const className = 'px-6 py-3 text-lg placeholder:text-lg';
  return className;
}

/**
 * @TailwindNG InputText config provider.
 */
export function provideInputText(customization?: InputConfig): Provider {
  return {
    provide: INPUT_TEXT_CONFIG,
    useValue: !customization ? DefaultConfig() : configMerge([DefaultConfig(), customization])
  };
}
