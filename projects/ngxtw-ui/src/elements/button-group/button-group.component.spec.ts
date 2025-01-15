/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ButtonGroupComponent } from './button-group.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonGroupConfig, provideButtonGroupConfig } from './button-group.config';
import { ClassList } from '@ngxtw/core';
import { Component, viewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

describe('ButtonGroupComponent', () => {
  let component: ButtonGroupComponent;
  let fixture: ComponentFixture<ButtonGroupComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        provideButtonGroupConfig()
      ]
    });
    fixture = TestBed.createComponent(ButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get config', () => {
    const config = ButtonGroupConfig();

    expect(component.config.get('ButtonGroup').value).toEqual(config);
  });

  it('should set classList', () => {
    const classList = new ClassList();
    classList.setFrom(ButtonGroupConfig());

    expect(component.classList.base).toEqual(classList.base);
    expect(component.classList.value).toEqual(classList.value);
  });

  it('should set customizations using class attribute', () => {
    const defaultRadius = ButtonGroupConfig().radius!;
    const defaultBoxShadow = ButtonGroupConfig().boxShadow!;

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

  it('should set customizations using dependency injection', () => {
    const defaultRadius = ButtonGroupConfig().radius!;
    const defaultBoxShadow = ButtonGroupConfig().boxShadow!;

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      providers: [
        provideButtonGroupConfig({
          ringColor: 'ring-red-600',
          radius: 'rounded-full'
        })
      ]
    });

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
    expect(testApp.buttonGroup().classList.value.includes('ring-red-600')).toBeTrue();
    expect(testApp.buttonGroup().classList.value.includes(defaultRadius)).toBeFalse();
    expect(testApp.buttonGroup().classList.value.includes(defaultBoxShadow)).toBeTrue();
  });
});
 
