import { ClassList } from '../classlist';
import { ComponentConfig } from '../../types';
import { Obj } from '../../helpers';

describe('ClassList', () => {
  let classList: ClassList;

  beforeEach(() => {
    classList = new ClassList();
  });

  it('should init value', async () => {
    const value = ['rounded-full', 'p-4'];
    await classList.init(value);
    expect(classList.base()).toEqual(value);
  });

  it('should set value', async () => {
    const value = ['rounded-full', 'p-4'];
    await classList.set(value);
    expect(classList.value()).toEqual(value);
  });

  it('should merge value', async () => {
    const customValue = ['rounded-full', 'p-4', 'bg-red-600'];
    const defaultValue = ['rounded-md', 'bg-blue-600', 'px-4', 'py-2', 'text-white'];

    await classList.init(customValue);
    await classList.set(defaultValue);

    // Value should includes all custom classes
    expect(classList.value().includes(customValue[0])).toBeTrue();
    expect(classList.value().includes(customValue[1])).toBeTrue();
    expect(classList.value().includes(customValue[2])).toBeTrue();

    // Value should not includes default classes overridden by custom classes
    expect(classList.value().includes(defaultValue[0])).toBeFalse();
    expect(classList.value().includes(defaultValue[1])).toBeFalse();
    expect(classList.value().includes(defaultValue[2])).toBeFalse();
    expect(classList.value().includes(defaultValue[3])).toBeFalse();
    expect(classList.value().includes(defaultValue[4])).toBeTrue();
  });

  it('should update value', async () => {
    const defaultValue = ['rounded-md', 'bg-blue-600', 'px-4', 'py-2', 'text-white'];

    await classList.set(defaultValue);

    const newValue = ['rounded-lg', 'bg-red-600', 'p-3'];
    await classList.update(newValue);

    expect(classList.value().includes(newValue[0])).toBeTrue();
    expect(classList.value().includes(newValue[1])).toBeTrue();
    expect(classList.value().includes(newValue[2])).toBeTrue();

    expect(classList.value().includes(defaultValue[0])).toBeFalse();
    expect(classList.value().includes(defaultValue[1])).toBeFalse();
    expect(classList.value().includes(defaultValue[2])).toBeFalse();
    expect(classList.value().includes(defaultValue[3])).toBeFalse();
    expect(classList.value().includes(defaultValue[4])).toBeTrue();
  });

  it('should init value from config object', async () => {
    const configObj: ComponentConfig = {
      boxShadow: 'shadow-none',
      textColor: 'text-gray-700',
      dark: {
        textColor: 'dark:text-gray-300'
      },
      hover: {
        textColor: 'hover:text-gray-900',
        dark: {
          textColor: 'hover:dark:text-gray-100',
        }
      }
    };
    const configArray = Obj.toArray(configObj);

    await classList.init(configObj);

    expect(classList.base()).toEqual(configArray);
  });

  it('should set value from config object', async () => {
    const configObj: ComponentConfig = {
      boxShadow: 'shadow-none',
      textColor: 'text-gray-700',
      dark: {
        textColor: 'dark:text-gray-300'
      },
      hover: {
        textColor: 'hover:text-gray-900',
        dark: {
          textColor: 'hover:dark:text-gray-100',
        }
      }
    };
    const configArray = Obj.toArray(configObj);

    await classList.set(configObj);

    expect(classList.value()).toEqual(configArray);
  });

  it('should update value from config object', async () => {
    const configObj: ComponentConfig = {
      boxShadow: 'shadow-none',
      textColor: 'text-gray-700',
      dark: {
        textColor: 'dark:text-gray-300'
      },
      hover: {
        textColor: 'hover:text-gray-900',
        dark: {
          textColor: 'hover:dark:text-gray-100',
        }
      }
    };
    const defaultConfig = Obj.toArray(configObj);
    await classList.set(configObj);

    const newConfigObj: ComponentConfig = {
      textColor: 'text-gray-800',
      dark: {
        textColor: 'dark:text-gray-400'
      },
      hover: {
        textColor: 'hover:text-gray-800',
        dark: {
          textColor: 'hover:dark:text-gray-200',
        }
      }
    };

    const newConfig = Obj.toArray(newConfigObj);

    await classList.update(newConfigObj);

    defaultConfig.forEach(value => {
      if (value === 'shadow-none') {
        expect(classList.value().includes(value)).toBeTrue();
      } else {
        expect(classList.value().includes(value)).toBeFalse();
      }
    });

    newConfig.forEach(value => {
      expect(classList.value().includes(value)).toBeTrue();
    });
  });

});
