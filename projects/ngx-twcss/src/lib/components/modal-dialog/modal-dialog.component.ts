import { Component, Input, OnInit, inject } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { mergeClassNames, toClassNames } from '../../core/helpers/config.helper';
import { MODAL_DIALOG_CONFIG, ModalDialogConfig } from './modal-dialog.config';
import { NgIf } from '@angular/common';

/**Modal Dialog component */
@Component({
  selector: 'tw-dialog',
  imports: [NgIf],
  standalone: true,
  styleUrls: ['./modal-dialog.component.css'],
  template: `
  <!-- Backdrop -->
  <div @backdropAnimation *ngIf="open" [className]="backdrop"></div>
  <!-- Scrim -->
  <div *ngIf="open" @dialogAnimation [className]="scrim">
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
export class DialogContainer implements OnInit {
  private config = inject(MODAL_DIALOG_CONFIG);
  @Input() class!: string;
  @Input() scrim!: string;
  @Input() backdrop!: string;
  @Input() open: boolean = true;

  ngOnInit(): void {
    this.setConfig(this.config);
  }

  setConfig(config: Partial<ModalDialogConfig>): void {
    this.class = mergeClassNames(toClassNames(config.container!), this.class);
    this.scrim = mergeClassNames(toClassNames(config.scrim!), this.scrim);
    this.backdrop = mergeClassNames(toClassNames(config.backdrop!), this.backdrop);
  }
}

/**Dialog icon element */
@Component({
  selector: 'tw-dialog-icon',
  standalone: true,
  host: {
    '[class]': 'class'
  },
  template: '<ng-content></ng-content>'
})
export class DialogIcon implements OnInit {
  private config = inject(MODAL_DIALOG_CONFIG);
  @Input() class!: string;

  ngOnInit(): void {
    this.class = toClassNames(this.config.icon);
  }
}

/**Dialog panel element */
@Component({
  selector: 'tw-dialog-panel',
  standalone: true,
  host: {
    '[class]': 'class'
  },
  template: '<ng-content></ng-content>'
})
export class DialogPanel implements OnInit {
  private config = inject(MODAL_DIALOG_CONFIG);
  @Input() class!: string;

  ngOnInit(): void {
    this.class = mergeClassNames(toClassNames(this.config.panel), this.class);
  }
}

/**Dialog content element */
@Component({
  selector: 'tw-dialog-content',
  standalone: true,
  host: {
    '[class]': 'class'
  },
  template: '<ng-content></ng-content>'
})
export class DialogContent implements OnInit {
  private config = inject(MODAL_DIALOG_CONFIG);
  @Input() class!: string;

  ngOnInit(): void {
    this.class = mergeClassNames(toClassNames(this.config.content), this.class);
  }
}

/**Dialog actions element */
@Component({
  selector: 'tw-dialog-actions, [tw-dialog-actions]',
  standalone: true,
  host: {
    '[class]': 'class'
  },
  template: '<ng-content></ng-content>'
})
export class DialogActions implements OnInit {
  private config = inject(MODAL_DIALOG_CONFIG);
  @Input() class!: string;

  ngOnInit(): void {
    this.class = mergeClassNames(toClassNames(this.config.actions), this.class);
  }
}

