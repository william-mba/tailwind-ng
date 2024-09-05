import { Component, Input, OnInit, inject } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../../../core/helpers/config.helper';
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
export class DialogActionsComponent implements OnInit {
  private readonly config = inject(MODAL_DIALOG_CONFIG);
  
  @Input()
  public class!: string;

  ngOnInit(): void {
    this.class = mergeClassNames(toClassNames(this.config.actions), this.class);
  }
}

