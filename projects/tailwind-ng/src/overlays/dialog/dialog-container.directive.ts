import { afterNextRender, Directive, inject, Input } from "@angular/core";
import { BaseDirective, ObservableConfig, ReactiveConfig } from '@tailwind-ng/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Directive({
  selector: 'tw-dialog-container, [tw-dialog-container], [twDialogContainer]',
  exportAs: 'twDialogContainer',
  host: {
    role: 'dialog',
    '[attr.aria-modal]': 'isModal',
    '[tabindex]': 'isDisabled ? null : 0',
  }
}) // eslint-disable-next-line @angular-eslint/directive-class-suffix
export class DialogContainer extends BaseDirective implements ObservableConfig {
  @Input() isModal: 'true' | 'false' = 'true';
  config$ = inject(ReactiveConfig).get('Dialog').pipe(takeUntilDestroyed());

  constructor() {
    super();
    afterNextRender({
      read: () => {
        this.nativeElement.ariaLabel = this.nativeElement.querySelector('h1')?.textContent?.trim() || null;
      },
    })
  }

  protected override onInit() {
    this.config$.subscribe(config => {
      this.classList.setFrom(config.container);
    });
  }
}
