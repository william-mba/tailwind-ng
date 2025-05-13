import { Directive, inject } from '@angular/core'
import {
  BaseDirective,
  classNameMerge,
  DIALOG_CONFIG,
  DialogBase,
  isEscape,
} from '@tailwind-ng/core'

@Directive({
  selector: 'tw-dialog-container, [tw-dialog-container], [twDialogContainer]',
  exportAs: 'twDialogContainer',
  host: {
    '[tabindex]': 'disabled ? null : -1',
  },
})
export class DialogContainerDirective extends BaseDirective {
  private readonly _dialog = inject(DialogBase, {
    skipSelf: true,
    host: true,
  })

  protected override buildStyle(): void {
    this.nativeElement.className = classNameMerge(inject(DIALOG_CONFIG).container, this.class)
  }

  protected onKeyup(event: KeyboardEvent): void {
    if (isEscape(event.key)) {
      event.stopPropagation()
      this._dialog.close()
    }
  }

  protected override addEventListeners(): void {
    super.addEventListeners()
    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false)
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners()
    this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false)
  }
}
