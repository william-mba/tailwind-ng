import { Directive, inject } from "@angular/core";
import { BaseDirective, ObservableConfig, ReactiveConfig } from '@tailwind-ng/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Directive({
  selector: 'tw-dialog-backdrop, [tw-dialog-backdrop], [twDialogBackdrop]',
  exportAs: 'twDialogBackdrop',
})// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class DialogBackdrop extends BaseDirective implements ObservableConfig {
  config$ = inject(ReactiveConfig).get('Dialog').pipe(takeUntilDestroyed());

  override onInit() {
    this.config$.subscribe(config => {
      this.classList.set(config.backdrop);
    });
  }
}
