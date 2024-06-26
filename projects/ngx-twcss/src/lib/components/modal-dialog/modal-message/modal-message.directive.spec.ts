import { ElementRef } from '@angular/core';
import { ModalMessage } from './modal-message.directive';

describe('ModalMessageDirective', () => {
  it('should create an instance', () => {
    const directive = new ModalMessage(new ElementRef('tw-modal-message'));
    expect(directive).toBeTruthy();
  });
});
