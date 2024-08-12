import { Component, Input, OnInit, inject } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { mergeClassNames, toClassNames } from '../../core/helpers/config.helper';
import { ModalDialogConfig, ModalDialogConfigKey } from './modal-dialog.config';
import { ConfigService } from '../../core/services/config.service';
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
    <div aria-labelledby="modal-title" role="dialog" aria-modal="true" [className]="config">
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
  private config$ = inject(ConfigService).get<ModalDialogConfig>(ModalDialogConfigKey);
  private _class!: string;
  @Input() config!: string;
  @Input() class!: string;
  @Input() scrim!: string;
  @Input() backdrop!: string;
  @Input() open: boolean = true;

  ngOnInit(): void {
    if (this.config) return;
    this._class = this.class;

    this.config$.subscribe((value) => {
      this.setConfig(value);
    });
  }

  setConfig(config: Partial<ModalDialogConfig> = ModalDialogConfig): void {
    this.config = mergeClassNames(toClassNames(config.container!), this._class);
    this.scrim = mergeClassNames(toClassNames(config.scrim!), this.scrim);
    this.backdrop = mergeClassNames(toClassNames(config.backdrop!), this.backdrop);
  }
}

/**Dialog icon element */
@Component({
  selector: 'tw-dialog-icon',
  standalone: true,
  host: {
    '[class]': 'config'
  },
  template: '<ng-content></ng-content>'
})
export class DialogIcon implements OnInit {
  private config$ = inject(ConfigService).get<ModalDialogConfig>(ModalDialogConfigKey);
  private _class!: string;
  @Input() config!: string;
  @Input() class!: string;

  ngOnInit(): void {
    if (this.config) return;
    this._class = this.class;
    this.config$.subscribe((conf) => {
      this.config = mergeClassNames(toClassNames(conf.icon), this._class);
    });
  }
}

/**Dialog panel element */
@Component({
  selector: 'tw-dialog-panel',
  standalone: true,
  host: {
    '[class]': 'config'
  },
  template: '<ng-content></ng-content>'
})
export class DialogPanel implements OnInit {
  private config$ = inject(ConfigService).get<ModalDialogConfig>(ModalDialogConfigKey);
  private _class!: string;
  @Input() config!: string;
  @Input() class!: string;

  ngOnInit(): void {
    if (this.config) return;
    this._class = this.class;
    this.config$.subscribe((conf) => {
      this.config = mergeClassNames(toClassNames(conf.panel), this._class);
    });
  }
}

/**Dialog content element */
@Component({
  selector: 'tw-dialog-content',
  standalone: true,
  host: {
    '[class]': 'config'
  },
  template: '<ng-content></ng-content>'
})
export class DialogContent implements OnInit {
  private config$ = inject(ConfigService).get<ModalDialogConfig>(ModalDialogConfigKey);
  private _class!: string;
  @Input() config!: string;
  @Input() class!: string;

  ngOnInit(): void {
    if (this.config) return;
    this._class = this.class;
    this.config$.subscribe((conf) => {
      this.config = mergeClassNames(toClassNames(conf.content), this._class);
    });
  }
}

/**Dialog actions element */
@Component({
  selector: 'tw-dialog-actions, [tw-dialog-actions]',
  standalone: true,
  host: {
    '[class]': 'config'
  },
  template: '<ng-content></ng-content>'
})
export class DialogActions implements OnInit {
  private config$ = inject(ConfigService).get<ModalDialogConfig>(ModalDialogConfigKey);
  private _class!: string;
  @Input() config!: string;
  @Input() class!: string;

  ngOnInit(): void {
    if (this.config) return;
    this._class = this.class;
    this.config$.subscribe((conf) => {
      this.config = mergeClassNames(toClassNames(conf.actions), this._class);
    });
  }
}

