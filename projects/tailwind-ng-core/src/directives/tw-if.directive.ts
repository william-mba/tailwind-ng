import { Directive, inject, Input, TemplateRef, ViewContainerRef } from "@angular/core";

/**
 * A structural directive that conditionally render a template in the view and defer its removal in the DOM.
 * As Tailwind NG components animations are Tailwind based, this directive it used to
 * defer the removal of template in the view using the given delay if set or after 300ms.
 * For eager removal, use the Angular built-in `*ngIf` or `@if` directive.
 * @publicApi
 */
@Directive({ selector: '[twIf]' })
// eslint-disable-next-line @angular-eslint/directive-class-suffix
export class TwIf {
  private readonly templateRef = inject(TemplateRef);
  private readonly viewContainerRef = inject(ViewContainerRef);

  /**
   * The delay in milliseconds before removing the component from the view.
   * Default value is `300`ms. The delay must be between 25ms and 5000ms.
   * Prefer using the Angular built-in `*ngIf` or `@if` directive for eager removal.
   */
  @Input() set twIfDelay(delay: number) {
    if (delay >= 25 && delay <= 5000) {
      this.delay = delay;
    }
  }

  private _shouldDisplay = false;

  /**
   * The condition that determines whether the component should be rendered or not.
   */
  @Input() set twIf(condition: boolean) {
    this._shouldDisplay = condition;
    // Only render the component if the condition is true and
    // the component is not already rendered.
    if (this._shouldDisplay && !this.timer) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.deferRemoval();
    }
  }

  private delay = 300;
  private timer: number | null = null;

  private deferRemoval() {
    // Nothing should be done if there is already a removal scheduled.
    if (this.timer) return;
    this.timer = setTimeout(() => {
      // Only remove the component if the condition is still false.
      // This is to avoid removing a component that was supposed
      // to be removed at the time of the removal schedule but
      // it condition become true before the end of the removal delay.
      if (!this._shouldDisplay) {
        this.viewContainerRef.clear();
      }
      this.timer = null;
    }, this.delay);
  }
}
