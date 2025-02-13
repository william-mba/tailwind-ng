import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideDialog } from './dialog.component.config';
import { DialogComponent } from './dialog.component';
import { DialogModule } from './dialog.module';
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
        },
        provideDialog()
      ]
    });
  });

  it('should create', () => {
    @Component({
      selector: 'tw-app-test',
      imports: [
        DialogModule
      ],
      template: `
        <div tw-dialog #dialog class="place-self-start self-end" (click)="dialog.close()">
          <!-- Dialog container -->
          <div tw-dialog-container>
            <!-- Dialog content -->
            <div class="grid gap-3 text-center sm:text-left">
              <h1 class="font-bold text-balance text-lg my-0 text-gray-700 dark:text-gray-300">
                Payment successful
              </h1>
              <p class="text-sm text-slate-600 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        `,
    }) class TestComponent {
      dialog = viewChild.required(DialogComponent);

      showDialog() {
        this.dialog().open();
      }

      closeDialog() {
        this.dialog().close();
      }
    }

    const testFixture = TestBed.createComponent(TestComponent);
    const testComponent = testFixture.componentInstance;
    testFixture.detectChanges();

    expect(testComponent.dialog()).toBeTruthy();
    expect(testComponent.dialog().isOpened()).toBeFalse();
  });

  it('should open/close', () => {

    @Component({
      selector: 'tw-app-test',
      imports: [
        DialogModule
      ],
      template: `
        <div tw-dialog #dialog class="place-self-start self-end" (click)="dialog.close()">
          <!-- Dialog container -->
          <div tw-dialog-container>
            <!-- Dialog content -->
            <div class="grid gap-3 text-center sm:text-left">
              <h1 class="font-bold text-balance text-lg my-0 text-gray-700 dark:text-gray-300">
                Payment successful
              </h1>
              <p class="text-sm text-slate-600 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        `,
    }) class TestComponent {
      dialog = viewChild.required(DialogComponent);

      showDialog() {
        this.dialog().open();
      }

      closeDialog() {
        this.dialog().close();
      }
    }

    const testFixture = TestBed.createComponent(TestComponent);
    const testComponent = testFixture.componentInstance;
    testFixture.detectChanges();

    expect(testComponent.dialog().isOpened()).toBeFalse();
    testComponent.showDialog();
    expect(testComponent.dialog().isOpened()).toBeTrue();
    testComponent.closeDialog();
    expect(testComponent.dialog().isOpened()).toBeFalse();
  });

  it('should auto close after given display duration', fakeAsync(() => {
    const duration = 1000;
    @Component({
      selector: 'tw-app-test',
      imports: [
        DialogModule
      ],
      template: `
        <div tw-dialog #dialog class="place-self-start self-end" (click)="dialog.close()">
          <!-- Dialog container -->
          <div tw-dialog-container>
            <!-- Dialog content -->
            <div class="grid gap-3 text-center sm:text-left">
              <h1 class="font-bold text-balance text-lg my-0 text-gray-700 dark:text-gray-300">
                Payment successful
              </h1>
              <p class="text-sm text-slate-600 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        `,
    }) class TestComponent {
      dialog = viewChild.required(DialogComponent);

      showDialog() {
        this.dialog().open();
      }

      closeDialog() {
        this.dialog().close();
      }
    }

    const testFixture = TestBed.createComponent(TestComponent);
    const testComponent = testFixture.componentInstance;
    const dialog = testComponent.dialog();
    dialog.autoClose = true;
    dialog.displayDelay = duration;
    testFixture.detectChanges();

    spyOn(dialog, 'closeAfter').and.callThrough();
    spyOn(dialog, 'close').and.callThrough();

    expect(dialog.autoClose).toBeTrue();
    expect(dialog.isOpened()).toBeFalse();
    expect(dialog.displayDelay).toBe(duration);

    testComponent.showDialog();
    expect(dialog.isOpened()).toBeTrue();

    tick(duration / 2);
    expect(dialog.isOpened()).toBeTrue();

    tick(duration / 2);
    expect(dialog.isOpened()).toBeFalse();
    expect(dialog.closeAfter).toHaveBeenCalled();
    expect(dialog.closeAfter).toHaveBeenCalledWith(duration);
    expect(dialog.closeAfter).toHaveBeenCalledTimes(1);
    expect(dialog.close).toHaveBeenCalled();
    expect(dialog.close).toHaveBeenCalledTimes(1);
  }, { flush: true }));

  it('should not auto close if autoClose is false', fakeAsync(() => {
    const duration = 1000;
    @Component({
      selector: 'tw-app-test',
      imports: [
        DialogModule
      ],
      template: `
        <div tw-dialog #dialog class="place-self-start self-end" (click)="dialog.close()">
          <!-- Dialog container -->
          <div tw-dialog-container>
            <!-- Dialog content -->
            <div class="grid gap-3 text-center sm:text-left">
              <h1 class="font-bold text-balance text-lg my-0 text-gray-700 dark:text-gray-300">
                Payment successful
              </h1>
              <p class="text-sm text-slate-600 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur amet labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
        `,
    }) class TestComponent {
      dialog = viewChild.required(DialogComponent);

      showDialog() {
        this.dialog().open();
      }

      closeDialog() {
        this.dialog().close();
      }
    }

    const testFixture = TestBed.createComponent(TestComponent);
    const testComponent = testFixture.componentInstance;
    const dialog = testComponent.dialog();
    dialog.displayDelay = duration;
    testFixture.detectChanges();


    spyOn(dialog, 'closeAfter').and.callThrough();
    spyOn(dialog, 'close').and.callThrough();

    expect(dialog.autoClose).toBeFalse();
    expect(dialog.isOpened()).toBeFalse();
    expect(dialog.displayDelay).toBe(duration);

    testComponent.showDialog();
    expect(dialog.isOpened()).toBeTrue();

    tick(duration / 2);
    expect(dialog.isOpened()).toBeTrue();

    tick(duration / 2);
    expect(dialog.isOpened()).toBeTrue();
    expect(dialog.closeAfter).not.toHaveBeenCalled();
    expect(dialog.close).not.toHaveBeenCalled();

    testComponent.closeDialog();
    expect(dialog.close).toHaveBeenCalledTimes(1);
    expect(dialog.isOpened()).toBeFalse();
  }));
});

