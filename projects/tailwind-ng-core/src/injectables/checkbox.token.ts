import { Directive, inject, Input, output } from "@angular/core";
import { ConfigOf } from "../config/config-type";
import { BaseDirective } from "../directives/base.directive";
import { CHECKBOX_CONFIG } from "./checkbox-config.token";
import { Checkbox, CheckboxActions, CheckboxEvents, CheckboxMutableState, CheckboxToggleOptions } from "../interfaces/checkbox";

@Directive()
export abstract class CheckboxBase extends BaseDirective implements ConfigOf<'Checkbox'>, CheckboxMutableState, CheckboxActions, CheckboxEvents {
  @Input() config = inject(CHECKBOX_CONFIG);
  protected readonly parent = inject(CheckboxBase, {
    optional: true, skipSelf: true, host: true
  });
  children?: Checkbox[];
  @Input() checked = false;
  @Input() indeterminate = false;
  @Input() id = this.randomId();
  changes = output<CheckboxMutableState>();

  protected emitChanges(): void {
    this.changes.emit({ checked: this.checked, indeterminate: this.indeterminate });
  }

  toggle(options: CheckboxToggleOptions = {}): Promise<CheckboxMutableState> {
    options.event?.stopPropagation();
    const { origin = 'self' } = options;

    if (origin === 'self') {
      this.checked = !this.checked;
      if (this.indeterminate) {
        this.indeterminate = false;
      }
      if (this.parent) {
        this.parent.toggle({ origin: 'child' });
      }
      if (this.children) {
        Promise.all(this.children.map(c => c.toggle({ origin: 'parent' })));
      }
    }
    if (origin === 'parent' && this.parent) {
      this.checked = this.parent.checked;
      if (this.indeterminate) {
        this.indeterminate = false;
      }
      if (this.children) {
        Promise.all(this.children.map(c => c.toggle({ origin: 'parent' })));
      }
    }
    if (origin === 'child' && this.children) {
      const checkedCount = this.children.filter(c => c.checked).length;
      this.checked = checkedCount === this.children!.length;
      this.indeterminate = checkedCount > 0 && (checkedCount < this.children.length);
      if (this.parent && (this.checked || this.indeterminate)) {
        this.parent.toggle({ origin: 'child' });
      }
    }
    this.emitChanges();
    return Promise.resolve<CheckboxMutableState>({
      indeterminate: this.indeterminate,
      checked: this.checked
    });
  }
}

/**
 * Checks if the component is a Checkbox.
 * If so, you can safely access the Checkbox members inside this block scope.
 */
export function isCheckbox(component: unknown): component is Checkbox {
  return component instanceof CheckboxBase
}
