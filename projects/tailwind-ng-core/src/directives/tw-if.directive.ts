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

  /**
   * The condition that determines whether the component should be rendered or not.
   */
  @Input() set twIf(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      if (!this.timer) {
        this.deferRemoval();
      } else {
        clearTimeout(this.timer);
        this.deferRemoval();
      }
    }
  }

  private delay = 300;
  private timer: number | null = null;

  private deferRemoval() {
    this.timer = setTimeout(() => {
      this.viewContainerRef.clear();
      this.timer = null;
    }, this.delay);
  }
}
