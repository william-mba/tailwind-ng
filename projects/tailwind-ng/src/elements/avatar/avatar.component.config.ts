import { Provider } from "@angular/core";
import { AVATAR_CONFIG, Str } from "@tailwind-ng/core";

const CLASS_NAME = () => {
  const className = 'flex items-center justify-center relative rounded-full';
  return className;
};

/**
 * Avatar config provider
 * @param config The custom config
 * @returns The configured provider
 */
export function provideAvatar(className = ''): Provider {
  return {
    provide: AVATAR_CONFIG,
    useValue: className.length < 3 ? CLASS_NAME() : Str.resolve([CLASS_NAME().split(' '), (className).split(' ')]).join(' ')
  }
}
