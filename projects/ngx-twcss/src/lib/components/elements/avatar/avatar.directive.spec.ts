import { TestBed } from '@angular/core/testing';
import { Avatar, IAvatar } from './avatar.directive';
import { provideAvatarConfig } from './avatar.config';
import { OnInit } from '@angular/core';

describe('Avatar Component', () => {
  let component: IAvatar & OnInit;
  const CUSTOM_CLASSNAMES = 'size-6 ring-2 ring-white';

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [provideAvatarConfig()]
    });

    TestBed.runInInjectionContext(() => {
      component = new Avatar();
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set class', () => {
    component.class = CUSTOM_CLASSNAMES;
    expect(component.class).toBe(CUSTOM_CLASSNAMES);
  })


  it('should set size', () => {
    const size = 'xl';
    component.size = size;
    expect(component.size).toBe(size);
  })

  it('should resolve class names', () => {
    spyOn(component, 'setConfig');
    const defaultClassName = 'items-center justify-center';
    const classToRemove = 'items- justify-';
    component.class = CUSTOM_CLASSNAMES + ' ' + classToRemove;

    component.ngOnInit();

    expect(component.setConfig).toHaveBeenCalled();
    expect(component.class).not.toContain(defaultClassName);
    expect(component.class).toContain(CUSTOM_CLASSNAMES);
  });
});
