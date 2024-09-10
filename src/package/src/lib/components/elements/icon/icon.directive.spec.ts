import { TestBed } from '@angular/core/testing';
import { IconDirective } from './icon.directive';
import { ElementRef, OnInit } from '@angular/core';
import { Icon } from './icon';
import { provideIconConfig } from './icon.config';

describe('Icon Component', () => {
  let component: Icon & OnInit;
  const CUSTOM_CLASSNAMES = 'text-yellow-500';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: ElementRef,
        useValue: { nativeElement: document.createElement('TW-ICON') }
      },
      provideIconConfig()]
    })
    TestBed.runInInjectionContext(() => {
      component = new IconDirective();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set class', () => {
    component.class = CUSTOM_CLASSNAMES;
    expect(component.class).toBe(CUSTOM_CLASSNAMES);
  });

  it('should set size', () => {
    const size = 'lg';
    component.size = 'lg';
    expect(component.size).toBe(size);
  });

  it('should merge class names', () => {
    spyOn(component, 'setClassNames');
    component.class = CUSTOM_CLASSNAMES;

    component.ngOnInit();

    expect(component.setClassNames).toHaveBeenCalled();
    expect(component.class).toContain(CUSTOM_CLASSNAMES);
  });

});
