/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { ButtonGroupComponent } from './button-group.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideButtonGroup } from './button-group.component.config';
import { BUTTON_GROUP_CONFIG, ClassName } from '@tailwind-ng/core';
import { Component, viewChild } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

describe('ButtonGroupComponent', () => {
	let component: ButtonGroupComponent;
	let fixture: ComponentFixture<ButtonGroupComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [provideButtonGroup()],
		});
		fixture = TestBed.createComponent(ButtonGroupComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should set classList', () => {
		let className = '';
		TestBed.runInInjectionContext(() => {
			className = TestBed.inject(BUTTON_GROUP_CONFIG) || '';
		});

		ClassName.toArray(className).forEach((c) => {
			expect(component.nativeElement.classList.contains(c)).toBeTrue();
		});
	});

	it('should customize using class attribute', () => {
		const defaultRadius = 'rounded-md';
		const defaultBoxShadow = 'shadow-sm';

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
			`,
		})
		class TestApp {
			buttonGroup = viewChild.required(ButtonGroupComponent);
		}

		const appFixture = TestBed.createComponent(TestApp);
		const testApp = appFixture.componentInstance;
		appFixture.detectChanges();

		expect(
			testApp.buttonGroup().nativeElement.className.includes('rounded-full'),
		).toBeTrue();
		expect(
			testApp.buttonGroup().nativeElement.className.includes(defaultRadius),
		).toBeFalse();
		expect(
			testApp.buttonGroup().nativeElement.className.includes(defaultBoxShadow),
		).toBeTrue();
	});

	it('should customize using DI', () => {
		const defaultRadius = 'rounded-md';
		const defaultBoxShadow = 'shadow-sm';

		@Component({
			selector: 'test-app',
			standalone: true,
			imports: [ButtonComponent, ButtonGroupComponent],
			providers: [provideButtonGroup('rounded-full shadow-lg')],
			template: `
				<tw-button-group>
					<button tw-button variant="secondary">Button A</button>
					<button tw-button variant="secondary">Button B</button>
					<button tw-button variant="secondary">Button C</button>
				</tw-button-group>
			`,
		})
		class TestApp {
			buttonGroup = viewChild.required(ButtonGroupComponent);
		}

		const appFixture = TestBed.createComponent(TestApp);
		const testApp = appFixture.componentInstance;
		appFixture.detectChanges();

		expect(
			testApp.buttonGroup().nativeElement.className.includes('shadow-lg'),
		).toBeTrue();
		expect(
			testApp.buttonGroup().nativeElement.className.includes('rounded-full'),
		).toBeTrue();
		expect(
			testApp.buttonGroup().nativeElement.className.includes(defaultRadius),
		).toBeFalse();
		expect(
			testApp.buttonGroup().nativeElement.className.includes(defaultBoxShadow),
		).toBeFalse();
	});
});
