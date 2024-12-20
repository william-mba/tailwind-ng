import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { PopoverBaseDirective } from '../../../core/directives/popover-base.directive';
import { OverlayPosition } from '../../../core/types/layout/overlay-position.type';

/** Dropdown component */
@Component({
  selector: 'tw-dropdown, [tw-dropdown], [twDropdown]',
  exportAs: 'twDropdown',
  template: `<ng-content />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  inputs: ['position']
})
export class DropdownComponent extends PopoverBaseDirective {
  position: OverlayPosition = { top: 'top-2', right: 'right-0', };

  protected override onInit(): void {
    this.classList.initFrom(this.position);
    this.config.get('Dropdown').subscribe(config => this.classList.setFrom(config));
  }
}
