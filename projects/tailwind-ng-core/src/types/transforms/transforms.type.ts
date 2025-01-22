type Sizing = '0' | '50' | '75' | '90' | '95' | '100' | '105' | '110' | '125' | '150' | '200'

export type TransformOrigin =
  | 'origin-center'
  | 'origin-top'
  | 'origin-top-right'
  | 'origin-right'
  | 'origin-bottom-right'
  | 'origin-bottom'
  | 'origin-bottom-left'
  | 'origin-left'
  | 'origin-top-left'

export type Scale =
  | `scale-3d`
  | `scale-none`
  | `scale-${Sizing}`
  | `scale-x-${Sizing}`
  | `scale-y-${Sizing}`
  | `-scale-${Sizing}`
  | `-scale-x-${Sizing}`
  | `-scale-y-${Sizing}`
