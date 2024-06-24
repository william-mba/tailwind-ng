import { ElementRef } from '@angular/core';
import { Tooltip } from './tooltip.directive';

describe('TooltipDirective', () => {
  it('should create an instance', () => {
    const directive = new Tooltip(new ElementRef('tw-tooltip'));
    expect(directive).toBeTruthy();
  });
});
