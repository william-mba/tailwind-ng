import { Component, Input, OnInit, inject } from '@angular/core';
import { mergeClassNames, toClassNames } from '../../../../core/helpers/config.helper';
import { MODAL_DIALOG_CONFIG } from '../modal-dialog.config';

/**Dialog content element */
@Component({
  selector: 'tw-dialog-content',
  standalone: true,
  host: {
    '[class]': 'class'
  },
  template: '<ng-content></ng-content>'
})
export class DialogContentComponent implements OnInit {
  private readonly config = inject(MODAL_DIALOG_CONFIG);
  
  @Input()
  public class!: string;

  ngOnInit(): void {
    this.class = mergeClassNames(toClassNames(this.config.content), this.class);
  }
}
