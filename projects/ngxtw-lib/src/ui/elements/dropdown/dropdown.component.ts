import { ChangeDetectionStrategy, Component, input, ViewEncapsulation } from '@angular/core';
import { PopupBaseDirective } from '../../../core/directives/popup-base.directive';
import { objectToArray } from '../../../core/helpers/object.helper';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { OverlayPosition } from '../../../core/types/layout/overlay-position.type';

/** Dropdown component */
@Component({
  selector: 'tw-dropdown, [tw-dropdown], [twDropdown]',
  exportAs: 'twDropdown',
  host: {
    '[@toggle]': 'isOpened() ? "opened" : "closed"'
  },
  template: `<ng-content />`,
  animations: [
    trigger('toggle', [
      state('opened', style({
        opacity: 1,
        visibility: 'visible',
        transform: 'scaleY(1)',
      })),
      state('closed', style({
        opacity: 0,
        visibility: 'hidden',
        transform: 'scaleY(0.95)',
      })),
      transition('closed => opened', [animate('20ms ease-out')]),
      transition('opened => closed', [animate('5ms ease-in')])
    ])
  ],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent extends PopupBaseDirective {
  position = input<OverlayPosition>({ top: 'top-2', right: 'right-0', });

  protected override onInit(): void {
    this.classList.base = this.classList.base.concat(objectToArray(this.position()));
    this._config.get('Dropdown').subscribe(config => this.classList.setFrom(config));
  }
}
