/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ButtonGroupComponent } from './button-group.component';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { GetButtonGroupConfig, provideButtonGroup } from './button-group.component.config';
import { ClassList } from '@tailwind-ng/core';
import { Component, viewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

describe('ButtonGroupComponent', () => {
  let component: ButtonGroupComponent;
  let fixture: ComponentFixture<ButtonGroupComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideButtonGroup()
      ]
    });
    fixture = TestBed.createComponent(ButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get config', () => {
    const config = GetButtonGroupConfig();
    expect(component.config).toEqual(config);
  });

  it('should set classList', async () => {
    const classList = new ClassList();
    await classList.set(GetButtonGroupConfig());

    expect(component.classList.base()).toEqual([]);
    expect(component.classList.value()).toEqual(classList.value());
  });

  it('should customize using class attribute', fakeAsync(() => {
    const defaultRadius = GetButtonGroupConfig().radius!;
    const defaultBoxShadow = GetButtonGroupConfig().boxShadow!;

    @Component({
      selector: 'test-app',
      standalone: true,
      imports: [ButtonComponent, ButtonGroupComponent],
      template: `
        <tw-button-group class="rounded-full">
          <button tw-button variant="secondary">Button A</button>
          <button tw-button variant="secondary">Button B</button>
          <button tw-button variant="secondary">Button C</button>
        </tw-button-group>
      `
    }) class TestApp {
      buttonGroup = viewChild.required(ButtonGroupComponent);
    }

    const appFixture = TestBed.createComponent(TestApp);
    const testApp = appFixture.componentInstance;
    appFixture.detectChanges();

    tick();

    expect(testApp.buttonGroup().classList.value().includes('rounded-full')).toBeTrue();
    expect(testApp.buttonGroup().classList.value().includes(defaultRadius)).toBeFalse();
    expect(testApp.buttonGroup().classList.value().includes(defaultBoxShadow)).toBeTrue();
  }, { flush: true }));

  it('should customize using DI', fakeAsync(() => {
    const defaultRadius = GetButtonGroupConfig().radius!;
    const defaultBoxShadow = GetButtonGroupConfig().boxShadow!;

    @Component({
      selector: 'test-app',
      standalone: true,
      imports: [ButtonComponent, ButtonGroupComponent],
      providers: [
        provideButtonGroup({
          ringColor: 'ring-red-600',
          radius: 'rounded-full'
        })
      ],
      template: `
        <tw-button-group class="rounded-full">
          <button tw-button variant="secondary">Button A</button>
          <button tw-button variant="secondary">Button B</button>
          <button tw-button variant="secondary">Button C</button>
        </tw-button-group>
      `
    }) class TestApp {
      buttonGroup = viewChild.required(ButtonGroupComponent);
    }

    const appFixture = TestBed.createComponent(TestApp);
    const testApp = appFixture.componentInstance;
    appFixture.detectChanges();

    tick();

    expect(testApp.buttonGroup().classList.value().includes('rounded-full')).toBeTrue();
    expect(testApp.buttonGroup().classList.value().includes('ring-red-600')).toBeTrue();
    expect(testApp.buttonGroup().classList.value().includes(defaultRadius)).toBeFalse();
    expect(testApp.buttonGroup().classList.value().includes(defaultBoxShadow)).toBeTrue();
  }, { flush: true }));
});

