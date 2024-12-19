import { ClassList } from '../classlist';
import { ConfigType } from '../../core/types/config.type';
import { objectToArray } from '../../core/helpers/object.helper';

describe('ClassList', () => {
  let classList: ClassList;

  beforeEach(() => {
    classList = new ClassList();
  });

  it('should init value', () => {
    const value = ['rounded-full', 'p-4'];
    classList.init(value);
    expect(classList.base).toEqual(value);
    expect(classList.value).toEqual(value);
  });

  it('should set value', () => {
    const value = ['rounded-full', 'p-4'];
    classList.set(value);
    expect(classList.value).toEqual(value);
  });

  it('should merge value', () => {
    const customValue = ['rounded-full', 'p-4', 'bg-red-600'];
    const defaultValue = ['rounded-md', 'bg-blue-600', 'px-4', 'py-2', 'text-white'];

    classList.init(customValue);
    classList.set(defaultValue);

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
    const defaultValue = ['rounded-md', 'bg-blue-600', 'px-4', 'py-2', 'text-white'];

    classList.set(defaultValue);

    const newValue = ['rounded-lg', 'bg-red-600', 'p-3'];
    classList.update(newValue);

    expect(classList.value.includes(newValue[0])).toBeTrue();
    expect(classList.value.includes(newValue[1])).toBeTrue();
    expect(classList.value.includes(newValue[2])).toBeTrue();

    expect(classList.value.includes(defaultValue[0])).toBeFalse();
    expect(classList.value.includes(defaultValue[1])).toBeFalse();
    expect(classList.value.includes(defaultValue[2])).toBeFalse();
    expect(classList.value.includes(defaultValue[3])).toBeFalse();
    expect(classList.value.includes(defaultValue[4])).toBeTrue();
  });

  it('should init value from config object', () => {
    const configObj: ConfigType = {
      boxShadow: 'shadow-none',
      textColor: 'text-gray-700',
      hover: {
        textColor: 'hover:text-gray-900'
      },
      dark: {
        textColor: 'dark:text-gray-300',
        hover: {
          textColor: 'dark:hover:text-gray-100',
        }
      }
    };
    const configArray = objectToArray(configObj);

    classList.initFrom(configObj);

    expect(classList.base).toEqual(configArray);
    expect(classList.value).toEqual(configArray);
  });

  it('should set value from config object', () => {
    const configObj: ConfigType = {
      boxShadow: 'shadow-none',
      textColor: 'text-gray-700',
      hover: {
        textColor: 'hover:text-gray-900'
      },
      dark: {
        textColor: 'dark:text-gray-300',
        hover: {
          textColor: 'dark:hover:text-gray-100',
        }
      }
    };
    const configArray = objectToArray(configObj);

    classList.setFrom(configObj);

    expect(classList.value).toEqual(configArray);
  });

  it('should update value from config object', () => {
    const configObj: ConfigType = {
      boxShadow: 'shadow-none',
      textColor: 'text-gray-700',
      hover: {
        textColor: 'hover:text-gray-900'
      },
      dark: {
        textColor: 'dark:text-gray-300',
        hover: {
          textColor: 'dark:hover:text-gray-100',
        }
      }
    };
    const defaultConfig = objectToArray(configObj);
    classList.setFrom(configObj);

    const newConfigObj: ConfigType = {
      textColor: 'text-gray-800',
      hover: {
        textColor: 'hover:text-gray-800'
      },
      dark: {
        textColor: 'dark:text-gray-400',
        hover: {
          textColor: 'dark:hover:text-gray-200',
        }
      }
    };

    const newConfig = objectToArray(newConfigObj);

    classList.updateFrom(newConfigObj);

    defaultConfig.forEach(value => {
      if (value === 'shadow-none') {
        expect(classList.value.includes(value)).toBeTrue();
      } else {
        expect(classList.value.includes(value)).toBeFalse();
      }
    });

    newConfig.forEach(value => {
      expect(classList.value.includes(value)).toBeTrue();
    });
  });

});
