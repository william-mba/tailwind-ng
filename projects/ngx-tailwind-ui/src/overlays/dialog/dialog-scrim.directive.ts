import { Directive, inject } from '@angular/core';
import { BaseDirective, ObservableConfig, ReactiveConfig } from '@ngx-tailwind/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

/** Dialog scrim */
@Directive({
  selector: 'tw-dialog-scrim, [tw-dialog-scrim], [twDialogScrim]',
  exportAs: 'twDialogScrim'
}) // eslint-disable-next-line @angular-eslint/directive-class-suffix
export class DialogScrim extends BaseDirective implements ObservableConfig {
  config$ = inject(ReactiveConfig).get('Dialog').pipe(takeUntilDestroyed());

  protected override onInit(): void {
    this.config$.subscribe(config => {
      this.classList.setFrom(config.scrim!);
    });
  }
}
