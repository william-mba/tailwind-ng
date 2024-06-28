import { BaseConfig } from "../../configs/base.config";

// Base config
export type DropdownBaseConfig = Partial<BaseConfig>;

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


/**Dropdown content config
 * @package ngx-twcss
 */
export type DropdownContentConfig = Partial<DropdownBaseConfig>

export const DropdownContentConfig: DropdownContentConfig = {
  borderWidth: 'border',
  borderRadius: 'rounded-md',
  theme: {
    light: {
      bgColor: 'bg-neutral-50',
      borderColor: 'border-neutral-200'
    },
    dark: {
      bgColor: 'dark:bg-neutral-900',
      borderColor: 'dark:border-neutral-700'
    }
  },
  extend: {
    zIndex: 'z-50',
    marginTop: 'mt-4',
    paddingY: 'py-1',
    width: 'min-w-full'
  },
  position: 'absolute'
}


/**Dropdown item config
 * @package ngx-twcss
 */
export type DropdownItemConfig = Partial<DropdownBaseConfig>

export const DropdownItemConfig: DropdownItemConfig = {
  textAlign: 'text-start',
  width: 'w-full',
  borderRadius: 'rounded-none',
  borderWidth: 'border-0',
  display: 'block',
  theme: {
    light: {
      bgColor: 'bg-neutral-100',
      borderColor: 'border-neutral-200',
      hover: {
        bgColor: 'hover:bg-neutral-200'
      }
    },
    dark: {
      bgColor: 'dark:bg-neutral-800',
      borderColor: 'dark:border-neutral-700',
      hover: {
        bgColor: 'dark:hover:bg-neutral-700'
      }
    }
  }
}

/**Dropdown container config
 * @package ngx-twcss
 */
export type DropdownContainerConfig = Partial<DropdownBaseConfig>;

export const DropdownContainerConfig: DropdownContainerConfig = {
  ...DropdownBaseConfig,
  position: 'relative',
  extend: {
    cursor: 'hover:cursor-pointer'
  }
};

/**Dropdown config key
 * @package ngx-twcss
 */
export const DropdownConfigKey = 'DropdownConfigKey';

/**Dropdown config
 * @package ngx-twcss
 */
export type DropdownConfig = {
  container: Partial<DropdownContainerConfig>,
  content: Partial<DropdownContentConfig>,
  item: Partial<DropdownItemConfig>
}

export const DropdownConfig: DropdownConfig = {
  container: DropdownContainerConfig,
  content: DropdownContentConfig,
  item: DropdownItemConfig
}
