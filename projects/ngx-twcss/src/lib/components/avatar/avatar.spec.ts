import { ElementRef } from '@angular/core';
import { Avatar } from './avatar';

describe('Avatar', () => {
  it('should create an instance', () => {
    const directive = new Avatar(new ElementRef('tw-avatar'));
    expect(directive).toBeTruthy();
  });
});
