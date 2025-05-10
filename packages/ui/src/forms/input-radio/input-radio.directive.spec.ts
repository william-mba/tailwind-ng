import { InputRadioDirective } from './input-radio.directive';
import { TestBed } from '@angular/core/testing';
import { provideInputRadio } from './input-radio.directive.config';
import { INPUT_RADIO_CONFIG, ClassName } from '../../../../core/src/public-api';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('InputRadioDirective', () => {
	let className = '';
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [provideInputRadio()],
		});

		TestBed.runInInjectionContext(() => {
			className = TestBed.inject(INPUT_RADIO_CONFIG);
		});
	});

	it('should set classlist', () => {
		@Component({
			selector: 'tw-test-app',
			standalone: true,
			imports: [InputRadioDirective],
			template: `
				<input
					tw-input
					type="radio"
					name="notification"
					id="email-notification"
				/>
			`,
		})
		class TestAppComponent {}

		const fixture = TestBed.createComponent(TestAppComponent);
		const input = fixture.debugElement.query(By.directive(InputRadioDirective));
		fixture.detectChanges();

		ClassName.toArray(className).forEach((c) => {
			expect(input.nativeElement.classList.contains(c)).toBe(true);
		});
	});
});
