import { TestBed } from '@angular/core/testing';
import { ReactiveConfig } from '../reactive-config';
import { AVATAR_CONFIG } from '../../tokens';
import { ConfigTypeOf } from '../config-type-of.type';

describe('ReactiveConfig', () => {
  let rConfig: ReactiveConfig;

  const configStub = (): Partial<ConfigTypeOf<'Avatar'>> => {
    return {
      base: {
        display: 'flex',
        alignItems: 'items-center',
        justifyContent: 'justify-center',
        position: 'relative',
        radius: 'rounded-full',
        bgColor: 'bg-gray-200',
        textColor: 'text-gray-800',
      }
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AVATAR_CONFIG,
          useValue: configStub()
        }
      ]
    });
    rConfig = TestBed.inject(ReactiveConfig);
  });

  it('should get config', () => {
    const config = rConfig.get('Avatar').value.base;
    expect(config).toEqual(configStub().base!);
  });

  it('should update config', () => {
    const config = rConfig.get('Avatar').value;
    config.base.bgColor = 'bg-red-500';
    config.base.textColor = 'text-white';
    config.base.radius = 'rounded-md';

    const result = rConfig.update('Avatar', config).get('Avatar').value;

    expect(result).toEqual(config);
  });
});
