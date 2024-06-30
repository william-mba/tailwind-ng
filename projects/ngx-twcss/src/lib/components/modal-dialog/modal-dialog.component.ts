import { Component, HostListener, Input, OnInit, inject } from '@angular/core';
import { trigger, style, animate, transition, query, animateChild, group } from '@angular/animations';
import { resolveClassName, toClassName } from '../../core/helpers/config.helper';
import { NgIf } from '@angular/common';
import { ModalDialogConfig, ModalDialogConfigKey } from './modal-dialog.config';
import { ConfigService } from '../../core/services/config.service';

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
  private _config = inject(ConfigService<ModalDialogConfig>);
  protected style!: string;
  @Input() className!: string;
  @Input() open: boolean = true;

  ngOnInit(): void {
    this._config.set(ModalDialogConfigKey, ModalDialogConfig)
      .get(ModalDialogConfigKey).subscribe((conf) => {
        const base = toClassName(conf.container);
        this.style = resolveClassName(base, this.className);
      });
  }

  @HostListener('click', ['$event']) onClick(event: PointerEvent) {
    event.stopPropagation();
    this.open = !this.open;
  }
}

/**Dialog icon element */
@Component({
  selector: 'tw-dialog-icon',
  standalone: true,
  template: '<div [className]="style"><ng-content></ng-content></div>',
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
  template: `
  <div [className]="style">
    <!-- Icon -->
    <ng-content select="tw-dialog-icon"></ng-content>
    <!-- Content -->
    <ng-content select="tw-dialog-content"></ng-content>
  </div>`
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

