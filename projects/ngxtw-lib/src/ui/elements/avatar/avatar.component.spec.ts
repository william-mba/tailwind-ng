import { TestBed } from '@angular/core/testing';
import { AvatarComponent } from './avatar.component';
import { provideAvatarConfig } from './avatar.config';

describe('Avatar Component', () => {
  let component: AvatarComponent;
  const CUSTOM_CLASSNAMES = 'size-6 ring-2 ring-white';

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [provideAvatarConfig()],
    });

    TestBed.runInInjectionContext(() => {
      component = new AvatarComponent();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
