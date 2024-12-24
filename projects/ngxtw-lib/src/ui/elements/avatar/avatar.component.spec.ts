import { TestBed } from '@angular/core/testing';
import { AvatarComponent } from './avatar.component';
import { Component, input, viewChild } from '@angular/core';
import { SizeOption } from '../../../core/types/size-options.type';
import { ClassList } from '../../../config/classlist';
import { AvatarConfig, provideAvatarConfig } from './avatar.config';
import { StringHelper } from '../../../core/helpers/string.helper';

describe('AvatarComponent', () => {
  it('should set size', () => {
    const fixture = TestBed.createComponent(AvatarComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

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
    const fixture = TestBed.createComponent(AvatarComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const config = AvatarConfig();
    const classList = new ClassList();

    classList.setFrom({ t: config.theme, s: config.size[component.size()] });

    expect(component.classList.base).toEqual(classList.base);
    expect(component.classList.value).toEqual(classList.value);
  });

  it('should get config', () => {
    const config = AvatarConfig();
    const fixture = TestBed.createComponent(AvatarComponent);
    const component = fixture.componentInstance;

    fixture.detectChanges();

    expect(component.config.get<AvatarConfig>('Avatar').value).toEqual(config);
  });

  it('should set customizations using class attribute', () => {
    const defaultRadius = AvatarConfig().theme.borderRadius!;
    const defaultRingWidth = AvatarConfig().theme.ringWidth!;
    const defaultRingColor = AvatarConfig().theme.ringColor!;
    const customizations = 'ring-2 ring-white rounded-md';

    @Component({
      selector: 'test-app',
      standalone: true,
      imports: [AvatarComponent],
      template: `
      <img tw-avatar class="ring-2 ring-white rounded-md">
      `
    }) class TestApp {
      avatar = viewChild.required(AvatarComponent);
    }

    const fixture = TestBed.createComponent(TestApp);
    const testApp = fixture.componentInstance;
    fixture.detectChanges()

    StringHelper.toArray(customizations).forEach(c => {
      expect(testApp.avatar().classList.value.includes(c)).toBeTrue();
    })

    expect(testApp.avatar().classList.value.includes(defaultRadius)).toBeFalse();
    expect(testApp.avatar().classList.value.includes(defaultRingColor)).toBeFalse();
    expect(testApp.avatar().classList.value.includes(defaultRingWidth)).toBeFalse();
  });

  it('should set customizations using dependency injection', () => {
    const defaultRadius = AvatarConfig().theme.borderRadius!;
    const defaultRingWidth = AvatarConfig().theme.ringWidth!;
    const defaultRingColor = AvatarConfig().theme.ringColor!;
    const customizations = 'ring-2 ring-white rounded-md';

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        provideAvatarConfig({
          theme: {
            ringWidth: 'ring-2',
            ringColor: 'ring-white',
            borderRadius: 'rounded-md'
          }
        })
      ]
    });

    @Component({
      selector: 'test-app',
      standalone: true,
      imports: [AvatarComponent],
      template: ` <img tw-avatar >`
    }) class TestApp {
      avatar = viewChild.required(AvatarComponent);
    }

    const fixture = TestBed.createComponent(TestApp);
    const testApp = fixture.componentInstance;
    fixture.detectChanges()

    StringHelper.toArray(customizations).forEach(c => {
      expect(testApp.avatar().classList.value.includes(c)).toBeTrue();
    })

    expect(testApp.avatar().classList.value.includes(defaultRadius)).toBeFalse();
    expect(testApp.avatar().classList.value.includes(defaultRingColor)).toBeFalse();
    expect(testApp.avatar().classList.value.includes(defaultRingWidth)).toBeFalse();
  });

  it('should update classList', () => {
    const newClassList = ['rounded-md', 'ring-2', 'ring-white'];
    const defaultRadius = AvatarConfig().theme.borderRadius!;
    const defaultRingWidth = AvatarConfig().theme.ringWidth!;
    const defaultRingColor = AvatarConfig().theme.ringColor!;

    @Component({
      selector: 'test-app',
      standalone: true,
      imports: [AvatarComponent],
      template: ` <img tw-avatar > `
    }) class TestApp {
      avatar = viewChild.required(AvatarComponent);

      update() {
        this.avatar().classList.update(newClassList);
      }
    }

    const fixture = TestBed.createComponent(TestApp);
    const testApp = fixture.componentInstance;
    fixture.detectChanges();
    testApp.update();

    newClassList.forEach(c => {
      expect(testApp.avatar().classList.value.includes(c)).toBeTrue();
    });

    expect(testApp.avatar().classList.value.includes(defaultRadius)).toBeFalse();
    expect(testApp.avatar().classList.value.includes(defaultRingColor)).toBeFalse();
    expect(testApp.avatar().classList.value.includes(defaultRingWidth)).toBeFalse();
  })

});
