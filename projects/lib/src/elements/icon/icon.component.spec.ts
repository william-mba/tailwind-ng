import { TestBed } from '@angular/core/testing';
import { IconDirective } from './icon.component';
import { ElementRef } from '@angular/core';
import { provideIconConfig } from './icon.config';

describe('Icon Component', () => {
  let component: IconDirective;
  const CUSTOM_CLASSNAMES = ['text-yellow-500'];

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
    spyOn(component, 'setClassList');
    component.class = CUSTOM_CLASSNAMES;

    component.ngOnInit();

    expect(component.setClassList).toHaveBeenCalled();
    expect(component.class).toContain(CUSTOM_CLASSNAMES.join(' '));
  });

});
