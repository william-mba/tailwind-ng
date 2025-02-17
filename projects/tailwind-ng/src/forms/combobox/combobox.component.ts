import { ChangeDetectionStrategy, Component, contentChild, model, OnInit, output, ViewEncapsulation } from '@angular/core';
import { classlist, Combobox, ComboboxBase, ComboboxItem, DropdownBase, InputTextBase, isArrowUp, isArrowUpOrDown, isArrowUpOrLeft, isEnterOrSpace, isEscape, isNavigation, SelectMode, TwIf } from '@tailwind-ng/core';

@Component({
  selector: 'tw-combobox, [tw-combobox], [twCombobox]',
  exportAs: 'twCombobox',
  host: {
    '[class]': 'classList.value()',
    '[attr.aria-controls]': 'dropdown().id',
  },
  imports: [TwIf],
  template: `<ng-content select="label" />
  <div class="relative">
    <ng-content select="input[type=text], input[tw-input], input[twInput]" />
    <ng-content select="tw-icon, [tw-icon], [twIcon], tw-button, [tw-button], [twButton]" />
  </div>
  <ng-container *twIf="opened()">
    <div class="relative"><ng-content /></div>
  </ng-container>`,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ComboboxBase, useExisting: ComboboxComponent }]
})
export class ComboboxComponent extends ComboboxBase implements Combobox, OnInit {
  readonly dropdown = contentChild.required(DropdownBase);
  readonly input = contentChild.required(InputTextBase);
  selected = output<ComboboxItem[]>();
  selectMode = model<SelectMode>('single');
  private _map = new Map<string, ComboboxItem>();

  override ngOnInit(): void {
    super.ngOnInit();
    this.input().changes.subscribe(() => {
      if (!this.opened()) {
        this.open();
      }
    });
  }

  override open(): void {
    super.open();
    this.dropdown().open();
    this.input().focus();
    this.input().setVisualfocus();
  }

  override close(): void {
    super.close();
    this.dropdown().close();
    this.resetActiveElementIfAny();
    this.selected.emit([...this._map.values()]);
    if (this.selectMode() === 'single' && this._map.size > 0) {
      this.input().value = [...this._map.values()][0].value();
    }
    if (this.hasFocus) {
      this.input().focus();
    }
  }

  protected onBlur(): void {
    requestAnimationFrame(() => {
      if (!this.hasFocus) {
        this.input().removeVisualfocus();
        if (this.opened()) this.close();
      }
    });
  }

  private resetActiveElementIfAny() {
    if (this.activeElement) {
      this.removeVisualfocus(this.activeElement);
      this.activeElement = undefined;
    }
  }

  protected override buildStyle(): void {
    this.classList = classlist(this.class()).set("relative h-max");
  }

  protected onKeyup(event: KeyboardEvent): void {
    event.stopPropagation();
    if (!isEscape(event.key) && !this.opened()) {
      this.open();
    } else if (isEscape(event.key)) {
      if (this.opened()) {
        this.close();
      } else {
        this.reset();
      }
    } else if (isNavigation(event.key)) {
      if (isArrowUpOrLeft(event.key)) {
        if (!this.activeElement) {
          this.activeElement = this.dropdown().setVisualfocus({ behavior: 'lastChild' });
        } else {
          this.activeElement = this.dropdown().setVisualfocus({ behavior: 'previousSibling', target: this.activeElement });
          if (!this.activeElement) {
            this.activeElement = this.dropdown().setVisualfocus({ behavior: 'lastChild' });
          }
        }
      } else {
        if (!this.activeElement) {
          this.activeElement = this.dropdown().setVisualfocus({ behavior: 'firstChild' });
        } else {
          this.activeElement = this.dropdown().setVisualfocus({ behavior: 'nextSibling', target: this.activeElement });
          if (!this.activeElement) {
            this.activeElement = this.dropdown().setVisualfocus({ behavior: 'firstChild' });
          }
        }
      }
      const activeContent = this.activeElement?.textContent?.trim();
      if (activeContent && activeContent.length > 0) {
        this.input().value = activeContent;
      }
    } else if (isEnterOrSpace(event.key) && this.activeElement) {
      this.activeElement.click();
    }
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    this.nativeElement.addEventListener('blur', this.onBlur.bind(this), true);
    this.nativeElement.addEventListener('keyup', this.onKeyup.bind(this), false);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('blur', this.onBlur.bind(this), true);
    this.nativeElement.removeEventListener('keyup', this.onKeyup.bind(this), false);
  }

  has(item: ComboboxItem): boolean {
    return this._map.has(item.value());
  }

  select(item: ComboboxItem): void {
    if (this.selectMode() === 'single') {
      this._map.clear();
      this._map.set(item.value(), item);
      this.input().value = item.value();
      this.close();
    } else {
      if (this.has(item)) {
        this._map.delete(item.value());
      } else {
        this._map.set(item.value(), item);
      }
      this.activeElement = this.dropdown().setVisualfocus({ target: item.nativeElement });
    }
    this.input().focus();
  }
  deselect(item: ComboboxItem): void {
    this._map.delete(item.value());
  }

  reset(): void {
    this._map.forEach(item => item.deselect());
    this._map.clear();
    this.input().clear();
    this.input().focus();
    this.resetActiveElementIfAny();
    this.selected.emit([]);
  }
}
