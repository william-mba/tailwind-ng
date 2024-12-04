import { Component, Input } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ModalDialogConfig } from './modal-dialog.config';
import { NgIf } from '@angular/common';
import { ModalDialog } from './modal-dialog.interface';
import { ClassName } from '../../../../ngxtw-lib/src/lib/core/types/class-name.type';
import { PopupBaseDirective } from '../../core/bases/popup-base.directive';
import { ClassList } from '../../core/configs/classlist';

/**Modal Dialog component */
@Component({
  selector: 'tw-dialog, [tw-dialog], [twDialog]',
  exportAs: 'twDialog',
  imports: [NgIf],
  standalone: true,
  animations: [
    trigger('dialogAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(.95)'
        }),
        animate('100ms ease-out', style({
          opacity: 1,
          transform: 'scale(1)'
        })),
      ]),
      transition(':leave', [
        animate('50ms ease-in', style({
          opacity: 0,
          transform: 'scale(.95)'
        }))
      ])
    ]),
    trigger('backdropAnimation', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        animate('300ms ease-out', style({
          opacity: 1
        }))
      ]),
      transition(':leave', [
        animate('100ms ease-in', style({
          opacity: 0
        }))
      ])
    ])
  ],
  template: `
  <!-- Backdrop -->
  <div @backdropAnimation *ngIf="opened" [class]="backdropClassList.value"></div>
  <!-- Scrim -->
  <div @dialogAnimation *ngIf="opened" [class]="scrimClassList.value">
    <!-- Dialog Container -->
    <div [class]="classList.value" role="dialog" aria-modal="true">
      <!-- Dialog Panel -->
      <ng-content select="twDialogPanel,tw-dialog-panel,[twDialogPanel],[tw-dialog-panel]" />
      <!-- Dialog Actions -->
      <ng-content select="twDialogActions,tw-dialog-actions,[twDialogActions],[tw-dialog-actions]" />
    </div>
  </div>`
})
export class ModalDialogComponent extends PopupBaseDirective implements ModalDialog {
  @Input() scrim: ClassName[] = [];
  @Input() backdrop: ClassName[] = [];
  readonly scrimClassList = new ClassList();
  readonly backdropClassList = new ClassList();

  override ngOnInit(): void {
    this.backdropClassList.init(this.backdrop);
    this.scrimClassList.init(this.scrim);
    super.ngOnInit();
  }

  protected override buildStyle(): void {
    this._configManager.get<ModalDialogConfig>('ModalDialog')
      .subscribe(config => {
        this.backdropClassList.setFrom(config.backdrop);
        this.scrimClassList.setFrom(config.scrim);
        this.classList.setFrom(config.container);
      });
  }
}
