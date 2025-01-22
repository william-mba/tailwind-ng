import { ChangeDetectionStrategy, Component, contentChild, ViewEncapsulation } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { BaseDirective, InputCheckboxBase } from "@tailwind-ng/core";

/**
 * @TailwindNG Input checkbox container.
 */
@Component({
  selector: 'tw-checkbox, [tw-checkbox], [twCheckbox]',
  exportAs: 'twCheckbox',
  template: `
  <ng-content select='input[type="checkbox"][tw-input], input[type="checkbox"][twInput]' />
  <ng-content select='tw-icon, [tw-icon], [twIcon]' />`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckboxComponent extends BaseDirective {
  readonly input = contentChild.required(InputCheckboxBase);
  protected override onInit(): void {
    this.input().config$.pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe(config => this.classList.set(config.container));
  }
}
