import { ChangeDetectionStrategy, Component, computed, inject, input, model, OnInit, ViewEncapsulation } from '@angular/core';
import { ComboboxComponent } from '../combobox.component';
import { classlist, ComboboxItem, ComboboxItemBase } from '@tailwind-ng/core';

@Component({
  selector: 'tw-combobox-item, [tw-combobox-item], [twComboboxItem]',
  exportAs: 'twComboboxItem',
  host: {
    role: 'option',
    '[class]': 'classList.value()',
    '[tabindex]': 'disabled ? null : -1',
    '[attr.aria-selected]': 'selected()',
    '[attr.data-selected]': 'selected() || null'
  },
  template: '<ng-content />',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: ComboboxItemBase, useExisting: ComboboxItemComponent }]
})
export class ComboboxItemComponent extends ComboboxItemBase implements ComboboxItem, OnInit {
  value = input.required<string>();
  selected = model<boolean>(false);
  private readonly _combobox = inject(ComboboxComponent, { skipSelf: true, host: true });
  private readonly _normalizedValue = computed(() => this.value().toLocaleLowerCase());

  override ngOnInit(): void {
    super.ngOnInit();
    this._combobox.input().valueChange.subscribe(this.selectIfNeeded.bind(this));
    const subs: { unsubscribe(): void }[] = [];
    subs.push(this._combobox.opened.subscribe((opened) => {
      this.selectIfNeeded();
      if (opened && this.selected()) {
        if (!this._combobox.selectedValues().has(this.value())) {
          this.selected.set(false);
        } else {
          setTimeout(() => {
            this.scrollIntoView();
          })
        }
      }
    }));
    subs.push(this._combobox.resetted.subscribe(() => {
      if (this.selected()) this.selected.set(false);
    }));
    // We use the combobox's selected values as the source of truth
    // to determine the initial selected state of the combobox item.
    if (!this.selected() && this._combobox.selectedValues().has(this.value())) {
      this.selected.set(true);
    } else if (this.selected() && !this._combobox.selectedValues().has(this.value())) {
      this.selected.set(false);
    }
    if (this._combobox.selectionMode === 'single' && this.selected()) {
      this._combobox.input().value = this.value();
    }
    this._destroyRef.onDestroy(() => {
      // This is a special case, where we need to eagerly unsubscribe to all subscriptions
      // to avoid the following runtime error after a filter has been applied on the combobox and it's then resets or reopens:
      // RuntimeError: NG0953: Unexpected emit for destroyed `OutputRef`. The owning directive/component is destroyed.
      // This may be explained by the Push/Pull Algorithm of Angular signals which happen in two phases.
      // source: https://github.com/angular/angular/tree/main/packages/core/primitives/signals
      subs.map(sub => sub.unsubscribe());
    });
  }

  private selectIfNeeded(value = this._combobox.input().normalizedValue): void {
    if (this.selected()) return;
    if (this._normalizedValue() === value) {
      this.select();
    }
  }

  select(): void {
    this._combobox.input().focus();
    this._combobox.setActiveItem(this);
    if (this._combobox.selectionMode === 'single') {
      this._combobox.selectedValues().clear();
      this._combobox.selectedValues().add(this.value());
      this._combobox.input().value = this.value();
      this._combobox.close();
      this.selected.set(true);
    } else {
      if (this.selected() && this._combobox.selectedValues().size > 0) {
        this.deselect();
      } else {
        this._combobox.selectedValues().add(this.value());
        this.selected.set(true);
      }
    }
  }

  deselect(): void {
    this._combobox.input().focus();
    this._combobox.selectedValues().delete(this.value());
    // We cleared the input if it has the same value as the deselected item
    if (this._normalizedValue() === this._combobox.input().normalizedValue) {
      this._combobox.input().clear();
    }
    this.selected.set(false);
  }

  protected override buildStyle(): void {
    this.classList = classlist(this.class()).set(this.config);
  }

  protected override addEventListeners(): void {
    super.addEventListeners();
    this.nativeElement.addEventListener('click', this.select.bind(this), false);
  }

  protected override removeEventListeners(): void {
    super.removeEventListeners();
    this.nativeElement.removeEventListener('click', this.select.bind(this), false);
  }
}
