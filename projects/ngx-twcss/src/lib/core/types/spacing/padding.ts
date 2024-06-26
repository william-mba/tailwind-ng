
export type Padding = Partial<{
  x: PaddingX
  y: PaddingY
  top: PaddingTop
  right: PaddingRight
  bottom: PaddingBottom
  left: PaddingLeft
}> | PaddingSize | PaddingX | PaddingY;

export type PaddingRight =
  | 'pr-0'
  | 'pr-0.5'
  | 'pr-1'
  | 'pr-1.5'
  | 'pr-2'
  | 'pr-2.5'
  | 'pr-3'
  | 'pr-3.5'
  | 'pr-4'
  | 'pr-5'
  | 'pr-6'
  | 'pr-7'
  | 'pr-8'
  | 'pr-9'
  | 'pr-10'
  | 'pr-11'
  | 'pr-12'
  | 'pr-14'
  | 'pr-16'
  | 'pr-20'
  | 'pr-24'
  | 'pr-28'
  | 'pr-32'
  | 'pr-36'
  | 'pr-40'
  | 'pr-48'
  | 'pr-56'
  | 'pr-64'
  | 'pr-72'
  | 'pr-96'

export type PaddingLeft =
  | 'pl-0'
  | 'pl-0.5'
  | 'pl-1'
  | 'pl-1.5'
  | 'pl-2'
  | 'pl-2.5'
  | 'pl-3'
  | 'pl-3.5'
  | 'pl-4'
  | 'pl-5'
  | 'pl-6'
  | 'pl-7'
  | 'pl-8'
  | 'pl-9'
  | 'pl-10'
  | 'pl-11'
  | 'pl-12'
  | 'pl-14'
  | 'pl-16'
  | 'pl-20'
  | 'pl-24'
  | 'pl-28'
  | 'pl-32'
  | 'pl-36'
  | 'pl-40'
  | 'pl-48'
  | 'pl-56'
  | 'pl-64'
  | 'pl-72'
  | 'pl-96'

export type PaddingTop =
  | 'pt-0'
  | 'pt-0.5'
  | 'pt-1'
  | 'pt-1.5'
  | 'pt-2'
  | 'pt-2.5'
  | 'pt-3'
  | 'pt-3.5'
  | 'pt-4'
  | 'pt-5'
  | 'pt-6'
  | 'pt-7'
  | 'pt-8'
  | 'pt-9'
  | 'pt-10'
  | 'pt-11'
  | 'pt-12'
  | 'pt-14'
  | 'pt-16'
  | 'pt-20'
  | 'pt-24'
  | 'pt-28'
  | 'pt-32'
  | 'pt-36'
  | 'pt-40'
  | 'pt-48'
  | 'pt-56'
  | 'pt-64'
  | 'pt-72'
  | 'pt-96'

export type PaddingBottom =
  | 'pb-0'
  | 'pb-0.5'
  | 'pb-1'
  | 'pb-1.5'
  | 'pb-2'
  | 'pb-2.5'
  | 'pb-3'
  | 'pb-3.5'
  | 'pb-4'
  | 'pb-5'
  | 'pb-6'
  | 'pb-7'
  | 'pb-8'
  | 'pb-9'
  | 'pb-10'
  | 'pb-11'
  | 'pb-12'
  | 'pb-14'
  | 'pb-16'
  | 'pb-20'
  | 'pb-24'
  | 'pb-28'
  | 'pb-32'
  | 'pb-36'
  | 'pb-40'
  | 'pb-48'
  | 'pb-56'
  | 'pb-64'
  | 'pb-72'
  | 'pb-96'

export type PaddingX =
  | 'px-0'
  | 'px-0.5'
  | 'px-1'
  | 'px-1.5'
  | 'px-2'
  | 'px-2.5'
  | 'px-3'
  | 'px-3.5'
  | 'px-4'
  | 'px-5'
  | 'px-6'
  | 'px-7'
  | 'px-8'
  | 'px-9'
  | 'px-10'
  | 'px-11'
  | 'px-12'
  | 'px-14'
  | 'px-16'
  | 'px-20'
  | 'px-24'
  | 'px-28'
  | 'px-32'
  | 'px-36'
  | 'px-40'
  | 'px-48'
  | 'px-56'
  | 'px-64'
  | 'px-72'
  | 'px-96'

export type PaddingY =
  | 'py-0'
  | 'py-0.5'
  | 'py-1'
  | 'py-1.5'
  | 'py-2'
  | 'py-2.5'
  | 'py-3'
  | 'py-3.5'
  | 'py-4'
  | 'py-5'
  | 'py-6'
  | 'py-7'
  | 'py-8'
  | 'py-9'
  | 'py-10'
  | 'py-11'
  | 'py-12'
  | 'py-14'
  | 'py-16'
  | 'py-20'
  | 'py-24'
  | 'py-28'
  | 'py-32'
  | 'py-36'
  | 'py-40'
  | 'py-48'
  | 'py-56'
  | 'py-64'
  | 'py-72'
  | 'py-96'

export type PaddingSize =
  | 'p-0'
  | 'p-0.5'
  | 'p-1'
  | 'p-1.5'
  | 'p-2'
  | 'p-2.5'
  | 'p-3'
  | 'p-3.5'
  | 'p-4'
  | 'p-5'
  | 'p-6'
  | 'p-7'
  | 'p-8'
  | 'p-9'
  | 'p-10'
  | 'p-11'
  | 'p-12'
  | 'p-14'
  | 'p-16'
  | 'p-20'
  | 'p-24'
  | 'p-28'
  | 'p-32'
  | 'p-36'
  | 'p-40'
  | 'p-48'
  | 'p-56'
  | 'p-64'
  | 'p-72'
  | 'p-96'
