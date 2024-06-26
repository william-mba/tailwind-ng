import { ElementRef } from '@angular/core';
import { ModalTitle } from './modal-title.directive';

describe('ModalTitleDirective', () => {
  it('should create an instance', () => {
    const directive = new ModalTitle(new ElementRef('tw-modal-title'));
    expect(directive).toBeTruthy();
  });
});
