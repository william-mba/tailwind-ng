import { ElementRef } from '@angular/core';
import { Avatar } from './avatar.directive';

describe('AvatarDirective', () => {
  it('should create an instance', () => {
    const directive = new Avatar(new ElementRef('tw-avatar'));
    expect(directive).toBeTruthy();
  });
});
