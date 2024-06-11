import { Width } from './../../core/types/sizing/width';
import { TextAlign } from './../../core/types/typography/text-align';
import { DivideWidth } from './../../core/types/borders/divide-width';
import { Position } from './../../core/types/layout/position';
import { BaseConfig } from "../../configs/base.config";
import { BorderWidth } from "../../core/types/borders/border-width";
import { UserSelect } from "../../core/types/interactivity/user-select";
import { TextWrap } from "../../core/types/typography/text-wrap";
import { Display } from '../../core/types/layout/display';

export const DropdownConfigKey = 'DropdownConfigKey';

export type DropdownBaseConfig = Partial<BaseConfig> & {
  textWrap: TextWrap,
  userSelect: UserSelect,
  borderWidth: BorderWidth
};

export const DropdownBaseConfig: DropdownBaseConfig = {
  textWrap: 'text-nowrap',
  userSelect: 'select-none',
  borderWidth: 'border',
  display: {
    type: 'inline-flex',
    justifyContent: 'justify-center',
    alignItem: 'items-center',
    gap: 'gap-1.5'
  },
  borderRadius: 'rounded-md',
  fontWeight: 'font-semibold',
  theme: {
    light: {
      textColor: 'text-black',
      bgColor: 'bg-slate-100',
      borderColor: 'border-slate-200',
      hover: {
        bgColor: 'hover:bg-slate-200'
      },
      focus: {
        borderColor: 'focus:border-slate-400'
      }
    },
    dark: {
      textColor: 'dark:text-white',
      bgColor: 'dark:bg-slate-800',
      borderColor: 'dark:border-slate-700',
      hover: {
        bgColor: 'dark:hover:bg-slate-700'
      },
      focus: {
        borderColor: 'dark:focus:border-slate-500'
      }
    }
  }
};

export type DropdownContainerConfig = Partial<DropdownBaseConfig> & {
  group: string,
  position: Position
};

export const DropdownContainerConfig: DropdownContainerConfig = {
  ...DropdownBaseConfig,
  group: 'group',
  position: 'relative'
};

export type DropdownContainerLabelConfig = Partial<Display>;

export const DropdownContainerLabelConfig: DropdownContainerLabelConfig = {
  type: 'inline-flex',
  gap: 'gap-1.5'
};

export type DropdownConfig = Partial<BaseConfig> & {
  visibility: 'visible' | 'invisible' | 'collapse',
  position: Position,
  divideWidth: DivideWidth,
}

export const DropdownConfig: DropdownConfig = {
  visibility: 'invisible',
  position: {
    type: 'absolute',
    placement: {
      top: 'top-8',
      right: 'right-0'
    }
  },
  divideWidth: 'divide-y',
  theme: {
    divideColor: 'dark:divide-slate-800'
  },
  extra: {
    groupFocus: 'group-focus:visible',
    marginTop: 'mt-4',
    paddingY: 'py-1',
    zIndex: 'z-10',
    width: 'min-w-full',
    children: {
      display: '*:block'
    }
  }
}

export type DropdownItemConfig = Partial<DropdownBaseConfig> & {
  textAlign: TextAlign,
  width: Width
}

export const DropdownItemConfig: DropdownItemConfig = {
  ...DropdownBaseConfig,
  textAlign: 'text-start',
  width: 'w-full',
  borderRadius: 'rounded-none',
  borderWidth: 'border-0',
  display: {
    type: 'block'
  }
}
