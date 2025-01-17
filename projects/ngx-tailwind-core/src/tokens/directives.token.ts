import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Directive, forwardRef, inject, Input } from "@angular/core";
import { BaseDirective, PopupDirective } from "../directives";
import { ReactiveConfig } from "../config";
import { ObservableConfig } from "../types";

// Elements
@Directive({})
export abstract class AvatarToken extends BaseDirective implements ObservableConfig {
  @Input() config$ = inject(ReactiveConfig).get('Avatar').pipe(takeUntilDestroyed());
}

@Directive({})
export abstract class BadgeToken extends BaseDirective implements ObservableConfig {
  @Input() config$ = inject(ReactiveConfig).get('Badge').pipe(takeUntilDestroyed());
}

@Directive({})
export abstract class ButtonToken extends BaseDirective<HTMLButtonElement> implements ObservableConfig {
  @Input() config$ = inject(ReactiveConfig).get('Button').pipe(takeUntilDestroyed());
}

@Directive({})
export abstract class ButtonGroupToken extends BaseDirective implements ObservableConfig {
  @Input() config$ = inject(ReactiveConfig).get('ButtonGroup').pipe(takeUntilDestroyed());
}

@Directive({ providers: [{ provide: PopupDirective, useExisting: forwardRef(() => DropdownToken) }] })
export abstract class DropdownToken extends PopupDirective implements ObservableConfig {
  @Input() config$ = inject(ReactiveConfig).get('Dropdown').pipe(takeUntilDestroyed());
}

@Directive({})
export abstract class IconToken extends BaseDirective implements ObservableConfig {
  @Input() config$ = inject(ReactiveConfig).get('Icon').pipe(takeUntilDestroyed());
}

// Forms
@Directive({})
export abstract class ComboboxItemToken extends BaseDirective implements ObservableConfig {
  @Input() config$ = inject(ReactiveConfig).get('ComboboxItem').pipe(takeUntilDestroyed());
}

@Directive({ providers: [{ provide: PopupDirective, useExisting: forwardRef(() => ComboboxToken) }] })
export abstract class ComboboxToken extends PopupDirective { }

@Directive({})
export abstract class InputToken extends BaseDirective<HTMLInputElement> implements ObservableConfig {
  @Input() config$ = inject(ReactiveConfig).get('Input').pipe(takeUntilDestroyed());
}

@Directive({})
export abstract class InputRadioToken extends BaseDirective<HTMLInputElement> implements ObservableConfig {
  @Input() config$ = inject(ReactiveConfig).get('InputRadio').pipe(takeUntilDestroyed());
}

@Directive({})
export abstract class ToggleToken extends BaseDirective implements ObservableConfig {
  @Input() config$ = inject(ReactiveConfig).get('Toggle').pipe(takeUntilDestroyed());
}

// Overlays
@Directive({ providers: [{ provide: PopupDirective, useExisting: forwardRef(() => DialogToken) }] })
export abstract class DialogToken extends PopupDirective { }
