import { ClassList, classlist } from '../classlist';

describe('ClassList', () => {
	let classList: ClassList;

	it('should initialize', () => {
		const initialValue = 'rounded-md bg-blue-600 px-4 py-2 text-white';
		classList = classlist(initialValue);
		expect(classList()).toBe(initialValue);
	});

	it('should set value', () => {
		const value = 'rounded-full p-4';
		classList = classlist();
		classList.set(value);
		expect(classList()).toBe(value);
	});

	it('should update value', () => {
		const initialValue = 'rounded-full p-4 bg-red-600';
		const newValue = 'rounded-md bg-blue-600 px-4 py-2 text-white';

		classList = classlist(initialValue);
		classList.update(() => newValue);

		const value = classList.toArray();

		// Value should includes all custom classes
		expect(value.includes('p-4')).toBeFalsy();
		expect(value.includes('rounded-full')).toBeFalsy();
		expect(value.includes('bg-red-600')).toBeFalsy();

		// Value should not includes default classes overridden by custom classes
		expect(value.includes('rounded-md')).toBeTruthy();
		expect(value.includes('bg-blue-600')).toBeTruthy();
		expect(value.includes('px-4')).toBeTruthy();
		expect(value.includes('py-2')).toBeTruthy();
		expect(value.includes('text-white')).toBeTruthy();
	});

	it('should merge value', () => {
		classList = classlist('rounded-md bg-blue-600 px-4 py-2 text-white');
		classList.merge((value) => [value, 'rounded-lg bg-red-600 p-3']);

		const value = classList.toArray();

		// Initial values expectations
		expect(value.includes('rounded-md')).toBeFalsy();
		expect(value.includes('bg-blue-600')).toBeFalsy();
		expect(value.includes('px-4')).toBeFalsy();
		expect(value.includes('py-2')).toBeFalsy();
		expect(value.includes('text-white')).toBeTruthy();

		// Merged values expectations
		expect(value.includes('rounded-lg')).toBeTruthy();
		expect(value.includes('bg-red-600')).toBeTruthy();
		expect(value.includes('p-3')).toBeTruthy();
	});
});
