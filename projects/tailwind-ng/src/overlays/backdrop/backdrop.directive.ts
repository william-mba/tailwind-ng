import { Directive } from "@angular/core";
import { BackdropBase, classlist } from "@tailwind-ng/core";

@Directive({
  selector: 'tw-backdrop, [tw-backdrop], [twBackdrop]',
  exportAs: 'twBackdrop',
  host: {
    '[class]': 'classList.value()',
    '[attr.open]': 'opened || null',
  },
  providers: [{ provide: BackdropBase, useExisting: BackdropDirective }]
})
export class BackdropDirective extends BackdropBase {
  protected opened = false;

  override ngOnInit(): void {
    super.ngOnInit();
    this.opened = true;

    this._destroyRef.onDestroy(() => {
      this.opened = false;
    });
  }

  protected override buildStyle(): void {
    this.classList = classlist(this.class()).set(this.config);
  }
}
