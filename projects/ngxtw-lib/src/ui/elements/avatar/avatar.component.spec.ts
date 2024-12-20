import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent } from './avatar.component';
import { input } from '@angular/core';
import { SizeOption } from '../../../core/types/size-options.type';
import { ClassList } from '../../../config/classlist';
import { AvatarConfig, provideAvatarConfig } from './avatar.config';
import { StringHelper } from '../../../core/helpers/string.helper';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set size', () => {
    TestBed.runInInjectionContext(() => {
      const xl = input<SizeOption>('xl');
      const lg = input<SizeOption>('lg');
      const md = input<SizeOption>('md');
      const sm = input<SizeOption>('sm');
      const xs = input<SizeOption>('xs');

      component.size = xl;
      expect(component.size()).toBe(xl());

      component.size = lg;
      expect(component.size()).toBe(lg());

      component.size = md;
      expect(component.size()).toBe(md());

      component.size = sm;
      expect(component.size()).toBe(sm());

      component.size = xs;
      expect(component.size()).toBe(xs());
    });
  });

  it('should set classList', () => {
    const config = AvatarConfig();
    const classList = new ClassList();

    classList.setFrom({ t: config.theme, s: config.size[component.size()] });

    expect(component.classList.base).toEqual(classList.base);
    expect(component.classList.value).toEqual(classList.value);
  });

  it('should get reactive config', () => {
    const config = AvatarConfig();
    expect(component.config.get<AvatarConfig>('Avatar').value).toEqual(config);
  });

  it('should set customizations using class attribute', () => {
    const customizations = 'rounded-md ring-2 ring-white';
    const defaultBorderRadius = AvatarConfig().theme.borderRadius || 'rounded-full';
    component.class = StringHelper.toArray(customizations);

    component.class.forEach(c => {
      expect(component.classList.value.includes(c)).toBeTrue;
    });

    expect(component.classList.value.includes(defaultBorderRadius)).toBeFalse;
  });

  it('should set customizations using dependency injection', () => {
    const config = AvatarConfig();
    config.theme.borderRadius = 'rounded-md';
    config.theme.ringWidth = 'ring-2';
    config.theme.ringColor = 'ring-white';

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        provideAvatarConfig(config)
      ]
    });
    const defaultBorderRadius = AvatarConfig().theme.borderRadius!;

    expect(component.classList.value.includes(defaultBorderRadius)).toBeFalse;
    expect(component.classList.value.includes(config.theme.borderRadius)).toBeTrue;
    expect(component.classList.value.includes(config.theme.ringWidth)).toBeTrue;
    expect(component.classList.value.includes(config.theme.ringColor)).toBeTrue;
  });

  it('should update classList', () => {
    const newClassList = ['rounded-md', 'ring-2', 'ring-white'];
    const defaultBorderRadius = AvatarConfig().theme.borderRadius || 'rounded-full';

    component.classList.update(newClassList);

    newClassList.forEach(c => {
      expect(component.classList.value.includes(c)).toBeTrue;
    });

    expect(component.classList.value.includes(defaultBorderRadius)).toBeFalse;
  })

});
