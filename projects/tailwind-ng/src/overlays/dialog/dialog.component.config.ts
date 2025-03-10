import { Provider } from '@angular/core';
import { configMerge, DIALOG_CONFIG, DialogConfig } from '@tailwind-ng/core';

const BASE = () => {
  const className = 'transition-all transition-discrete duration-200';
  return className;
};
const BACKDROP = () => {
  const className = 'open:backdrop-blur-xs open:bg-neutral-500/50 open:dark:bg-gray-500/50';
  return className;
};
const SCRIM = () => {
  const className = 'grid opacity-0 invisible open:visible open:opacity-100 p-4 inset-0 fixed content-end justify-center sm:content-center';
  return className;
};
const CONTAINER = () => {
  const className = 'gap-9 w-full h-fit relative rounded-lg overflow-hidden text-left shadow-lg bg-white opacity-0 place-self-center dark:bg-gray-900 starting:opacity-0 in-open:opacity-100 grid p-5 sm:max-w-md';
  return className;
};

const DefaultConfig = (): DialogConfig => {
  return {
    scrim: `${BASE()} ${SCRIM()}`,
    container: `${BASE()} ${CONTAINER()}`,
    backdrop: BACKDROP(),
  }
};

/**
 * @TailwindNG Dialog config provider
 * @returns The configured provider
 */
export function provideDialog(customization?: Partial<DialogConfig>): Provider {
  return {
    provide: DIALOG_CONFIG,
    useValue: !customization ? DefaultConfig() : configMerge([DefaultConfig(), customization])
  }
};
