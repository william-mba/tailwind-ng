import { Component, Input, OnInit, inject } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../../core/helpers/config.helper';
import { MODAL_DIALOG_CONFIG } from '../modal-dialog.config';

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

