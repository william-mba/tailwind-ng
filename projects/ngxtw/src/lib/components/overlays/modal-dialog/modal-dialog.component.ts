import { Component, Input, OnInit, inject } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { MODAL_DIALOG_CONFIG, ModalDialogConfig } from './modal-dialog.config';
import { NgIf } from '@angular/common';
import { ModalDialog } from './modal-dialog';

/**Modal Dialog component */
@Component({
  selector: 'tw-dialog',
  imports: [NgIf],
  standalone: true,
  styleUrls: ['./modal-dialog.component.css'],
  template: `
  <!-- Backdrop -->
  <div @backdropAnimation *ngIf="opened" [className]="backdrop"></div>
  <!-- Scrim -->
  <div *ngIf="opened" @dialogAnimation [className]="scrim">
    <!-- Dialog Container -->
    <div aria-labelledby="modal-title" role="dialog" aria-modal="true" [className]="class">
      <!-- Dialog Panel -->
      <ng-content select="tw-dialog-panel"></ng-content>
      <!-- Dialog Actions -->
      <ng-content select="tw-dialog-actions"></ng-content>
    </div>
  </div>`,
  animations: [
    trigger('dialogAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(.9)'
        }),
        animate('100ms ease-out', style({
          opacity: 1,
          transform: 'scale(1)'
        })),
      ]),
      transition(':leave', [
        animate('100ms ease-in', style({
          opacity: 0,
          transform: 'scale(.9)'
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
        animate('200ms ease-in', style({
          opacity: 0
        }))
      ])
    ])
  ]
})
export class ModalDialogComponent implements OnInit, ModalDialog {
  private readonly config = inject(MODAL_DIALOG_CONFIG);

  @Input()
  public class!: string;
  @Input()
  public scrim!: string;
  @Input()
  public backdrop!: string;
  @Input()
  public opened: boolean = true;

  ngOnInit(): void {
    this.setConfig(this.config);
  }

  public setConfig(config: Partial<ModalDialogConfig>): void {
    this.class = mergeClassNames(toClassNames(config.container!), this.class);
    this.scrim = mergeClassNames(toClassNames(config.scrim!), this.scrim);
    this.backdrop = mergeClassNames(toClassNames(config.backdrop!), this.backdrop);
  }
}
