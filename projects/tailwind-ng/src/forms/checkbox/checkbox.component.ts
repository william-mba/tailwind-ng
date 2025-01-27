import { ChangeDetectionStrategy, Component, forwardRef, inject, Input, output, ViewEncapsulation } from "@angular/core";
import { Checkbox, CheckboxBase, KBKey } from "@tailwind-ng/core";
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
      <input [attr.class]="classList" type="checkbox" [id]="id" [checked]="checked || null" [indeterminate]="indeterminate || null"/>
      <tw-icon key="minus" size="sm" class="peer-indeterminate:block" />
      <tw-icon key="check" size="sm" class="peer-checked:block" />
    </div>
    <ng-content />
    <ng-content select="span" />
  </label>
  <ng-content select="div,p,ul,label,tw-checkbox,[tw-checkbox],[twCheckbox]" />
 `,
  host: {
    // We remove those host element attribute to avoid coillision
    // with the inner input element attributes.
    '[attr.id]': 'null',
    '[attr.name]': 'null',
    '[attr.class]': 'class',
  },
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: CheckboxBase, useExisting: forwardRef(() => CheckboxComponent) }]
})
export class CheckboxComponent extends CheckboxBase implements Checkbox {
  private children?: Checkbox[];
  private readonly parent = inject(CheckboxComponent, {
    optional: true, skipSelf: true, host: true
  });
  @Input() checked = false;
  @Input() indeterminate = false;
  @Input() id = this.randomId();
  changes = output<{ checked: boolean, indeterminate: boolean }>();

  override ngOnInit(): void {
    this.onInit();
  }

  protected override onInit(): void {
    this.config.subscribe(config => this.classList.set(config));

    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false);
    this.nativeElement.addEventListener('mouseup', this.onMouseup.bind(this), false);

    this._destroyRef.onDestroy(() => {
      this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false);
      this.nativeElement.removeEventListener('mouseup', this.onMouseup.bind(this), false);
    });

    if (this.parent) {
      if (!this.parent.children) {
        this.parent.children = [];
      }
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

  protected onMouseup(event: MouseEvent): void {
    event.stopPropagation();
    const labelText = this.nativeElement.querySelector('label')?.innerText || '';
    if (event.eventPhase === event.BUBBLING_PHASE && (event.target as HTMLElement).innerText === labelText) {
      this.toggle('self', event);
    }
  }

  protected onKeyup(event: KeyboardEvent): void {
    event.preventDefault();
    event.stopPropagation();
    if (KBKey.isEnterOrSpace(event.key)) {
      this.toggle('self');
    }
    if (KBKey.isNavigation(event.key)) {
      if (KBKey.isArrowDownOrRight(event.key)) {
        this.focus({ behavior: 'firstChild', target: this.nativeElement.nextElementSibling as HTMLElement });
      }
      if (KBKey.isArrowUpOrLeft(event.key)) {
        this.focus({ behavior: 'firstChild', target: this.nativeElement.previousElementSibling as HTMLElement });
      }
    }
  }
}
