import { StringHelper } from '../string.helper';

describe('StringHelper', () => {
  it('should resolve strings', () => {
    const source = ['bg-blue-600', 'text-blue-600', 'ring-blue-600', 'ring-2', 'translate-x-0', 'scale-100'];
    const target = ['bg-red-100', 'text-red-600', 'ring-red-600', 'text-sm', 'shadow-md', 'ring-inset', 'translate-0', 'scale-y-100', 'translate-y-0'];

    const result = StringHelper.resolve(target, source);

    source.forEach((value) => {
      expect(result.includes(value)).toBeTrue();
    });

    expect(result.includes(target[0])).toBeFalse();
    expect(result.includes(target[1])).toBeFalse();
    expect(result.includes(target[2])).toBeFalse();
    expect(result.includes(target[3])).toBeTrue();
    expect(result.includes(target[4])).toBeTrue();
    expect(result.includes(target[5])).toBeTrue();
    expect(result.includes(target[6])).toBeTrue();
    expect(result.includes(target[7])).toBeTrue();
    expect(result.includes(target[8])).toBeTrue();
  });

  it('should convert string to array', () => {
    const value = 'bg-red-600 bg-blue-600 bg-green-600';
    const result = StringHelper.toArray(value);
    expect(result).toEqual(['bg-red-600', 'bg-blue-600', 'bg-green-600']);
  });
});
