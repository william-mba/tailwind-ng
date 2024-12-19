import { TestBed } from '@angular/core/testing';
import { ReactiveConfig } from './../reactive-config';
import { AVATAR_CONFIG, AvatarConfig } from '../../ui/elements/avatar/avatar.config';

describe('ReactiveConfig', () => {
  let reactiveConfig: ReactiveConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: AVATAR_CONFIG,
        useValue: AvatarConfig()
      }]
    });
    reactiveConfig = TestBed.inject(ReactiveConfig);
  });

  it('should get config', () => {
    const config = reactiveConfig.get('Avatar').value;
    expect(config).toEqual(AvatarConfig());
  });

  it('should update config', () => {
    const config = reactiveConfig.get<AvatarConfig>('Avatar').value;
    const wrongConfig = AvatarConfig();
    wrongConfig.size.xs = 'size-6';

    config.size.xs = 'size-3';
    config.size.sm = 'size-6';
    config.size.md = 'size-8';

    const updatedConfig = reactiveConfig.update('Avatar', config).get('Avatar').value;

    expect(updatedConfig).toEqual(config);
    expect(updatedConfig).not.toEqual(wrongConfig);
  });
});
