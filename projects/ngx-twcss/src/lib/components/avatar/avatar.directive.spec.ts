import { Avatar } from './avatar.directive';

describe('Avatar Component', () => {
  let component: Avatar;
  const CUSTOM_CLASSNAMES = 'size-6 ring-2 ring-white';

  beforeEach(async () => {
    component = new Avatar();
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
    spyOn(component, 'setClassNames');
    const defaultClassName = 'items-center justify-center';
    const classToRemove = 'items- justify-';
    component.class = CUSTOM_CLASSNAMES + ' ' + classToRemove;

    component.ngOnInit();

    expect(component.setClassNames).toHaveBeenCalled();
    expect(component.class).not.toContain(defaultClassName);
    expect(component.class).toContain(CUSTOM_CLASSNAMES);
  });
});
