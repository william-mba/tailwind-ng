import { By } from '@angular/platform-browser';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { DialogConfig } from './dialog.config';
import { DialogComponent } from './dialog.component';
import { DialogModule } from './dialog.module';
import { Component, ElementRef, viewChild } from '@angular/core';
import { DialogBackdrop } from './dialog-backdrop.directive';
import { ButtonComponent } from '../../elements/button/button.component';
import { DialogContainer } from './dialog-container.directive';
import { ClassList } from '../../../config/classlist';
import { DialogScrim } from './dialog-scrim.directive';
import { NgIf } from '@angular/common';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

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

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should open', () => {
    expect(component.isOpened).toBeFalse();
    component.open();
    expect(component.isOpened).toBeTrue();
  });

  it('should close', () => {
    expect(component.isOpened).toBeFalse();
    component.open();
    expect(component.isOpened).toBeTrue();
    component.close();
    expect(component.isOpened).toBeFalse();
  });

  it('should auto close after specified display duration', fakeAsync(() => {
    const duration = 1000;
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    component.isAutoClose = true;
    component.displayDuration = duration;
    fixture.detectChanges();

    spyOn(component, 'closeAfter').and.callThrough();
    spyOn(component, 'close').and.callThrough();

    expect(component.isAutoClose).toBeTrue();
    expect(component.isOpened).toBeFalse();
    expect(component.displayDuration).toBe(duration);

    component.open();
    expect(component.isOpened).toBeTrue();

    tick(duration / 2);
    expect(component.isOpened).toBeTrue();

    tick(duration / 2);
    expect(component.isOpened).toBeFalse();
    expect(component.closeAfter).toHaveBeenCalled();
    expect(component.closeAfter).toHaveBeenCalledWith(duration);
    expect(component.closeAfter).toHaveBeenCalledTimes(1);
    expect(component.close).toHaveBeenCalled();
    expect(component.close).toHaveBeenCalledTimes(1);
  }, { flush: true }));

  it('should not auto close if isAutoClose is false', fakeAsync(() => {
    const duration = 1000;
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    component.displayDuration = duration;
    fixture.detectChanges();

    spyOn(component, 'closeAfter').and.callThrough();
    spyOn(component, 'close').and.callThrough();

    expect(component.isAutoClose).toBeFalse();
    expect(component.isOpened).toBeFalse();
    expect(component.displayDuration).toBe(duration);

    component.open();
    expect(component.isOpened).toBeTrue();

    tick(duration);
    expect(component.isOpened).toBeTrue();
    expect(component.closeAfter).not.toHaveBeenCalled();
    expect(component.close).not.toHaveBeenCalled();
  }));

  it('should set transition duration', () => {
    component.animationsDuration = 500;
    expect(component.animationsDuration).toBe(500);
  });

  it('should get config', () => {
    expect(component.config.get<DialogConfig>('ModalDialog').value).toEqual(DialogConfig());
  });

  describe('Container', () => {
    it('should set classList', () => {
      @Component({
        imports: [DialogModule, DialogBackdrop, ButtonComponent],
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
          <!-- Dialog actions -->
          <div class="flex justify-end">
            <button tw-button class="w-full sm:w-fit">OK</button>
          </div>
        </div>
      </div>
      `
      }) class TestComponent {
        container = viewChild(DialogContainer);
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

      const classList = new ClassList().setFrom(DialogConfig().container);
      expect(component.container()!.classList.value).toEqual(classList.value);
    });

    it('should get config', () => {
      expect(component.config.get<DialogConfig>('ModalDialog').value.container).toEqual(DialogConfig().container);
    });
  });

  describe('Backdrop', () => {
    it('should set classList', () => {
      @Component({
        imports: [DialogModule, DialogBackdrop, ButtonComponent],
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
          <!-- Dialog actions -->
          <div class="flex justify-end">
            <button tw-button class="w-full sm:w-fit">OK</button>
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
      expect(component.config.get<DialogConfig>('ModalDialog').value.backdrop).toEqual(DialogConfig().backdrop);
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
          NgIf,
          ButtonComponent,
          DialogModule,
          DialogBackdrop
        ],
        template: `
          <div tw-dialog #centeredDialogWithBackdrop [isOpened]="true" (click)="centeredDialogWithBackdrop.close()">
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
              <!-- Dialog actions -->
              <div class="flex justify-end">
                <button tw-button class="w-full sm:w-fit">OK</button>
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
      expect(component.config.get<DialogConfig>('ModalDialog').value.scrim).toEqual(DialogConfig().scrim);
    });
  });
});
