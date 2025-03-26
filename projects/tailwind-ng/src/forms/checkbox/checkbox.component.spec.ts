import { TestBed } from '@angular/core/testing';
import { provideCheckbox } from './checkbox.component.config';
import { Component, viewChild } from '@angular/core';
import { CheckboxComponent } from './checkbox.component';
import { provideIcon } from 'tailwind-ng';
import { CHECKBOX_CONFIG, ClassName } from '@tailwind-ng/core';

describe('CheckboxComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [provideCheckbox(), provideIcon()],
		});
	});

	it('should set classlit', () => {
		@Component({
			selector: 'tw-test-app',
			standalone: true,
			imports: [CheckboxComponent],
			template: `
				<tw-checkbox>Option A</tw-checkbox>
			`,
		})
		class TestAppComponent {
			component = viewChild.required(CheckboxComponent);
		}
		const fixture = TestBed.createComponent(TestAppComponent);
		const testApp = fixture.componentInstance;
		const component = testApp.component().inputRef();
		fixture.detectChanges();

		let className = '';
		TestBed.runInInjectionContext(() => {
			className = TestBed.inject(CHECKBOX_CONFIG) || '';
		});

		ClassName.toArray(className).forEach((c) => {
			expect(component.nativeElement.classList.contains(c)).toBeTrue();
		});
	});
});
