import { Component, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { trigger, style, animate, transition, query, animateChild, group } from '@angular/animations';
import { resolveStyle, toClassName } from '../../core/helpers/config.helper';
import { BaseConfig } from '../../configs/base.config';
import { NgIf } from '@angular/common';

/**Modal Dialog component */
@Component({
  selector: 'tw-modal-dialog',
  imports: [NgIf],
  standalone: true,
  styleUrls: ['./modal-dialog.component.css'],
  templateUrl: './modal-dialog.component.html',
  animations: [
    trigger('dialogAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(0px) scale(0.95)'
        }),
        animate('300ms ease-out', style({
          opacity: 1,
          transform: 'scale(1)'
        })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({
          opacity: 0,
          transform: 'translateY(0px) scale(0.95)'
        }))
      ])
    ]),
    trigger('backdropAnimation', [
      transition(':enter', [
        style({
          opacity: 0
        }),
        group([
          animate('300ms ease-out', style({
            opacity: 1
          })),
          query('@dialogAnimation', animateChild(), { optional: true })
        ])
      ]),
      transition(':leave', [
        group([
          animate('200ms ease-in', style({
            opacity: 0
          })),
          query('@dialogAnimation', animateChild(), { optional: true })
        ])
      ])
    ])
  ]
})
export class ModalDialog implements OnInit {
  private readonly config: Partial<BaseConfig> = {
    position: 'relative',
    borderRadius: 'rounded-lg',
    overflow: 'overflow-hidden',
    textAlign: 'text-left',
    shadow: 'shadow-xl',
    theme: {
      bgColor: 'bg-white',
      dark: {
        bgColor: 'dark:bg-neutral-900'
      }
    }
  }

  protected style!: string;

  @Input() className!: string;
  @Input() open: boolean = true;

  ngOnInit(): void {
    const base = toClassName(this.config);
    this.style = resolveStyle(base, this.className);
  }

  @HostListener('click', ['$event']) onClick(event: PointerEvent) {
    event.stopPropagation();
    this.open = !this.open;
  }
}

/**Dialog icon element */
@Component({
  selector: '[twDialogIcon], tw-dialog-icon',
  standalone: true,
  template: '<div [className]="style"><ng-content></ng-content></div>',
})
export class DialogIcon implements OnInit {
  private readonly config: Partial<BaseConfig> = {
    display: {
      type: 'flex',
      alignItem: 'items-center',
      justifyContent: 'justify-center'
    },
    size: 'size-12',
    margin: 'mx-auto',
    borderRadius: 'rounded-full',
    sm: {
      shrink: 'shrink-0',
      size: 'sm:size-10',
    },
    theme: {
      bgColor: 'bg-red-100',
      dark: {
        bgColor: 'dark:bg-red-700',
        bgOpacity: 'dark:bg-opacity-50'
      }
    }
  }

  @Input() className!: string;
  protected style!: string;

  ngOnInit(): void {
    const base = toClassName(this.config);
    this.style = resolveStyle(base, this.className);
  }
}

/**Dialog content element */
@Component({
  selector: '[twDialogContent], tw-dialog-content',
  standalone: true,
  template: '<div [className]="style"><ng-content></ng-content></div>'
})
export class DialogContent implements OnInit {
  private readonly config: Partial<BaseConfig> = {
    display: {
      type: 'grid',
      gap: 'gap-2',
    },
    textAlign: 'text-center',
    sm: "sm:text-left"
  }

  @Input() className!: string;
  protected style!: string;

  ngOnInit(): void {
    const base = toClassName(this.config);
    this.style = resolveStyle(base, this.className);
  }
}

/**Dialog actions element */
@Directive({
  selector: '[twDialogActions], tw-dialog-actions',
  standalone: true
})
export class DialogActions implements OnInit {
  private readonly config: Partial<BaseConfig> = {
    display: {
      type: 'grid',
      gap: 'gap-4',
    },
    padding: 'p-4',
    sm: {
      display: 'sm:flex',
      justifyContent: 'sm:justify-end',
    }
  }

  @Input() className!: string;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    const base = toClassName(this.config);
    const style = resolveStyle(base, this.className);
    this.el.nativeElement.className = style;
  }
}

