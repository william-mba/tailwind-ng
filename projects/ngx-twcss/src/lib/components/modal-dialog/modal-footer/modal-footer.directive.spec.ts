import { ElementRef } from '@angular/core';
import { ModalFooter } from './modal-footer.directive';

describe('ModalFooterDirective', () => {
  it('should create an instance', () => {
    const directive = new ModalFooter(new ElementRef('tw-modal-footer'));
    expect(directive).toBeTruthy();
  });
});
