/* eslint-disable @angular-eslint/component-selector, @angular-eslint/component-class-suffix */
import { BadgeComponent } from './badge.component';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { provideBadge } from './badge.component.config';
import { Component } from '@angular/core';
import { BADGE_CONFIG, ClassName } from '@tailwind-ng/core';
import { By } from '@angular/platform-browser';

describe('BadgeComponent', () => {
	let component: BadgeComponent;
	let fixture: ComponentFixture<BadgeComponent>;

	beforeEach(fakeAsync(() => {
		TestBed.configureTestingModule({
			providers: [provideBadge()],
		});
		fixture = TestBed.createComponent(BadgeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should set size', () => {
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
		let className = '';
		TestBed.runInInjectionContext(() => {
			className = TestBed.inject(BADGE_CONFIG).className || '';
		});

		ClassName.toArray(className).forEach((c) => {
			expect(component.nativeElement.classList.contains(c)).toBeTruthy();
		});
	});

	it('should customize using class attribute', () => {
		const customization = 'gap-2 rounded-md bg-blue-500/10 text-blue-500';
		const defaultGap = 'gap-1';
		const defaultFontSize = 'text-xs';
		const defaultDisplay = 'inline-flex';

		@Component({
			selector: 'test-app',
			imports: [BadgeComponent],
			template: `
				<tw-badge [class]="customization">Badge</tw-badge>
			`,
		})
		class TestApp {
			protected customization = customization;
		}

		const fixture = TestBed.createComponent(TestApp);
		const badge = fixture.debugElement.query(
			By.directive(BadgeComponent),
		).componentInstance;
		fixture.detectChanges();

		ClassName.toArray(customization).forEach((c) => {
			expect(badge.nativeElement.classList.contains(c)).toBe(true);
		});

		expect(badge.nativeElement.classList.contains(defaultGap)).toBeFalsy();
		expect(
			badge.nativeElement.classList.contains(defaultFontSize),
		).toBeTruthy();
		expect(badge.nativeElement.classList.contains(defaultDisplay)).toBeTruthy();
	});

	it('should customize using DI', () => {
		const customization = 'gap-2 rounded-md bg-blue-500/10 text-blue-500';
		const defaultGap = 'gap-1';
		const defaultFontSize = 'text-xs';
		const defaultDisplay = 'inline-flex';

		@Component({
			selector: 'test-app',
			standalone: true,
			providers: [
				provideBadge({
					className: customization,
				}),
			],
			imports: [BadgeComponent],
			template: `
				<tw-badge>Badge</tw-badge>
			`,
		})
		class TestApp {}

		const fixture = TestBed.createComponent(TestApp);
		const badge = fixture.debugElement.query(
			By.directive(BadgeComponent),
		).componentInstance;
		fixture.detectChanges();

		ClassName.toArray(customization).forEach((c) => {
			expect(badge.nativeElement.classList.contains(c)).toBe(true);
		});

		expect(badge.nativeElement.classList.contains(defaultGap)).toBeFalsy();
		expect(
			badge.nativeElement.classList.contains(defaultFontSize),
		).toBeTruthy();
		expect(badge.nativeElement.classList.contains(defaultDisplay)).toBeTruthy();
	});
});
