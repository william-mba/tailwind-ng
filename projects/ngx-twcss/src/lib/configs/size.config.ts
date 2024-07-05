import { Sizing } from "../core/types/size";

export const SizeConfig: Sizing = {
  xs: {
    fontSize: 'text-xs',
    padding: 'p-0.5'
  },
  sm: {
    fontSize: 'text-xs',
    padding: {
      x: 'px-2.5',
      y: 'py-1.5'
    }
  },
  md: {
    fontSize: 'text-base',
    padding: {
      x: 'px-5',
      y: 'py-2'
    }
  },
  lg: {
    fontSize: 'text-xl',
    padding: {
      x: 'px-6',
      y: 'py-2.5'
    }
  }
}
