import { Config } from "../../core/types/config";

// Base config
export type DropdownBaseConfig = Partial<Config>;

export const DropdownBaseConfig: DropdownBaseConfig = {
  textWrap: 'text-nowrap',
  userSelect: 'select-none',
  borderWidth: 'border',
  display: {
    type: 'inline-flex',
    alignItem: 'items-center',
    justifyContent: 'justify-center',
    gap: 'gap-1.5'
  },
  borderRadius: 'rounded-md',
  fontWeight: 'font-semibold',
  theme: {
    light: {
      textColor: 'text-black',
      bgColor: 'bg-neutral-100',
      borderColor: 'border-neutral-200',
      hover: {
        bgColor: 'hover:bg-neutral-200'
      },
      focus: {
        borderColor: 'focus:border-neutral-400'
      }
    },
    dark: {
      textColor: 'dark:text-white',
      bgColor: 'dark:bg-neutral-800',
      borderColor: 'dark:border-neutral-700',
      hover: {
        bgColor: 'dark:hover:bg-neutral-700'
      },
      focus: {
        borderColor: 'dark:focus:border-neutral-500'
      }
    }
  }
};

/** Dropdown container config */
export type DropdownContainerConfig = Partial<DropdownBaseConfig>
export const DropdownContainerConfig: DropdownContainerConfig = {
  padding: 'py-1',
  zIndex: 'z-10',
  width: 'min-w-full',
  position: {
    type: 'absolute',
    right: 'right-0',
    top: 'top-12'
  },
  borderWidth: 'border',
  borderRadius: 'rounded-md',
  theme: {
    light: {
      bgColor: 'bg-white',
      borderColor: 'border-neutral-200'
    },
    dark: {
      bgColor: 'dark:bg-neutral-800',
      borderColor: 'dark:border-neutral-700'
    }
  }
}

/** Dropdown content config */
export type DropdownContentConfig = Partial<DropdownBaseConfig>
export const DropdownContentConfig: DropdownContentConfig = {
  display: 'grid',
  textAlign: 'text-start',
  extend: {
    child: '*:justify-self-stretch',
    childOfChild: '*:*:w-full'
  }
}

/** Dropdown config key */
export const DropdownConfigKey = 'DropdownConfigKey';

/** Dropdown config */
export type DropdownConfig = {
  container: Partial<DropdownContainerConfig>,
  content: Partial<DropdownContentConfig>
}

export const DropdownConfig: DropdownConfig = {
  container: DropdownContainerConfig,
  content: DropdownContentConfig
}
