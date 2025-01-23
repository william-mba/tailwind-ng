import { ChangeDetectionStrategy, Component, contentChild, ViewEncapsulation } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { BaseDirective, InputCheckboxBase, KBKey } from "@tailwind-ng/core";

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

    this.nativeElement.addEventListener('keydown', this.onKeydown.bind(this), true);

    this._destroyRef.onDestroy(() => {
      this.nativeElement.removeEventListener('keydown', this.onKeydown.bind(this), true);
    });
  }

  protected onKeydown(event: KeyboardEvent): void {
    if (KBKey.isSpace(event.key)) {
      event.preventDefault();
    }
    if (KBKey.isEnterOrSpace(event.key)) {
      this.input().nativeElement.click();
    } else if (KBKey.isNavigation(event.key)) {
      event.preventDefault();
      if (KBKey.isArrowDownOrRight(event.key)) {
        this.focus({
          behavior: "firstChild",
          target: this.nativeElement.parentElement?.nextElementSibling?.firstElementChild as HTMLElement
        });
      }
      if (KBKey.isArrowUpOrLeft(event.key)) {
        this.focus({
          behavior: "firstChild",
          target: this.nativeElement.parentElement?.previousElementSibling?.firstElementChild as HTMLElement
        });
      }
    }
  }
}
