import { TestBed } from '@angular/core/testing';
import { ReactiveConfig } from '../reactive-config';
import { AVATAR_CONFIG } from '../../tokens';
import { ComponentConfig } from '../../types';

describe('ReactiveConfig', () => {
  let reactiveConfig: ReactiveConfig;

  const configStub = (): ComponentConfig => {
    return {
      display: 'flex',
      alignItems: 'items-center',
      justifyContent: 'justify-center',
      position: 'relative',
      radius: 'rounded-full',
      bgColor: 'bg-gray-200',
      textColor: 'text-gray-800',
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
    reactiveConfig = TestBed.inject(ReactiveConfig);
  });

  it('should get config', () => {
    const config = reactiveConfig.get('Avatar').value;
    expect(config).toEqual(configStub());
  });

  it('should update config', () => {
    const config = reactiveConfig.get('Avatar').value;
    config.bgColor = 'bg-red-500';
    config.textColor = 'text-white';
    config.radius = 'rounded-md';

    const updatedConfig = reactiveConfig.update('Avatar', config).get('Avatar').value;

    expect(updatedConfig).toEqual(config);
  });
});
