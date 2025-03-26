import { ClassName } from '../classname';

describe('StringHelper', () => {
	it('should resolve values', () => {
		const source =
			'bg-blue-600 text-blue-600 ring-blue-600 ring-2 translate-x-0 scale-100 p-3.5';
		const target =
			'bg-red-100 text-red-600 text-sm ring-red-600 translate-0 translate-y-0 ring-inherit ring-inset rounded-md scale-y-100 px-3.5 py-2';

		const result = ClassName.toArray(ClassName.resolve([target, source]));

		ClassName.toArray(source).forEach((value) => {
			expect(result.includes(value)).toBeTrue();
		});

		expect(result.includes('bg-red-100')).toBeFalse();
		expect(result.includes('text-red-600')).toBeFalse();
		expect(result.includes('text-sm')).toBeTrue();
		expect(result.includes('rounded-md')).toBeTrue();
		expect(result.includes('ring-red-600')).toBeFalse();
		expect(result.includes('ring-inherit')).toBeFalse();
		expect(result.includes('ring-inset')).toBeTrue();
		expect(result.includes('translate-0')).toBeTrue();
		expect(result.includes('translate-y-0')).toBeFalse();
		expect(result.includes('scale-y-100')).toBeFalse();
		expect(result.includes('px-3.5')).toBeFalse();
		expect(result.includes('py-2')).toBeFalse();
	});

	it('should convert string to array', () => {
		const value = 'bg-red-600 bg-blue-600 bg-green-600';
		const result = ClassName.toArray(value);
		expect(result).toEqual(['bg-red-600', 'bg-blue-600', 'bg-green-600']);
	});

	it('should resolve values considering classes deletors', () => {
		const defaultValues =
			'bg-red-100 text-red-600 text-sm ring-red-600 translate-0 px-3.5 translate-y-0 ring-inherit ring-inset rounded-md scale-y-100 py-2';
		const classesDeletors = 'bg-blue- ring- translate- px-';
		const customValues = 'text-blue-600 ring-2 scale-100';

		const result = ClassName.toArray(
			ClassName.resolve([defaultValues, `${classesDeletors} ${customValues}`], {
				keepClassDeletor: false,
			}),
		);

		// Expected classnames
		expect(result.includes('bg-red-100')).toBeTrue(); // Should be included as `bg-blue-` is less specific.
		expect(result.includes('text-red-600')).toBeFalse();
		expect(result.includes('text-sm')).toBeTrue();
		expect(result.includes('ring-red-600')).toBeFalse();
		expect(result.includes('translate-0')).toBeFalse();
		expect(result.includes('px-3.5')).toBeFalse();
		expect(result.includes('translate-y-0')).toBeFalse();
		expect(result.includes('ring-inherit')).toBeFalse();
		expect(result.includes('ring-inset')).toBeFalse();
		expect(result.includes('rounded-md')).toBeTrue();
		expect(result.includes('scale-y-100')).toBeFalse();
		expect(result.includes('py-2')).toBeTrue();

		// Expected custom values
		ClassName.toArray(customValues).forEach((value) => {
			expect(result.includes(value)).toBeTrue();
		});

		// Expected classes deletors
		ClassName.toArray(classesDeletors).forEach((value) => {
			expect(result.includes(value)).toBeFalse();
		});
	});

	it('should keep classes deletor in resolved values', () => {
		const defaultValues =
			'bg-red-100 text-red-600 text-sm ring-red-600 translate-0 px-3.5 translate-y-0 ring-inherit ring-inset rounded-md scale-y-100 py-2';
		const customValues =
			'bg-blue- text-blue-600 ring- ring-2 translate- scale-100 px-';
		const expectedResult = ClassName.resolve([defaultValues, customValues], {
			keepClassDeletor: true,
		});

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
