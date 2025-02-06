import { ChangeDetectionStrategy, Component, forwardRef, inject, Input, output, ViewEncapsulation } from "@angular/core";
import { Checkbox, CheckboxBase, ClassList, isArrowDownOrRight, isArrowUpOrLeft, isEnterOrSpace } from "@tailwind-ng/core";
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
      <input [class]="classList.value()" type="checkbox" [id]="id" [checked]="checked || null" [indeterminate]="indeterminate || null"/>
      <tw-icon name="minus" size="sm" class="peer-indeterminate:block" />
      <tw-icon name="check" size="sm" class="peer-checked:block" />
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
  private readonly parent = inject(CheckboxComponent, {
    optional: true, skipSelf: true, host: true
  });
  readonly children: Checkbox[] = [];
  @Input() checked = false;
  @Input() indeterminate = false;
  @Input() id = this.randomId();
  changes = output<{ checked: boolean, indeterminate: boolean }>();

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
      this.parent.children.push(this);
      if (this.parent.checked && (!this.checked || this.indeterminate)) {
        this.toggle();
      } else if (this.checked && (!this.parent.checked && !this.parent.indeterminate)) {
        this.parent.toggle('child');
      }
    }
  }

  toggle(origin: 'self' | 'parent' | 'child' = 'self', event?: Event): void {
    event?.preventDefault();
    event?.stopPropagation();
    if (origin === 'self') {
      this.checked = !this.checked;
      this.indeterminate = false;
      if (this.children && this.children.length > 0) {
        this.children.forEach(c => c.toggle('parent'));
      }
      if (this.parent) {
        this.parent.toggle('child');
      }
    }
    if (origin === 'parent' && this.parent) {
      this.checked = this.parent.checked;
      if (this.indeterminate) {
        this.indeterminate = false;
      }
      if (this.children && this.children.length > 0) {
        this.children.forEach(c => c.toggle('parent'));
      }
    }
    if (origin === 'child' && this.children && this.children.length > 0) {
      const checkedCount = this.children.filter(c => c.checked).length;
      this.checked = checkedCount === this.children!.length;
      this.indeterminate = checkedCount > 0 && (checkedCount < this.children.length);
      if (this.parent && (this.checked || this.indeterminate)) {
        this.parent.toggle('child');
      }
    }
    this.emitChanges();
  }

  private emitChanges(): void {
    this.changes.emit({ checked: this.checked, indeterminate: this.indeterminate });
  }

  protected onPointerUp(event: PointerEvent): void {
    event.stopPropagation();
    const target = event.target as HTMLElement;
    const label = this.nativeElement.querySelector('label');
    if (label?.innerText === target?.innerText) {
      this.toggle('self', event);
    } else if (label?.querySelector('input')?.id === target?.id) {
      this.toggle('self', event);
    }
  }

  protected onKeyup(event: KeyboardEvent): void {
    event.stopPropagation();
    if (isEnterOrSpace(event.key)) {
      this.toggle('self');
    }
    if (isArrowDownOrRight(event.key)) {
      this.focus({ behavior: 'firstChild', target: this.nativeElement.nextElementSibling as HTMLElement });
    }
    if (isArrowUpOrLeft(event.key)) {
      this.focus({ behavior: 'firstChild', target: this.nativeElement.previousElementSibling as HTMLElement });
    }
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false);
    this.nativeElement.addEventListener('pointerup', this.onPointerUp.bind(this), false);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false);
    this.nativeElement.removeEventListener('pointerup', this.onPointerUp.bind(this), false);
  }
}
