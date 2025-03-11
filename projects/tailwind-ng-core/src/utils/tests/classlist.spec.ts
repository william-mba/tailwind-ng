import { ClassList, classlist } from '../classlist.util';
import { ClassName } from '../classname.util';

describe('ClassList', () => {
  let classList: ClassList;

  it('should init value', () => {
    const initialValue = 'rounded-md bg-blue-600 px-4 py-2 text-white';
    classList = classlist(initialValue);
    expect(classList.base).toEqual(initialValue);
  });

  it('should set value', () => {
    const value = 'rounded-full p-4';
    classList = classlist().set(value);
    expect(classList.value).toEqual(value);
  });

  it('should merge value', () => {
    let customValue: string | string[] = 'rounded-full p-4 bg-red-600';
    let defaultValue: string | string[] = 'rounded-md bg-blue-600 px-4 py-2 text-white';

    classList = classlist(customValue).set(defaultValue);

    customValue = ClassName.toArray(customValue);
    defaultValue = ClassName.toArray(defaultValue);

    // Value should includes all custom classes
    expect(classList.value.includes(customValue[0])).toBeTrue();
    expect(classList.value.includes(customValue[1])).toBeTrue();
    expect(classList.value.includes(customValue[2])).toBeTrue();

    // Value should not includes default classes overridden by custom classes
    expect(classList.value.includes(defaultValue[0])).toBeFalse();
    expect(classList.value.includes(defaultValue[1])).toBeFalse();
    expect(classList.value.includes(defaultValue[2])).toBeFalse();
    expect(classList.value.includes(defaultValue[3])).toBeFalse();
    expect(classList.value.includes(defaultValue[4])).toBeTrue();
  });

  it('should update value', () => {
    let defaultValue: string | string[] = 'rounded-md bg-blue-600 px-4 py-2 text-white';

    classList = classlist(defaultValue);

    const newValue = 'rounded-lg bg-red-600 p-3';
    classList.update(newValue);

    ClassName.toArray(newValue).forEach((value) => {
      expect(classList.value.includes(value)).toBeTrue();
    });

    defaultValue = ClassName.toArray(defaultValue);

    expect(classList.value.includes(defaultValue[0])).toBeFalse();
    expect(classList.value.includes(defaultValue[1])).toBeFalse();
    expect(classList.value.includes(defaultValue[2])).toBeFalse();
    expect(classList.value.includes(defaultValue[3])).toBeFalse();
    expect(classList.value.includes(defaultValue[4])).toBeTrue();
  });
});
