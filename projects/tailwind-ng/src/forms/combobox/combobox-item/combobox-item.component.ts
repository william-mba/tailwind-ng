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
  private readonly _value = computed(() => this.value().toLocaleLowerCase());

  override ngOnInit(): void {
    super.ngOnInit();

    // Select the item if the value changed matchs the item value.
    this._combobox.input().valueChange.subscribe(value => {
      this.selectIfNeeded(value);
    });

    this._combobox.opened.subscribe((opened) => {
      this.selectIfNeeded();
      queueMicrotask(() => {
        if (opened && this.isInsideCombobox) this.scrollIntoView();
      });
    });

    if (this.selected()) {
      this.select();
    }
  }

  private selectIfNeeded(value = this._combobox.input().value): void {
    if (!this._combobox.opened() || this.isInsideCombobox) return;
    if (this._value() === value.toLocaleLowerCase()) {
      this.select();
    }
  }

  select(): void {
    this._combobox.select(this);
    requestAnimationFrame(() => {
      if (this.isInsideCombobox) {
        this.selected.set(true);
      } else {
        this.selected.set(false);
      }
    })
  }
  deselect(): void {
    requestAnimationFrame(() => {
      this.selected.set(false);
    });
    if (this.isInsideCombobox) {
      this._combobox.deselect(this);
    }
  }

  private get isInsideCombobox(): boolean {
    return this._combobox.has(this);
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
