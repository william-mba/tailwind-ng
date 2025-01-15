import { Directive } from "@angular/core";
import { BaseDirective, PopupDirective } from "../directives";

// Elements
@Directive({})
export abstract class AvatarToken extends BaseDirective { }

@Directive({})
export abstract class BadgeToken extends BaseDirective { }

@Directive({})
export abstract class ButtonToken extends BaseDirective<HTMLButtonElement> { }

@Directive({})
export abstract class ButtonGroupToken extends BaseDirective { }

@Directive({ providers: [{ provide: PopupDirective, useExisting: DropdownToken }] })
export abstract class DropdownToken extends PopupDirective { }

@Directive({})
export abstract class IconToken extends BaseDirective { }

// Forms
@Directive({})
export abstract class ComboboxItemToken extends BaseDirective { }

@Directive({ providers: [{ provide: PopupDirective, useExisting: ComboboxToken }] })
export abstract class ComboboxToken extends PopupDirective { }

@Directive({})
export abstract class InputToken extends BaseDirective<HTMLInputElement> { }

@Directive({})
export abstract class ToggleToken extends BaseDirective { }

// Overlays
@Directive({ providers: [{ provide: PopupDirective, useExisting: DialogToken }] })
export abstract class DialogToken extends PopupDirective { }
