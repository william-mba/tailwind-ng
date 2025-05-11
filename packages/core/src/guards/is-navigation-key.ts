import { ArrowDownKey, isArrowDown } from './is-arrow-down'
import { ArrowLeftKey, isArrowLeft } from './is-arrow-left'
import { ArrowRightKey, isArrowRight } from './is-arrow-right'
import { ArrowUpKey, isArrowUp } from './is-arrow-up'

export type NavigationKey =
  | ArrowUpKey
  | ArrowDownKey
  | ArrowLeftKey
  | ArrowRightKey
export function isNavigation(
  key: NavigationKey | (string & {})
): key is NavigationKey {
  return (
    isArrowDown(key) || isArrowUp(key) || isArrowLeft(key) || isArrowRight(key)
  )
}
