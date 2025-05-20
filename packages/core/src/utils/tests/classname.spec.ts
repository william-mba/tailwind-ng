import { classNameMerge, stringToArray } from '../classname'

describe('ClassName', () => {
  it('it should include all classes of the rightmost source value after merging', () => {
    const result = classNameMerge(
      'bg-blue-600 text-blue-600',
      'ring-blue-600 ring-2 ring-inset',
      'translate-x-0 scale-100 p-3.5'
    )

    stringToArray('translate-x-0 scale-100 p-3.5').forEach(value => {
      expect(result.includes(value)).toBeTruthy()
    })
  })

  it('should replace target classes that partially or fully match source classes', () => {
    const target =
      'bg-red-100 \
text-red-600 text-sm \
px-3.5 py-2 \
translate-0 translate-y-0 scale-y-100 \
ring-red-600 ring-inherit ring-inset rounded-md'

    const source =
      'bg-blue-600 \
text-blue-600 \
ring-blue-600 ring-2 ring-inset \
translate-x-0 scale-100 p-3.5'

    const result = stringToArray(classNameMerge(target, source))

    // expect that all classes in source are properly added in target
    stringToArray(source).forEach(value => {
      expect(result.includes(value)).toBeTruthy()
    })

    expect(result.includes('bg-red-100')).toBeFalsy()
    expect(result.includes('text-red-600')).toBeFalsy()
    expect(result.includes('text-sm')).toBeTruthy()
    expect(result.includes('rounded-md')).toBeTruthy()
    expect(result.includes('ring-red-600')).toBeFalsy()
    expect(result.includes('ring-inherit')).toBeFalsy()
    expect(result.includes('ring-inset')).toBeTruthy()
    expect(result.includes('translate-0')).toBeTruthy()
    expect(result.includes('translate-y-0')).toBeFalsy()
    expect(result.includes('scale-y-100')).toBeFalsy()
    expect(result.includes('px-3.5')).toBeFalsy()
    expect(result.includes('py-2')).toBeFalsy()
  })

  it('should merge values', () => {
    const result = stringToArray(
      classNameMerge('grid w-max gap-2', 'bg-white', 'bg-gray-200 hover:bg-gray-200')
    )

    expect(result.includes('grid')).toBeTruthy()
    expect(result.includes('w-max')).toBeTruthy()
    expect(result.includes('gap-2')).toBeTruthy()
    expect(result.includes('bg-white')).toBeFalsy()
    expect(result.includes('bg-gray-200')).toBeTruthy()
    expect(result.includes('hover:bg-gray-200')).toBeTruthy()
  })

  it('should merge values', () => {
    const result = stringToArray(
      classNameMerge(
        'bg-transparent border-white',
        'bg-white',
        'bg-gray-200 hover:bg-gray-200',
        'border-red-600'
      )
    )

    expect(result.includes('bg-transparent')).toBeFalsy()
    expect(result.includes('border-white')).toBeFalsy()
    expect(result.includes('bg-white')).toBeFalsy()
    expect(result.includes('bg-gray-200')).toBeTruthy()
    expect(result.includes('hover:bg-gray-200')).toBeTruthy()
    expect(result.includes('border-red-600')).toBeTruthy()
  })

  it('should convert string to array', () => {
    const value = 'bg-red-600 bg-blue-600 bg-green-600'
    const result = stringToArray(value)
    expect(result).toEqual(['bg-red-600', 'bg-blue-600', 'bg-green-600'])
  })

  it('should merge values considering classes deletors', () => {
    const defaultValues =
      'bg-red-100 text-red-600 text-sm ring-red-600 translate-0 px-3.5 translate-y-0 ring-inherit ring-inset rounded-md scale-y-100 py-2'
    const classesDeletors = 'bg-blue- ring- translate- px-'
    const customValues = 'text-blue-600 ring-2 scale-100'

    const result = stringToArray(
      classNameMerge(defaultValues, `${classesDeletors} ${customValues}`, {
        keepClassDeletor: false,
      })
    )

    // Expected classnames
    expect(result.includes('bg-red-100')).toBeTruthy() // Should be included as `bg-blue-` is less specific.
    expect(result.includes('text-red-600')).toBeFalsy()
    expect(result.includes('text-sm')).toBeTruthy()
    expect(result.includes('ring-red-600')).toBeFalsy()
    expect(result.includes('translate-0')).toBeFalsy()
    expect(result.includes('px-3.5')).toBeFalsy()
    expect(result.includes('translate-y-0')).toBeFalsy()
    expect(result.includes('ring-inherit')).toBeFalsy()
    expect(result.includes('ring-inset')).toBeFalsy()
    expect(result.includes('rounded-md')).toBeTruthy()
    expect(result.includes('scale-y-100')).toBeFalsy()
    expect(result.includes('py-2')).toBeTruthy()

    // Expected custom values
    stringToArray(customValues).forEach(value => {
      expect(result.includes(value)).toBeTruthy()
    })

    // Expected classes deletors
    stringToArray(classesDeletors).forEach(value => {
      expect(result.includes(value)).toBeFalsy()
    })
  })

  it('should keep classes deletor in merged values', () => {
    const defaultValues =
      'bg-red-100 text-red-600 text-sm ring-red-600 translate-0 px-3.5 translate-y-0 ring-inherit ring-inset rounded-md scale-y-100 py-2'
    const customValues = 'bg-blue- text-blue-600 ring- ring-2 translate- scale-100 px-'
    const expectedResult = classNameMerge(defaultValues, customValues, {
      keepClassDeletor: true,
    })

    // Default values expectations
    expect(expectedResult.includes('bg-red-100')).toBeTruthy() // Should be included as `bg-blue-` is less specific.
    expect(expectedResult.includes('text-red-600')).toBeFalsy()
    expect(expectedResult.includes('text-sm')).toBeTruthy()
    expect(expectedResult.includes('ring-red-600')).toBeFalsy()
    expect(expectedResult.includes('translate-0')).toBeFalsy()
    expect(expectedResult.includes('px-3.5')).toBeFalsy()
    expect(expectedResult.includes('translate-y-0')).toBeFalsy()
    expect(expectedResult.includes('ring-inherit')).toBeFalsy()
    expect(expectedResult.includes('ring-inset')).toBeFalsy()
    expect(expectedResult.includes('rounded-md')).toBeTruthy()
    expect(expectedResult.includes('scale-y-100')).toBeFalsy()
    expect(expectedResult.includes('py-2')).toBeTruthy()

    // Custom values expectations
    expect(expectedResult.includes('bg-blue-')).toBeTruthy()
    expect(expectedResult.includes('text-blue-600')).toBeTruthy()
    expect(expectedResult.includes('ring-')).toBeTruthy()
    expect(expectedResult.includes('ring-2')).toBeTruthy()
    expect(expectedResult.includes('translate-')).toBeTruthy()
    expect(expectedResult.includes('scale-100')).toBeTruthy()
    expect(expectedResult.includes('px-')).toBeTruthy()
  })
})
