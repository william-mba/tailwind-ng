import { Directive, inject, Input, TemplateRef, ViewContainerRef } from "@angular/core";

/**
 * A minimal structural directive that conditionally includes a template in the view.
 * When the condition is false, the template is removed after the given delay.
 * Useful to allow Tailwind CSS animations to complete before removing the component in the view.
 */
@Directive({ selector: '[twIf]' })
export class TwIf {
  private readonly templateRef = inject(TemplateRef);
  private readonly viewContainerRef = inject(ViewContainerRef);

  private delay = 300;
  /**
   * The delay in milliseconds to remove the component in the view
   * when the given expression evaluate to false.
   * The default value is 300ms.
   * The delay must be between 25ms and 5000ms.
   */
  @Input() set twIfDelay(delay: number) {
    if (delay >= 25 && delay <= 5000) {
      this.delay = delay;
    }
  }

  /**
   * The condition that determines whether the component should be rendered or removed in the view.
   */
  @Input() set twIf(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      setTimeout(() => {
        this.viewContainerRef.clear();
      }, this.delay);
    }
  }
}
