import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { DropdownConfig } from './dropdown.config';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { Dropdown } from './dropdown.interface';
import { objectToArray } from '../../core/utils/object.util';
import { PopupBaseDirective } from '../../core/bases/popup-base.directive';
import { OverlayPosition } from '../../../../ngxtw-lib/src/lib/core/types/layout/position.type';

/** Dropdown component */
@Component({
  selector: 'tw-dropdown, [tw-dropdown], [twDropdown]',
  exportAs: 'twDropdown',
  standalone: true,
  host: {
    '[@toggle]': 'opened ? "opened" : "closed"'
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
export class DropdownComponent extends PopupBaseDirective implements Dropdown {
  @Input() position: OverlayPosition = { top: 'top-2', right: 'right-0', };

  setPosition(position: OverlayPosition): void {
    this.position = position;
    this.buildStyle();
  }

  protected override buildStyle(): void {
    this.classList.init(objectToArray(this.position));
    this._configManager.get<DropdownConfig>('Dropdown').subscribe(config => {
      this.classList.setFrom(config);
    });
  }
}
