import { TestBed } from '@angular/core/testing';
import { IconDirective } from './icon.directive';
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

});
