import { Component, Input, OnInit, inject } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';
import { resolveClassName, toClassName } from '../../core/helpers/config.helper';
import { ModalDialogConfig, ModalDialogConfigKey } from './modal-dialog.config';
import { ConfigService } from '../../core/services/config.service';
import { NgIf } from '@angular/common';

/**Modal Dialog component */
@Component({
  selector: 'tw-dialog',
  imports: [NgIf],
  standalone: true,
  styleUrls: ['./modal-dialog.component.css'],
  templateUrl: './modal-dialog.component.html',
  animations: [
    trigger('dialogAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'scale(.9)'
        }),
        animate('300ms cubic-bezier(.1, 1, .1, 1)', style({
          opacity: 1,
          transform: 'scale(1)'
        })),
      ]),
      transition(':leave', [
        style({
          transform: 'scale(1.05)'
        }),
        animate('100ms', style({
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
  private _config = inject(ConfigService<ModalDialogConfig>);
  protected config!: string;
  @Input() className!: string;
  @Input() scrim!: string;
  @Input() backdrop!: string;
  @Input() open: boolean = true;

  ngOnInit(): void {
    this._config.set(ModalDialogConfigKey, ModalDialogConfig)
      .get(ModalDialogConfigKey).subscribe((conf) => {
        let base = toClassName(conf.container);
        this.config = resolveClassName(base, this.className);
        base = toClassName(conf.scrim);
        this.scrim = resolveClassName(base, this.scrim);
        base = toClassName(conf.backdrop);
        this.backdrop = resolveClassName(base, this.backdrop);
      });
  }
}

/**Dialog icon element */
@Component({
  selector: 'tw-dialog-icon',
  standalone: true,
  template: '<div [className]="style"><ng-content></ng-content></div>'
})
export class DialogIcon implements OnInit {
  private _config = inject(ConfigService<ModalDialogConfig>);
  protected style!: string;

  @Input() className!: string;

  ngOnInit(): void {
    this._config.get(ModalDialogConfigKey).subscribe((conf) => {
      const base = toClassName(conf.icon);
      this.style = resolveClassName(base, this.className);
    });
  }
}

/**Dialog panel element */
@Component({
  selector: 'tw-dialog-panel',
  standalone: true,
  template: '<div [className]="style"><ng-content></ng-content></div>'
})
export class DialogPanel implements OnInit {
  private _config = inject(ConfigService<ModalDialogConfig>);
  protected style!: string;

  @Input() className!: string;

  ngOnInit(): void {
    this._config.get(ModalDialogConfigKey).subscribe((conf) => {
      const base = toClassName(conf.panel);
      this.style = resolveClassName(base, this.className);
    });
  }
}

/**Dialog content element */
@Component({
  selector: 'tw-dialog-content',
  standalone: true,
  template: '<div [className]="style"><ng-content></ng-content></div>'
})
export class DialogContent implements OnInit {
  private _config = inject(ConfigService<ModalDialogConfig>);
  protected style!: string;

  @Input() className!: string;

  ngOnInit(): void {
    this._config.get(ModalDialogConfigKey).subscribe((conf) => {
      const base = toClassName(conf.content);
      this.style = resolveClassName(base, this.className);
    });
  }
}

/**Dialog actions element */
@Component({
  selector: 'tw-dialog-actions',
  standalone: true,
  template: '<div [className]="style"><ng-content></ng-content></div>'
})
export class DialogActions implements OnInit {
  private _config = inject(ConfigService<ModalDialogConfig>);
  protected style!: string;

  @Input() className!: string;

  ngOnInit(): void {
    this._config.get(ModalDialogConfigKey).subscribe((conf) => {
      const base = toClassName(conf.actions);
      this.style = resolveClassName(base, this.className);
    });
  }
}

