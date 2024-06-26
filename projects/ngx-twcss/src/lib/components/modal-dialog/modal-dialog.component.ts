import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { Backdrop } from './backdrop/backdrop.component';
import { trigger, style, animate, transition } from '@angular/animations';
import { resolveStyle } from '../../core/helpers/config.helper';

/**Modal Dialog component */
@Component({
  selector: 'tw-modal-dialog',
  standalone: true,
  imports: [Backdrop],
  templateUrl: './modal-dialog.component.html',
  animations: [
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
    ]),
    trigger('modalPanelAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(0.9) translateY(1rem)'
        }),
        animate('300ms ease-out', style({
          opacity: 1,
          transform: 'scale(1) translateY(0)'
        }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({
          opacity: 0,
          transform: 'scale(0.9) translateY(1rem)'
        }))
      ])
    ])
  ]
})
export class ModalDialog implements OnInit {
  @Input() className!: string;
  @Input() open: boolean = false;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const baseStyle = 'bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4';
    const style = resolveStyle(baseStyle, this.className);
    this.className = style;
  }

  @HostListener('click', ['$event'])
  onClick(event: PointerEvent) {
    event.stopPropagation();
    this.open = !this.open;
  }
}
