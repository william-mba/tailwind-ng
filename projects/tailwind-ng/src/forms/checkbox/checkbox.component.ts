import { ChangeDetectionStrategy, Component, forwardRef, inject, Input, model, ViewEncapsulation } from "@angular/core";
import { CheckboxBase, KBKey } from "@tailwind-ng/core";
import { IconDirective } from "../../elements";

/**
 * @TailwindNG Checkbox Component.
 */
@Component({
  selector: 'tw-checkbox, [tw-checkbox], [twCheckbox]',
  exportAs: 'twCheckbox',
  imports: [IconDirective],
  template: `
  <label [class]="'flex items-center ' + class"><!-- Same as the label component.  -->
    <!-- We didn't found a situation where someone would want to customize this style so we make it as simple as it is for now.  -->
    <div class="relative flex size-fit text-white *:not-first:hidden *:not-first:inset-0 *:not-first:absolute *:not-first:place-self-center *:not-first:pointer-events-none *:cursor-pointer">
      <input #checkbox [attr.class]="classList" type="checkbox" [id]="id" [checked]="checked() || null" [indeterminate]="indeterminate() || null"/>
      <tw-icon key="minus" size="sm" class="peer-indeterminate:block" />
      <tw-icon key="check" size="sm" class="peer-checked:block" />
    </div>
    <ng-content />
    <ng-content select="span" />
  </label>
  <ng-content select="div,p,ul" />
 `,
  host: {
    '[attr.id]': 'null',
    '[attr.name]': 'null',
    '[attr.class]': '"size-fit"', // We enforce the size-fit class to the host element as we dont want to allow any accidental changes to host size.
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: CheckboxBase, useExisting: forwardRef(() => CheckboxComponent) }]
})
export class CheckboxComponent extends CheckboxBase {
  private children?: CheckboxComponent[];
  private parent = inject(CheckboxComponent, {
    optional: true, skipSelf: true, host: true
  });
  override class = "gap-3";
  checked = model(false);
  indeterminate = model(false);
  @Input() id = this.randomId();

  protected override onInit(): void {
    this.config$.subscribe(config => this.classList.set(config));

    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false);
    this.nativeElement.addEventListener('mouseup', (event) => this.toggle('self', event), false);

    this._destroyRef.onDestroy(() => {
      this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false);
      this.nativeElement.removeEventListener('mouseup', (event) => this.toggle('self', event), false);
    });

    if (this.parent) {
      if (!this.parent.children) {
        this.parent.children = [];
      }
      this.parent.children.push(this);
      if (this.parent.checked() && (!this.checked() || this.indeterminate())) {
        this.toggle();
      } else if ((!this.parent.checked() && !this.parent.indeterminate()) && this.checked()) {
        this.parent.toggle('child');
      }
    }
  }

  toggle(source: 'self' | 'parent' | 'child' = 'self', event?: Event): void {
    console.log('toggled by', source);
    event?.stopPropagation();
    if (source === 'self') {
      this.checked.set(!this.checked());
      this.indeterminate.set(false);
      if (this.children && this.children.length > 0) {
        this.children.forEach(c => c.toggle('parent', event));
      }
      if (this.parent) {
        this.parent.toggle('child', event);
      }
    }
    if (source === 'parent' && this.parent) {
      this.checked.set(this.parent.checked());
      if (this.indeterminate()) {
        this.indeterminate.set(false);
      }
      if (this.children && this.children.length > 0) {
        this.children.forEach(c => c.toggle('parent', event));
      }
    }
    if (source === 'child') {
      const checkedCount = this.children!.filter(c => c.checked()).length;
      this.checked.set(checkedCount === this.children!.length);
      this.indeterminate.set(checkedCount > 0 && checkedCount < this.children!.length);
      if (this.parent) {
        this.parent.toggle('child', event);
      }
    }
  }

  protected onKeyup(event: KeyboardEvent): void {
    event.stopPropagation();
    if (KBKey.isEnterOrSpace(event.key)) {
      this.toggle('self', event);
    } else if (KBKey.isNavigation(event.key)) {
      if (KBKey.isArrowDownOrRight(event.key)) {
        this.focus({ target: this.nativeElement.nextElementSibling?.firstElementChild as HTMLElement });
      }
      if (KBKey.isArrowUpOrLeft(event.key)) {
        this.focus({ target: this.nativeElement.previousElementSibling?.firstElementChild as HTMLElement });
      }
    }
  }
}
