import { Component, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { ModalDialogConfig, ModalDialogConfigKey } from './modal-dialog.config';
import { BaseComponent } from '../base.component';
import { resolveStyle } from '../../core/helpers/config.helper';

/**Dialog footer element */
@Directive({
  selector: '[dialogFooter]',
  standalone: true
})
export class DialogFooter implements OnInit {
  @Input() className!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const baseStyle = 'bg-gray-50 dark:bg-neutral-900 px-4 py-3 grid gap-3 sm:flex sm:justify-end sm:items-center sm:px-6';
    const style = resolveStyle(baseStyle, this.className);
    this.el.nativeElement.className = style;
  }
}

/**Dialog body element */
@Directive({
  selector: '[dialogBody]',
  standalone: true
})
export class DialogBody implements OnInit {
  @Input() className!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const baseStyle = "bg-white dark:bg-neutral-900 px-4 pb-4 pt-5 sm:p-6 sm:pb-4";
    const style = resolveStyle(baseStyle, this.className);
    this.el.nativeElement.className = style;
  }
}

/**Dialog icon element */
@Directive({
  selector: '[dialogIcon]',
  standalone: true
})
export class DialogIcon implements OnInit {
  @Input() className!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const baseStyle = "mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-700 dark:bg-opacity-50 sm:mx-0 sm:h-10 sm:w-10";
    const style = resolveStyle(baseStyle, this.className);
    this.el.nativeElement.className = style;
  }
}

/**Dialog content element */
@Directive({
  selector: '[dialogContent]',
  standalone: true
})
export class DialogContent implements OnInit {
  @Input() className!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const baseStyle = "mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left";
    const style = resolveStyle(baseStyle, this.className);
    this.el.nativeElement.className = style;
  }
}

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
