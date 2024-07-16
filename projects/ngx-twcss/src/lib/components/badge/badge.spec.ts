import { ElementRef } from '@angular/core';
import { Badge } from './badge';

describe('Badge', () => {
  it('should create an instance', () => {
    const directive = new Badge(new ElementRef('tw-badge'));
    expect(directive).toBeTruthy();
  });
});
