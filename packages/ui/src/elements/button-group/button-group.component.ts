import { ChangeDetectionStrategy, Component, inject, ViewEncapsulation } from '@angular/core'
import { BUTTON_GROUP_CONFIG, ButtonGroupBase, classNameMerge } from '@tailwind-ng/core'

@Component({
  selector: 'tw-button-group, [tw-button-group], [twButtonGroup], tw-group, [tw-group], [twGroup]',
  exportAs: 'twButtonGroup',
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: ButtonGroupBase,
      useExisting: ButtonGroupComponent,
    },
  ],
})
export class ButtonGroupComponent extends ButtonGroupBase {
  protected override buildStyle(): void {
    this.nativeElement.className = classNameMerge(inject(BUTTON_GROUP_CONFIG), this.class)
  }
}
