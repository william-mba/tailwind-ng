import { ElementRef } from '@angular/core';
import { ButtonGroup } from './button-group';

describe('ButtonGroup', () => {
  it('should create an instance', () => {
    const directive = new ButtonGroup(new ElementRef('tw-button-group'));
    expect(directive).toBeTruthy();
  });
});
