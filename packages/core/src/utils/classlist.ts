import { isHTMLElement } from '../guards'
import { ClassName, ClassNameValue } from './classname'
import { isString } from './type-assertion'

/**
 * @TailwindNG Class list interface.
 */
export interface ClassList {
  /**
   * Returns the current classlist's value.
   */
  (): NonNullable<ClassNameValue>
  /**
   * Sets the classlist's value. If multiple values is provided, they will be merged from right to left.
   * @returns The classlist with it new value.
   */
  set(...value: ClassNameValue[]): ClassList
  /**
   * Updates the classlist value.
   * @param fn The update function that returns the new value to be setted.
   * @param currentValue The current classlist's value passed to the update function.
   */
  update(fn: (currentValue: string) => ClassNameValue): ClassList
  /**
   * Merges multiple classnames to the classlist.
   * @param fn The merge function that returns an array of values to merge from right to left.
   * @param currentValue The current classlist's value passed to the merge function.
   */
  merge(fn: (currentValue: string) => ClassNameValue[]): ClassList
  /**
   * Returns an array representation of the classlist's value
   */
  toArray(): string[]
}

function setClassName(value: ClassNameValue, el?: HTMLElement) {
  if (value && el) {
    el.className = value
  }
}

/**
 * Creates a `ClassList` that can be set, update or merge directly.
 * @param base The base value of the class list.
 * @param el The element on which the classlist changes apply.
 */
export function classlist(base?: ClassNameValue | HTMLElement, el?: HTMLElement): ClassList {
  let _value = ''
  if (isString(base)) {
    _value = base
    if (isHTMLElement(el)) {
      setClassName(_value, el)
    }
  } else if (isHTMLElement(base)) {
    _value = base.className
  }
  const classlist = (): NonNullable<ClassNameValue> => {
    return _value
  }
  // set classlist by merging value from right to left.
  classlist.set = (...value: ClassNameValue[]) => {
    const newValue = ClassName.merge(...value)
    // Set newValue to _value only if newValue is different from current value.
    if (newValue !== _value) {
      _value = newValue
      if (isHTMLElement(base)) {
        setClassName(_value, base)
      } else if (isHTMLElement(el)) {
        setClassName(_value, el)
      }
    }
    return classlist
  }
  classlist.update = (fn: (currentValue: NonNullable<ClassNameValue>) => ClassNameValue) => {
    return classlist.set(fn(_value))
  }
  classlist.merge = (fn: (currentValue: NonNullable<ClassNameValue>) => ClassNameValue[]) => {
    return classlist.set(ClassName.merge(...fn(_value)))
  }
  classlist.toArray = () => ClassName.toArray(_value)
  classlist.toString = () => _value
  return classlist
}
