import { InputTextDirective } from './input-text.directive';
import { TestBed } from '@angular/core/testing';
import { provideInputText } from './input-text.directive.config';
import { INPUT_TEXT_CONFIG, ClassName } from '@tailwind-ng/core';
import { Component, viewChild } from '@angular/core';

describe('InputDirective', () => {
	let className = '';
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [provideInputText()],
		});

		TestBed.runInInjectionContext(() => {
			className = TestBed.inject(INPUT_TEXT_CONFIG).className ?? '';
		});
	});

	it('should set classlist', () => {
		@Component({
			selector: 'tw-test-app',
			standalone: true,
			imports: [InputTextDirective],
			template: `
				<input tw-input type="email" />
			`,
		})
		class TestAppComponent {
			input = viewChild.required(InputTextDirective);
		}

		const appFixture = TestBed.createComponent(TestAppComponent);
		const testApp = appFixture.componentInstance;
		appFixture.detectChanges();

		ClassName.toArray(className).forEach((c) => {
			expect(testApp.input().nativeElement.className.includes(c)).toBeTrue();
		});
	});
});
