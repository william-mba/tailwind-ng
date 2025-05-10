import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DialogComponent } from './dialog.component';
import { Component, ElementRef } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('DialogComponent', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{
					provide: ElementRef,
					useValue: {
						nativeElement: document.createElement('div'),
					},
				},
			],
		});
	});

	it('should set whether its modal', () => {
		const fixture = TestBed.createComponent(DialogComponent);
		const component = fixture.componentInstance;
		expect(component.isModal).toBeTruthy();
		component.isModal = false;
		expect(component.isModal).toBeFalsy();
	});

	it('should set autoFocus', fakeAsync(
		() => {
			const fixture = TestBed.createComponent(DialogComponent);
			const component = fixture.componentInstance;
			expect(component.autoFocus).toBeTruthy();
			component.autoFocus = false;
			expect(component.autoFocus).toBeFalsy();
		},
		{ flush: true },
	));

	it('should autoclose', fakeAsync(
		() => {
			@Component({
				selector: 'tw-app-test',
				imports: [DialogComponent],
				template: `
					<div tw-dialog (click)="dialog.close()"></div>
				`,
			})
			class TestComponent {}

			const testFixture = TestBed.createComponent(TestComponent);
			const dailog = testFixture.debugElement.query(
				By.directive(DialogComponent),
			).componentInstance as DialogComponent;
			dailog.autoClose = true;
			dailog.displayDelay = 1000;
			testFixture.detectChanges();

			dailog.open();
			tick(500);
			expect(dailog.isOpened()).toBeTruthy();
			tick(1000);
			expect(dailog.isOpened()).toBeFalsy();
		},
		{ flush: true },
	));
});
