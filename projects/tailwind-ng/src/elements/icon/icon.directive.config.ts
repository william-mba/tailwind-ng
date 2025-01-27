import { Provider } from "@angular/core";
import { ICON_CONFIG, mergeConfig, IconConfig, FullyOptional } from "@tailwind-ng/core";

const DefaultConfig = (): FullyOptional<IconConfig> => {
  return {
    source: {
      minus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path fill-rule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" /> </svg>`,
      'check': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clip-rule="evenodd" /> </svg>`,
      'tailwind-ng': `<svg style="width: 20px; height: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.63 23"> <defs> <style> .cls-1 { fill: #fff; } .cls-1, .cls-2, .cls-3, .cls-4 { fill-rule: evenodd; } .cls-2 { fill: #4f46e5; } .cls-3 { fill: #e0f5fe; } .cls-4 { fill: #6b63f1; } </style> </defs> <g id="Layer_1-2" data-name="Layer_1"> <g> <path class="cls-1" d="M0,3.82c.55,4.73,1.1,9.47,1.65,14.2,3,1.66,6.01,3.32,9.01,4.98,3.06-1.69,6.12-3.39,9.19-5.08.6-4.72,1.19-9.44,1.79-14.16-3.66-1.25-7.32-2.5-10.97-3.75C7.11,1.27,3.55,2.55,0,3.82Z"/> <g> <g> <path class="cls-4" d="M1.41,4.63c.48,4.11.95,8.23,1.43,12.34,2.61,1.44,5.22,2.89,7.83,4.33,2.66-1.47,5.32-2.95,7.98-4.42.52-4.1,1.04-8.21,1.55-12.31-3.18-1.09-6.36-2.17-9.54-3.26-3.09,1.11-6.18,2.21-9.26,3.32Z"/> <path class="cls-2" d="M10.68,21.3h0s0,0,.01,0c0,0,5.32-2.95,7.98-4.42.52-4.1,1.04-8.21,1.55-12.31-3.18-1.09-9.54-3.26-9.54-3.26,0,6.67,0,13.33-.01,20Z"/> </g> <path class="cls-3" d="M8.69,8.33c-2.23,0-3.62,1.12-4.18,3.35.84-1.12,1.81-1.53,2.93-1.25.64.16,1.09.62,1.59,1.13.82.83,1.77,1.8,3.84,1.8,2.23,0,3.62-1.12,4.18-3.35-.84,1.12-1.81,1.53-2.93,1.25-.64-.16-1.09-.62-1.59-1.13-.82-.83-1.77-1.8-3.84-1.8Z"/> </g> </g> </g> </svg>`,
      'exclamation-circle': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-8-5a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5A.75.75 0 0 1 10 5Zm0 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" /> </svg>`,
      'exclamation-triangle': `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"></path></svg>`,
      'x-mark': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" /> </svg>`,
      'chevron-up-down': `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"> <path fill-rule="evenodd" d="M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z" clip-rule="evenodd" /> </svg>`,
    },
    base: {
      focus: {
        border: 'focus:outline',
        outlineWidth: 'focus:outline-2',
        outlineColor: 'focus:outline-gray-500/80',
      }
    },
    xs: {
      size: '*:size-3',
    },
    sm: {
      size: '*:size-4'
    },
    md: {
      size: '*:size-5'
    },
    lg: {
      size: '*:size-6'
    },
    xl: {
      size: '*:size-7'
    }
  }
};

/**
 * Returns the icon config. If customization is provided, it will be merged with the default config.
 */
export const GetIconConfig = (customization?: FullyOptional<IconConfig>): IconConfig => {
  return !customization ? DefaultConfig() as IconConfig : mergeConfig([DefaultConfig(), customization]) as IconConfig;
}

export function provideIcon(customization?: FullyOptional<IconConfig>): Provider {
  return {
    provide: ICON_CONFIG,
    useValue: GetIconConfig(customization)
  }
}
