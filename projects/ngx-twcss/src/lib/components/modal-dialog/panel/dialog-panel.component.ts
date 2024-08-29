import { Component, Input, OnInit, inject } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { MODAL_DIALOG_CONFIG } from '../modal-dialog.config';

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
