import { TestBed } from '@angular/core/testing';
import { Icon } from './icon.directive';
import { ElementRef } from '@angular/core';

describe('Icon Component', () => {
  let component: Icon;
  const CUSTOM_CLASSNAMES = 'text-yellow-500';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: ElementRef,
        useValue: { nativeElement: document.createElement('TW-ICON') }
      }]
    })
    TestBed.runInInjectionContext(() => {
      component = new Icon();
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
