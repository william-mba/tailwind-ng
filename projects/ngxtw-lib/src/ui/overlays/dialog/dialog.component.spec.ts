import { By } from '@angular/platform-browser';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DialogConfig } from './dialog.config';
import { DialogComponent } from './dialog.component';
import { DialogModule } from './dialog.module';
import { Component, ElementRef, viewChild } from '@angular/core';
import { DialogBackdrop } from './dialog-backdrop.directive';
import { ClassList } from '../../../config/classlist';
import { DialogScrim } from './dialog-scrim.directive';

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

  it('should create', () => {
    @Component({
      selector: 'app-test',
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
    expect(testComponent.dialog().isOpened).toBeFalse();
  });



  it('should open/close', () => {

    @Component({
      selector: 'app-test',
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

    expect(testComponent.dialog().isOpened).toBeFalse();
    testComponent.showDialog();
    expect(testComponent.dialog().isOpened).toBeTrue();
    testComponent.closeDialog();
    expect(testComponent.dialog().isOpened).toBeFalse();
  });

  it('should auto close after given display duration', fakeAsync(() => {
    const duration = 1000;
    @Component({
      selector: 'app-test',
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
    dialog.displayDuration = duration;
    testFixture.detectChanges();

    spyOn(dialog, 'closeAfter').and.callThrough();
    spyOn(dialog, 'close').and.callThrough();

    expect(dialog.autoClose).toBeTrue();
    expect(dialog.isOpened).toBeFalse();
    expect(dialog.displayDuration).toBe(duration);

    testComponent.showDialog();
    expect(dialog.isOpened).toBeTrue();

    tick(duration / 2);
    expect(dialog.isOpened).toBeTrue();

    tick(duration / 2);
    expect(dialog.isOpened).toBeFalse();
    expect(dialog.closeAfter).toHaveBeenCalled();
    expect(dialog.closeAfter).toHaveBeenCalledWith(duration);
    expect(dialog.closeAfter).toHaveBeenCalledTimes(1);
    expect(dialog.close).toHaveBeenCalled();
    expect(dialog.close).toHaveBeenCalledTimes(1);
  }, { flush: true }));

  it('should not auto close if autoClose is false', fakeAsync(() => {
    const duration = 1000;
    @Component({
      selector: 'app-test',
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
    dialog.displayDuration = duration;
    testFixture.detectChanges();


    spyOn(dialog, 'closeAfter').and.callThrough();
    spyOn(dialog, 'close').and.callThrough();

    expect(dialog.autoClose).toBeFalse();
    expect(dialog.isOpened).toBeFalse();
    expect(dialog.displayDuration).toBe(duration);

    testComponent.showDialog();
    expect(dialog.isOpened).toBeTrue();

    tick(duration / 2);
    expect(dialog.isOpened).toBeTrue();

    tick(duration / 2);
    expect(dialog.isOpened).toBeTrue();
    expect(dialog.closeAfter).not.toHaveBeenCalled();
    expect(dialog.close).not.toHaveBeenCalled();

    testComponent.closeDialog();
    expect(dialog.close).toHaveBeenCalledTimes(1);
    expect(dialog.isOpened).toBeFalse();
  }));


  it('should set animation duration', () => {
    @Component({
      selector: 'app-test',
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
    dialog.animationDuration = 500;
    testFixture.detectChanges();
    expect(dialog.animationDuration).toBe(500);
  });

  it('should get config', () => {
    @Component({
      selector: 'app-test',
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
    dialog.animationDuration = 500;
    testFixture.detectChanges();
    expect(dialog.config.get<DialogConfig>('ModalDialog').value).toEqual(DialogConfig());
  });

  describe('Container', () => {
    it('should set classList', () => {
      @Component({
        selector: 'app-test',
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
      testFixture.detectChanges();
      const classList = new ClassList().setFrom(DialogConfig().container);
      expect(dialog.container().classList.value).toEqual(classList.value);
    });

    it('should get config', () => {
      @Component({
        selector: 'app-test',
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
      testFixture.detectChanges();
      expect(dialog.config.get<DialogConfig>('ModalDialog').value.container).toEqual(DialogConfig().container);
    });
  });

  describe('Backdrop', () => {
    it('should set classList', () => {
      @Component({
        imports: [DialogModule, DialogBackdrop],
        template: `
      <div tw-dialog #dialog (click)="dialog.close()">
        <tw-dialog-backdrop />
        <!-- Dialog container -->
        <div tw-dialog-container>
          <!-- Dialog content -->
          <div class="grid gap-3 text-center sm:text-left">
            <h1 class="font-bold text-balance text-lg my-0 text-gray-700 dark:text-gray-300">
              Out of stock
            </h1>
            <p class="text-sm text-gray-600 dark:text-gray-400 text-pretty">
              The item in your cart is no longer available.
            </p>
          </div>
        </div>
      </div>
      `
      }) class TestComponent {
        backdrop = viewChild(DialogBackdrop);
        dialog = viewChild.required(DialogComponent);

        showDialog() {
          this.dialog().open();
        }

        closeDialog() {
          this.dialog().close();
        }
      }

      let fixture = TestBed.createComponent(TestComponent);
      let component: TestComponent = fixture.debugElement.componentInstance;
      fixture.detectChanges();

      const classList = new ClassList().setFrom(DialogConfig().backdrop);
      expect(component.backdrop()!.classList.value).toEqual(classList.value);
    });

    it('should get config', () => {
      @Component({
        imports: [DialogModule, DialogBackdrop],
        template: `
      <div tw-dialog #dialog (click)="dialog.close()">
        <tw-dialog-backdrop />
        <!-- Dialog container -->
        <div tw-dialog-container>
          <!-- Dialog content -->
          <div class="grid gap-3 text-center sm:text-left">
            <h1 class="font-bold text-balance text-lg my-0 text-gray-700 dark:text-gray-300">
              Out of stock
            </h1>
            <p class="text-sm text-gray-600 dark:text-gray-400 text-pretty">
              The item in your cart is no longer available.
            </p>
          </div>
        </div>
      </div>
      `
      }) class TestComponent {
        backdrop = viewChild(DialogBackdrop);
        dialog = viewChild.required(DialogComponent);

        showDialog() {
          this.dialog().open();
        }

        closeDialog() {
          this.dialog().close();
        }
      }

      let fixture = TestBed.createComponent(TestComponent);
      let component: TestComponent = fixture.debugElement.componentInstance;
      fixture.detectChanges();
      expect(component.dialog().config.get<DialogConfig>('ModalDialog').value.backdrop).toEqual(DialogConfig().backdrop);
    });
  });

  describe('Scrim', () => {
    it('should set classList', () => {
      const classList = new ClassList().setFrom(DialogConfig().scrim);

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        providers: [
          {
            provide: ElementRef,
            useValue: { nativeElement: document.createElement('div') }
          }
        ],
      });

      @Component({
        selector: 'app-test',
        imports: [
          DialogModule
        ],
        template: `
          <div tw-dialog #centeredDialogWithBackdrop [isOpened]="true" (click)="centeredDialogWithBackdrop.close()">
            <!-- Dialog container -->
            <div tw-dialog-container>
              <!-- Dialog content -->
              <div class="grid gap-3 text-center sm:text-left">
                <h1 class="font-bold text-balance text-lg my-0 text-gray-700 dark:text-gray-300">
                  Out of stock
                </h1>
                <p class="text-sm text-gray-600 dark:text-gray-400 text-pretty">
                  The item in your cart is no longer available.
                </p>
              </div>
            </div>
          </div>
            `
      }) class TestComponent { }

      const testComponent = TestBed.createComponent(TestComponent);
      const scrim = testComponent.debugElement.query(By.directive(DialogScrim)).nativeElement;
      testComponent.detectChanges();

      classList.value.forEach(className => {
        expect(scrim.classList.contains(className)).toBeTrue();
      });
    });

    it('should get config', () => {

      TestBed.resetTestingModule();
      TestBed.configureTestingModule({
        providers: [
          {
            provide: ElementRef,
            useValue: { nativeElement: document.createElement('div') }
          }
        ],
      });

      @Component({
        selector: 'app-test',
        imports: [
          DialogModule
        ],
        template: `
          <div tw-dialog #centeredDialogWithBackdrop [isOpened]="true" (click)="centeredDialogWithBackdrop.close()">
            <!-- Dialog container -->
            <div tw-dialog-container>
              <!-- Dialog content -->
              <div class="grid gap-3 text-center sm:text-left">
                <h1 class="font-bold text-balance text-lg my-0 text-gray-700 dark:text-gray-300">
                  Out of stock
                </h1>
                <p class="text-sm text-gray-600 dark:text-gray-400 text-pretty">
                  The item in your cart is no longer available.
                </p>
              </div>
            </div>
          </div>
            `
      }) class TestComponent {

        dialog = viewChild.required(DialogComponent);
      }


      const testFixture = TestBed.createComponent(TestComponent);
      const testComponent = testFixture.componentInstance;
      const dialog = testComponent.dialog();
      testFixture.detectChanges();
      expect(dialog.config.get<DialogConfig>('ModalDialog').value.scrim).toEqual(DialogConfig().scrim);
    });
  });
});
