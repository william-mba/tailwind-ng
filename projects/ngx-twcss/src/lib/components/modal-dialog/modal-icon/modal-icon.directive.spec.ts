import { ElementRef } from '@angular/core';
import { ModalIcon } from './modal-icon.directive';

describe('ModalIconDirective', () => {
  it('should create an instance', () => {
    const directive = new ModalIcon(new ElementRef('tw-modal-icon'));
    expect(directive).toBeTruthy();
  });
});
