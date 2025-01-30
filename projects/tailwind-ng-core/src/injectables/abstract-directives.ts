import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { contentChild, DestroyRef, Directive, forwardRef, inject } from "@angular/core";
import { BaseDirective, PopupDirective } from "../directives";
import { ReactiveConfig } from "../config";
import { ObservableConfig } from "../types";

// Elements
@Directive({})
export abstract class AvatarBase extends BaseDirective implements ObservableConfig {
  readonly config = inject(ReactiveConfig).get('Avatar').pipe(takeUntilDestroyed());
}

@Directive({})
export abstract class BadgeBase extends BaseDirective implements ObservableConfig {
  readonly config = inject(ReactiveConfig).get('Badge').pipe(takeUntilDestroyed());
}

/**
 * @TailwindNG Button component base directive.
 */
@Directive({})
export abstract class ButtonBase extends BaseDirective<HTMLButtonElement> implements ObservableConfig {
  protected destroyRef = inject(DestroyRef);
  readonly config = inject(ReactiveConfig).get('Button').pipe(takeUntilDestroyed());
}

@Directive({})
export abstract class ButtonGroupBase extends BaseDirective implements ObservableConfig {
  readonly config = inject(ReactiveConfig).get('ButtonGroup').pipe(takeUntilDestroyed());
}

@Directive({ providers: [{ provide: PopupDirective, useExisting: forwardRef(() => DropdownBase) }] })
export abstract class DropdownBase extends PopupDirective implements ObservableConfig {
  readonly type = 'Dropdown';
  readonly config = inject(ReactiveConfig).get(this.type).pipe(takeUntilDestroyed());
}

@Directive({})
export abstract class IconBase extends BaseDirective implements ObservableConfig {
  readonly config = inject(ReactiveConfig).get('Icon').pipe(takeUntilDestroyed());
}

// Forms
@Directive({})
export abstract class ComboboxItemBase extends BaseDirective implements ObservableConfig {
  readonly config = inject(ReactiveConfig).get('ComboboxItem').pipe(takeUntilDestroyed());
}

@Directive({ providers: [{ provide: PopupDirective, useExisting: forwardRef(() => ComboboxBase) }] })
export abstract class ComboboxBase extends PopupDirective {
  readonly type = 'Combobox';
  readonly dropdown = contentChild.required<DropdownBase>(DropdownBase);
  protected activeElement?: HTMLElement;
}

@Directive({})
export abstract class InputTextBase extends BaseDirective<HTMLInputElement> implements ObservableConfig {
  readonly config = inject(ReactiveConfig).get('InputText').pipe(takeUntilDestroyed());
}

@Directive({})
export abstract class InputRadioBase extends BaseDirective<HTMLInputElement> implements ObservableConfig {
  readonly config = inject(ReactiveConfig).get('InputRadio').pipe(takeUntilDestroyed());
}

@Directive({})
export abstract class ToggleBase extends BaseDirective implements ObservableConfig {
  readonly config = inject(ReactiveConfig).get('Toggle').pipe(takeUntilDestroyed());
}

// Overlays
@Directive({ providers: [{ provide: PopupDirective, useExisting: forwardRef(() => DialogBase) }] })
export abstract class DialogBase extends PopupDirective<HTMLDialogElement> implements ObservableConfig {
  readonly type = 'Dialog';
  readonly config = inject(ReactiveConfig).get(this.type).pipe(takeUntilDestroyed());
}

@Directive({})
export abstract class CheckboxBase extends BaseDirective implements ObservableConfig {
  readonly config = inject(ReactiveConfig).get('Checkbox').pipe(takeUntilDestroyed());
}
