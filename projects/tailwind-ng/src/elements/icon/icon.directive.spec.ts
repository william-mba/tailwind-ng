/* eslint-disable @angular-eslint/component-selector */
import { ClassName } from '@tailwind-ng/core';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { IconDirective } from './icon.directive';
import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';
import { provideIcon } from './icon.directive.config';
import { By } from '@angular/platform-browser';

describe('IconDirective', () => {
  let component: IconDirective;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: { nativeElement: document.createElement('tw-icon') }
        },
        {
          provide: ChangeDetectorRef,
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          useValue: { markForCheck: () => { } }
        },
        IconDirective,
        provideIcon({
          map: {
            'language': 'fake svg',
          }
        })
      ]
    });
    TestBed.runInInjectionContext(() => {
      component = TestBed.inject(IconDirective);
    });
  });

  it('should set size', () => {
    component.size = 'xl';
    expect(component.size).toBe('xl');

    component.size = 'lg';
    expect(component.size).toBe('lg');

    component.size = 'md';
    expect(component.size).toBe('md');

    component.size = 'sm';
    expect(component.size).toBe('sm');

    component.size = 'xs';
    expect(component.size).toBe('xs');
  });

  it('should apply style based on size', fakeAsync(() => {
    const config = {
      xs: '*:size-3',
      sm: '*:size-4',
      md: '*:size-5',
      lg: '*:size-6',
      xl: '*:size-7'
    };
    @Component({
      template: `
        <tw-icon name="language" />
        <tw-icon size="xs" name="language" />
        <tw-icon size="sm" name="language" />
        <tw-icon size="lg" name="language" />
        <tw-icon size="xl" name="language" />
        `,
      selector: 'app-test',
      imports: [IconDirective]
    }) class TestComponent { }

    const fixture = TestBed.createComponent(TestComponent);
    let icon: HTMLElement;
    fixture.detectChanges();
    tick();

    icon = fixture.debugElement.query(By.css('tw-icon')).nativeElement;
    fixture.detectChanges();
    expect(icon.classList).toContain(config.md);

    icon = fixture.debugElement.query(By.css('tw-icon[size="xs"]')).nativeElement;
    fixture.detectChanges();
    expect(icon.classList).toContain(config.xs);

    icon = fixture.debugElement.query(By.css('tw-icon[size="sm"]')).nativeElement;
    fixture.detectChanges();
    expect(icon.classList).toContain(config.sm);

    icon = fixture.debugElement.query(By.css('tw-icon[size="lg"]')).nativeElement;
    fixture.detectChanges();
    expect(icon.classList).toContain(config.lg);

    icon = fixture.debugElement.query(By.css('tw-icon[size="xl"]')).nativeElement;
    fixture.detectChanges();
    expect(icon.classList).toContain(config.xl);
  }, { flush: true }));

  it('should customize using class attribute', () => {
    const customizations = 'my-auto absolute right-3';

    @Component({
      selector: 'app-test',
      imports: [IconDirective],
      template: `
      <tw-icon class="my-auto absolute right-3" name="language" />
      `
    }) class TestComponent { }

    const fixture = TestBed.createComponent(TestComponent);
    const icon = fixture.debugElement.query(By.css('tw-icon')).nativeElement as HTMLElement;
    fixture.detectChanges()

    ClassName.toArray(customizations).forEach(c => {
      expect(icon.classList).toContain(c);
    })
  });
});

