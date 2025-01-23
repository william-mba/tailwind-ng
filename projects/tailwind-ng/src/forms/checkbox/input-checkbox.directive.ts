import { Directive, Input } from '@angular/core';
import { InputCheckboxBase } from '@tailwind-ng/core';

/**
 * @TailwindNG Input checkbox.
 */
@Directive({
  selector: 'input[type="checkbox"][tw-input], input[type="checkbox"][twInput]',
  exportAs: 'twInputCheckbox',
  providers: [{ provide: InputCheckboxBase, useExisting: InputCheckboxDirective }]
})
export class InputCheckboxDirective extends InputCheckboxBase {
  readonly children: InputCheckboxDirective[] = [];
  @Input() parent?: InputCheckboxDirective;

  protected override onInit(): void {
    if (this.parent) {
      this.parent.children.push(this);
    }
    this.config$.subscribe(config => this.classList.set(config.input));
    this.nativeElement.addEventListener('change', this.onChange.bind(this), false);
    this._destroyRef.onDestroy(() => this.nativeElement.removeEventListener('change', this.onChange.bind(this), false));
  }

  protected onChange(event: Event): void {
    event.stopPropagation();
    if (this.parent) {
      if (this.nativeElement.checked) {
        this.parent.checkedCount++;
      } else {
        this.parent.checkedCount--;
      }
    }
    if (this.children.length > 0) {
      this.children.forEach(child => child.nativeElement.checked = this.nativeElement.checked);
      if (this.nativeElement.checked) {
        this.checkedCount = this.children.length;
      } else {
        this.checkedCount = 0;
      }
    }
  }

  private _checkedCount = 0;
  get checkedCount(): number {
    return this._checkedCount;
  }
  set checkedCount(value: number) {
    if (value < 0 || value > this.children.length) return;
    this._checkedCount = value;
    if (value === 0) {
      this.nativeElement.checked = false;
      this.nativeElement.indeterminate = false;
    } else if (value === this.children.length) {
      this.nativeElement.checked = true;
      this.nativeElement.indeterminate = false;
    } else {
      this.nativeElement.checked = false;
      this.nativeElement.indeterminate = true;
    }
  }
}
