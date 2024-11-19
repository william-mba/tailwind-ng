import { ButtonComponent } from './button.component';
import { ButtonConfig, ButtonVariant, provideButtonConfig } from './button.config';
import { ApplicationRef, ChangeDetectorRef, Component, DebugElement, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveConfigManager } from '../../core/configs/reactive-config-manager';
import { IconDirective } from '../icon/icon.component';
import { objectToArray } from 'ngxtw';
import { objectToString } from '../../core/utils/object.util';
import { Button } from './button.interface';
import { SizeOption } from '../../core/types/size-options.type';

fdescribe('Button component', () => {
  let config: ButtonConfig;

  beforeEach(() => {
    config = TestBed.inject(ReactiveConfigManager).get<ButtonConfig>('Button').value;
  });

  it('should be primary by default', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.variant).toBe('primary');
    expect(component.nativeElement.classList.contains(config.primary.bgColor!)).toBe(true);
  });

  it('should be medium by default', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.size).toBe('md');
  });

  it('should not be FAB by default', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.isFab).toBe(false);
    expect(component.nativeElement.classList.contains(config.fab.boxShadow!)).toBe(false);
  });

  fdescribe('Variant', () => {
    it('should apply class based on the variant attribute', () => {
      @Component({
        template: `
        <button tw-button variant="primary">Button text</button>
        <button tw-button variant="secondary">Button text</button>
        <button tw-button variant="tonal">Button text</button>
        <button tw-button variant="text">Button text</button>
        `,
        selector: 'app-test',
        standalone: true,
        imports: [ButtonComponent]
      }) class TestComponent { }

      const fixture = TestBed.createComponent(TestComponent);
      let button: HTMLButtonElement;

      button = fixture.debugElement.query(By.css('button[variant=text]')).nativeElement;
      fixture.detectChanges();
      expect(button.classList).toContain(config.text.textColor!);
      expect(button.classList).not.toContain(config.text.backdrop!);
      expect(button.classList).not.toContain(config.text.bgColor!);

      button = fixture.debugElement.query(By.css('button[variant=secondary]')).nativeElement;
      fixture.detectChanges();
      expect(button.classList).toContain(config.secondary.bgColor!);
      expect(button.classList).toContain(config.secondary.textColor!);
      expect(button.classList).toContain(config.secondary.backdrop!);
      expect(button.classList).toContain(config.secondary.ringWidth!);

      button = fixture.debugElement.query(By.css('button[variant=tonal]')).nativeElement;
      fixture.detectChanges();
      expect(button.classList).toContain(config.tonal.bgColor!);
      expect(button.classList).toContain(config.tonal.textColor!);
      expect(button.classList).toContain(config.tonal.backdrop!);
      expect(button.classList).not.toContain(config.tonal.borderWidth!);
      expect(button.classList).not.toContain(config.tonal.ringWidth!);
      expect(button.classList).not.toContain(config.tonal.outlineWidth!);

      button = fixture.debugElement.query(By.css('button[variant=primary]')).nativeElement;
      fixture.detectChanges();
      expect(button.classList).toContain(config.primary.bgColor!);
      expect(button.classList).toContain(config.primary.textColor!);
    });

    fit('should apply class based on the setVariant method', () => {
      @Component({
        template: `
        <button tw-button #button>Button text</button>
        `,
        selector: 'app-test',
        standalone: true,
        imports: [ButtonComponent]
      }) class TestComponent { }

      const fixture = TestBed.createComponent(TestComponent);
      let button: Button = fixture.debugElement.query(By.directive(ButtonComponent)).componentInstance;

      button.setVariant('tonal');
      fixture.detectChanges();
      expect(button.class).toContain(config.tonal.bgColor!);
      expect(button.class).toContain(config.tonal.textColor!);
      expect(button.class).toContain(config.tonal.backdrop!);
      expect(button.class).not.toContain(config.tonal.borderWidth!);
      expect(button.class).not.toContain(config.tonal.ringWidth!);
      expect(button.class).not.toContain(config.tonal.outlineWidth!);

      // button.setVariant('text');
      // fixture.detectChanges();
      // expect(button.classList).toContain(config.text.textColor!);
      // expect(button.classList).not.toContain(config.text.backdrop!);
      // expect(button.classList).not.toContain(config.text.bgColor!);

      // button.setVariant('secondary');
      // fixture.detectChanges();
      // expect(button.classList).toContain(config.secondary.bgColor!);
      // expect(button.classList).toContain(config.secondary.textColor!);
      // expect(button.classList).toContain(config.secondary.backdrop!);
      // expect(button.classList).toContain(config.secondary.ringWidth!);

      // button = fixture.debugElement.query(By.css('button[variant=primary]')).nativeElement;
      // fixture.changeDetectorRef.markForCheck();
      // fixture.detectChanges();
      // expect(button.classList).toContain(config.primary.bgColor!);
      // expect(button.classList).toContain(config.primary.textColor!);
    });
  })

  it('should set size attribute', () => {
    const fixture = TestBed.createComponent(ButtonComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    component.size = 'sm';
    expect(component.size).toBe('sm');
    component.size = 'md';
    expect(component.size).toBe('md');
    component.size = 'lg';
    expect(component.size).toBe('lg');
  });

  it('should set variant attribute', () => {
    @Component({
      template: `<button tw-button [attr.variant]="variant" [attr.size]="size" [attr.isFab]="isFab"></button>`,
      selector: 'app-test',
      standalone: true,
      imports: [ButtonComponent]
    }) class TestComponent {
      variant: ButtonVariant = 'primary';
      size: SizeOption = 'md';
      isFab: boolean = false;
    }

    TestBed.resetTestingModule();
    TestBed.configureTestingModule({
      imports: [TestComponent, ButtonComponent],
      providers: [provideButtonConfig()]
    }).compileComponents();

    const fixture = TestBed.createComponent(TestComponent);
    const testApp = fixture.debugElement.componentInstance;
    const testButton = fixture.debugElement.query(By.css('button')).nativeElement as HTMLButtonElement;

    testApp.variant = 'text';
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();
    expect(testButton.getAttribute('variant')).toBe('text');

    testApp.variant = 'secondary';
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();
    expect(testButton.getAttribute('variant')).toBe('secondary');

    testApp.variant = 'tonal';
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();
    expect(testButton.getAttribute('variant')).toBe('tonal');

    testApp.variant = 'primary';
    fixture.changeDetectorRef.markForCheck();
    fixture.detectChanges();
    expect(testButton.getAttribute('variant')).toBe('primary');
  });
});



