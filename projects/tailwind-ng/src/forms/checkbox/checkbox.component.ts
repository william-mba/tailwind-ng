import { ChangeDetectionStrategy, Component, forwardRef, inject, ViewEncapsulation } from "@angular/core";
import { Checkbox, CHECKBOX_ICON, CheckboxBase, ClassList, isArrowDownOrRight, isArrowUpOrLeft, isEnterOrSpace, isInputElement, isLabelElement, isNavigation } from "@tailwind-ng/core";
import { IconDirective } from "../../elements";

/**
 * @TailwindNG Checkbox Component.
 */
@Component({
  selector: 'tw-checkbox, [tw-checkbox], [twCheckbox]',
  exportAs: 'twCheckbox',
  imports: [IconDirective],
  template: `
  <label class="flex items-center w-fit gap-3"><!-- We define inline style here as it would never be subject to changes. -->
    <div class="relative flex size-fit text-white *:not-first:hidden *:not-first:inset-0 *:not-first:absolute *:not-first:place-self-center *:not-first:pointer-events-none *:cursor-pointer">
      <input [class]="classList.value()" (change)="onChanges($event)" type="checkbox" [id]="id" [checked]="checked || null" [indeterminate]="indeterminate || null" />
      <tw-icon [name]="icon.onIndeterminate" [size]="icon.size" class="peer-indeterminate:block" />
      <tw-icon [name]="icon.onChecked" [size]="icon.size" class="peer-checked:block" />
    </div>
    <ng-content />
    <ng-content select="span" />
  </label>
  <ng-content select="div,p,ul,label,tw-checkbox,[tw-checkbox],[twCheckbox]" />
 `,
  host: {
    // We remove host attribute to avoid coillision
    // with the inner input element attributes.
    '[attr.id]': 'null',
    '[attr.name]': 'null',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: CheckboxBase, useExisting: forwardRef(() => CheckboxComponent) }]
})
export class CheckboxComponent extends CheckboxBase implements Checkbox {
  protected icon = inject(CHECKBOX_ICON);

  protected override async onInit(): Promise<void> {
    if (!this.classList) {
      if (this.parent) {
        this.config = {};
        this.classList = this.parent.classList;
      } else {
        this.classList = new ClassList();
        this.classList.set(this.config);
      }
    }
    if (this.parent) {
      if (!this.parent.children) {
        this.parent.children = [];
      }
      this.parent.children.push(this);
      if (this.parent.checked && (!this.checked || this.indeterminate)) {
        this.toggle();
      } else if (this.checked && (!this.parent.checked && !this.parent.indeterminate)) {
        this.parent.toggle({ origin: 'child' });
      }
    }
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false);
    this.nativeElement.addEventListener('mouseup', this.onMouseup.bind(this), false);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false);
    this.nativeElement.removeEventListener('mouseup', this.onMouseup.bind(this), false);
  }

  protected onMouseup(event: MouseEvent): void {
    event.stopPropagation();
    if (isLabelElement(event.target)) {
      this.toggle();
    }
  }

  protected onKeyup(event: KeyboardEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (isEnterOrSpace(event.key)) {
      this.toggle();
    }
    if (isNavigation(event.key)) {
      if (isArrowDownOrRight(event.key)) {
        this.focus({ behavior: 'firstChild', target: this.nativeElement.nextElementSibling as HTMLElement });
      }
      if (isArrowUpOrLeft(event.key)) {
        this.focus({ behavior: 'firstChild', target: this.nativeElement.previousElementSibling as HTMLElement });
      }
    }
  }

  protected onChanges(event: Event): void {
    event.stopPropagation();
    if (!this.isInitialized) return;
    if (isInputElement(event.target)) {
      if (event.target.checked !== this.checked) {
        this.toggle();
      }
    }
  }
}


