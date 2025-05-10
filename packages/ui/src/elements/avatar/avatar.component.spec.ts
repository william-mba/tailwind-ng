/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { AVATAR_CONFIG, ClassName } from '../../../../core/src/public-api';
import { TestBed } from '@angular/core/testing';
import { AvatarComponent } from './avatar.component';
import { Component } from '@angular/core';
import { provideAvatar } from './avatar.component.config';
import { By } from '@angular/platform-browser';

describe('AvatarComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [provideAvatar()],
		});
	});

	it('should set size', () => {
		const fixture = TestBed.createComponent(AvatarComponent);
		const component = fixture.componentInstance;
		fixture.detectChanges();

		TestBed.runInInjectionContext(() => {
			const xl = 'xl';
			const lg = 'lg';
			const md = 'md';
			const sm = 'sm';
			const xs = 'xs';

			component.size = xl;
			expect(component.size).toBe(xl);

			component.size = lg;
			expect(component.size).toBe(lg);

			component.size = md;
			expect(component.size).toBe(md);

			component.size = sm;
			expect(component.size).toBe(sm);

			component.size = xs;
			expect(component.size).toBe(xs);
		});
	});

	it('should set classList', () => {
		const fixture = TestBed.createComponent(AvatarComponent);
		const component = fixture.componentInstance;
		fixture.detectChanges();
		let className = '';
		TestBed.runInInjectionContext(() => {
			className = TestBed.inject(AVATAR_CONFIG).className || '';
		});

		ClassName.toArray(className).forEach((c) => {
			expect(component.nativeElement.classList.contains(c)).toBeTruthy();
		});
	});

	it('should customize using class attribute', () => {
		const customization = 'ring-2 ring-white rounded-md';

		@Component({
			selector: 'test-app',
			standalone: true,
			imports: [AvatarComponent],
			template: `
				<img tw-avatar class="ring-2 ring-white rounded-md" />
			`,
		})
		class TestApp {}

		const fixture = TestBed.createComponent(TestApp);
		const avatar = fixture.debugElement.query(
			By.directive(AvatarComponent),
		).componentInstance;
		fixture.detectChanges();

		ClassName.toArray(customization).forEach((c) => {
			expect(avatar.nativeElement.className.includes(c)).toBeTruthy();
		});
	});

	it('should customize using DI', () => {
		const customization = 'ring-2 ring-white rounded-md';
		@Component({
			selector: 'test-app',
			standalone: true,
			providers: [
				provideAvatar({
					className: customization,
				}),
			],
			imports: [AvatarComponent],
			template: `
				<img tw-avatar />
			`,
		})
		class TestApp {}

		const fixture = TestBed.createComponent(TestApp);
		const avatar = fixture.debugElement.query(
			By.directive(AvatarComponent),
		).componentInstance;
		fixture.detectChanges();

		ClassName.toArray(customization).forEach((c) => {
			expect(avatar.nativeElement.className.includes(c)).toBeTruthy();
		});
	});
});
