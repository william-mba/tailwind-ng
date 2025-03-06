/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ButtonGroupComponent } from './button-group.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetButtonGroupConfig, provideButtonGroup } from './button-group.component.config';
import { classlist } from '@tailwind-ng/core';
import { Component, viewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

describe('ButtonGroupComponent', () => {
  let component: ButtonGroupComponent;
  let fixture: ComponentFixture<ButtonGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideButtonGroup()
      ]
    });
    fixture = TestBed.createComponent(ButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set classList', () => {
    const classList = classlist(GetButtonGroupConfig());

    expect(component.classList.base).toEqual([]);
    expect(component.classList.value).toEqual(classList.value);
  });

  it('should customize using class attribute', () => {
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

    expect(testApp.buttonGroup().classList.value.includes('rounded-full')).toBeTrue();
    expect(testApp.buttonGroup().classList.value.includes(defaultRadius)).toBeFalse();
    expect(testApp.buttonGroup().classList.value.includes(defaultBoxShadow)).toBeTrue();
  });

  it('should customize using DI', () => {
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

    expect(testApp.buttonGroup().classList.value.includes('rounded-full')).toBeTrue();
    expect(testApp.buttonGroup().classList.value.includes('ring-red-600')).toBeTrue();
    expect(testApp.buttonGroup().classList.value.includes(defaultRadius)).toBeFalse();
    expect(testApp.buttonGroup().classList.value.includes(defaultBoxShadow)).toBeTrue();
  });
});

