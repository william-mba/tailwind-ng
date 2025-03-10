import { Str } from '../classname.util';

describe('StringHelper', () => {
  it('should resolve values', () => {
    const source = 'bg-blue-600 text-blue-600 ring-blue-600 ring-2 translate-x-0 scale-100 p-3.5';
    const target = 'bg-red-100 text-red-600 text-sm ring-red-600 translate-0 translate-y-0 ring-inherit ring-inset rounded-md scale-y-100 px-3.5 py-2';

    const expectedResult = Str.resolve([target, source]);

    Str.toArray(source).forEach((value) => {
      expect(expectedResult.includes(value)).toBeTrue();
    });

    expect(expectedResult.includes('bg-red-100')).toBeFalse();
    expect(expectedResult.includes('text-red-600')).toBeFalse();
    expect(expectedResult.includes('text-sm')).toBeTrue();
    expect(expectedResult.includes('rounded-md')).toBeTrue();
    expect(expectedResult.includes('ring-red-600')).toBeFalse();
    expect(expectedResult.includes('ring-inherit')).toBeFalse();
    expect(expectedResult.includes('ring-inset')).toBeTrue();
    expect(expectedResult.includes('translate-0')).toBeTrue();
    expect(expectedResult.includes('translate-y-0')).toBeFalse();
    expect(expectedResult.includes('scale-y-100')).toBeFalse();
    expect(expectedResult.includes('px-3.5')).toBeFalse();
    expect(expectedResult.includes('py-2')).toBeFalse();
  });

  it('should convert string to array', () => {
    const value = 'bg-red-600 bg-blue-600 bg-green-600';
    const expectedResult = Str.toArray(value);
    expect(expectedResult).toEqual(['bg-red-600', 'bg-blue-600', 'bg-green-600']);
  });

  it('should resolve values considering classes deletors', () => {
    const defaultValues = 'bg-red-100 text-red-600 text-sm ring-red-600 translate-0 px-3.5 translate-y-0 ring-inherit ring-inset rounded-md scale-y-100 py-2';
    const classesDeletors = 'bg-blue- ring- translate- px-';
    const customValues = 'text-blue-600 ring-2 scale-100';

    let className: string | string[] = Str.resolve([defaultValues, `${classesDeletors} ${customValues}`], { keepClassDeletor: false });

    // Expected classnames
    expect(className.includes('bg-red-100')).toBeTrue(); // Should be included as `bg-blue-` is less specific.
    expect(className.includes('text-red-600')).toBeFalse();
    expect(className.includes('text-sm')).toBeTrue();
    expect(className.includes('ring-red-600')).toBeFalse();
    expect(className.includes('translate-0')).toBeFalse();
    expect(className.includes('px-3.5')).toBeFalse();
    expect(className.includes('translate-y-0')).toBeFalse();
    expect(className.includes('ring-inherit')).toBeFalse();
    expect(className.includes('ring-inset')).toBeFalse();
    expect(className.includes('rounded-md')).toBeTrue();
    expect(className.includes('scale-y-100')).toBeFalse();
    expect(className.includes('py-2')).toBeTrue();

    className = Str.toArray(className);

    // Expected custom values
    Str.toArray(customValues).forEach((value) => {
      expect(className.includes(value)).toBeTrue();
    });

    // Expected classes deletors
    Str.toArray(classesDeletors).forEach((value) => {
      expect(className.includes(value)).toBeFalse();
    });
  });

  it('should keep classes deletor in resolved values', () => {
    const defaultValues = 'bg-red-100 text-red-600 text-sm ring-red-600 translate-0 px-3.5 translate-y-0 ring-inherit ring-inset rounded-md scale-y-100 py-2';
    const customValues = 'bg-blue- text-blue-600 ring- ring-2 translate- scale-100 px-';
    const expectedResult = Str.resolve([defaultValues, customValues], { keepClassDeletor: true });

    // Default values expectations
    expect(expectedResult.includes('bg-red-100')).toBeTrue(); // Should be included as `bg-blue-` is less specific.
    expect(expectedResult.includes('text-red-600')).toBeFalse();
    expect(expectedResult.includes('text-sm')).toBeTrue();
    expect(expectedResult.includes('ring-red-600')).toBeFalse();
    expect(expectedResult.includes('translate-0')).toBeFalse();
    expect(expectedResult.includes('px-3.5')).toBeFalse();
    expect(expectedResult.includes('translate-y-0')).toBeFalse();
    expect(expectedResult.includes('ring-inherit')).toBeFalse();
    expect(expectedResult.includes('ring-inset')).toBeFalse();
    expect(expectedResult.includes('rounded-md')).toBeTrue();
    expect(expectedResult.includes('scale-y-100')).toBeFalse();
    expect(expectedResult.includes('py-2')).toBeTrue();

    // Custom values expectations
    expect(expectedResult.includes('bg-blue-')).toBeTrue();
    expect(expectedResult.includes('text-blue-600')).toBeTrue();
    expect(expectedResult.includes('ring-')).toBeTrue();
    expect(expectedResult.includes('ring-2')).toBeTrue();
    expect(expectedResult.includes('translate-')).toBeTrue();
    expect(expectedResult.includes('scale-100')).toBeTrue();
    expect(expectedResult.includes('px-')).toBeTrue();

  });
});
