import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DialogComponent } from './dialog.component';
import { Component, ElementRef, viewChild } from '@angular/core';

describe('DialogComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: {
            nativeElement: document.createElement('div')
          }
        }
      ]
    });
  });

  it('should set whether its modal', () => {
    const fixture = TestBed.createComponent(DialogComponent);
    const component = fixture.componentInstance;
    expect(component.isModal).toBeTrue();
    component.isModal = false;
    expect(component.isModal).toBeFalse();
  });

  it('should set autoFocus', fakeAsync(() => {
    const fixture = TestBed.createComponent(DialogComponent);
    const component = fixture.componentInstance;
    expect(component.autoFocus).toBeTrue();
    component.autoFocus = false;
    expect(component.autoFocus).toBeFalse();
  }, { flush: true }));

  it('should autoclose', fakeAsync(() => {
    @Component({
      selector: 'tw-app-test',
      imports: [DialogComponent],
      template: `
        <div tw-dialog (click)="dialog.close()"></div>
        `,
    }) class TestComponent {
      dialog = viewChild.required(DialogComponent);

      show() {
        this.dialog().open();
      }

      hide() {
        this.dialog().close();
      }
    }

    const testFixture = TestBed.createComponent(TestComponent);
    const testComponent = testFixture.componentInstance;
    testComponent.dialog().autoClose = true;
    testComponent.dialog().displayDelay = 1000;
    testFixture.detectChanges();

    testComponent.show();
    tick(500);
    expect(testComponent.dialog().isOpened()).toBeTrue();
    tick(1000);
    expect(testComponent.dialog().isOpened()).toBeFalse();
  }, { flush: true }));
});

