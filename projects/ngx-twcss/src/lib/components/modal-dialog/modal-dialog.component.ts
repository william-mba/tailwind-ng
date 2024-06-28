import { Component, HostListener, Input, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { toClassName } from '../../core/helpers/config.helper';
import { ModalDialogConfig, ModalDialogConfigKey } from './modal-dialog.config';
import { BaseComponent } from '../base.component';

/**Modal Dialog component */
@Component({
  selector: 'tw-modal-dialog',
  standalone: true,
  templateUrl: './modal-dialog.component.html',
  styleUrl: './modal-dialog.component.css',
  animations: [
    trigger('modalPanelAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.95) translateY(1rem)'
        }),
        animate('300ms ease-out', style({
          opacity: 1,
          transform: 'scale(1) translateY(0)'
        })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({
          opacity: 0,
          transform: 'scale(0.95) translateY(1rem)'
        }))
      ])
    ]),
    trigger('modalBackdropAnimation', [
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
export class ModalDialog extends BaseComponent<ModalDialogConfig> implements OnInit {
  @Input() override className!: string;
  @Input() open: boolean = true;

  ngOnInit(): void {
    this.initConfig(ModalDialogConfigKey, ModalDialogConfig);
  }

  @HostListener('click', ['$event']) onClick(event: PointerEvent) {
    event.stopPropagation();
    this.open = !this.open;
  }
}
