import { Component, Input, OnInit, inject } from '@angular/core';
import { toClassNames } from '../../../../core/helpers/config.helper';
import { MODAL_DIALOG_CONFIG } from '../modal-dialog.config';

/**Dialog icon element */
@Component({
  selector: 'tw-dialog-icon',
  standalone: true,
  host: {
    '[class]': 'class'
  },
  template: '<ng-content></ng-content>'
})
export class DialogIconComponent implements OnInit {
  private readonly config = inject(MODAL_DIALOG_CONFIG);

  @Input()
  public class!: string;

  ngOnInit(): void {
    this.class = toClassNames(this.config.icon);
  }
}
