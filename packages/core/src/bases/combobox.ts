import { Directive, forwardRef, Input } from '@angular/core';
import {
	PopupDirective,
	PopupBaseActions,
	Popup,
	PopupProps,
} from '../directives';
import { isArrowUp } from '../guards';
import { ModelSignal, OutputEmitterRef, Signal } from '@angular/core';
import { ComboboxItem } from './combobox-item';
import { InputText } from './input-text';

/**
 * @TailwindNG Combobox component state
 */
export interface ComboboxState extends PopupProps {
	/**
	 * The combobox's input text.
	 */
	readonly input: Signal<InputText | undefined>;
	/**
	 * The combobox's dropdown.
	 */
	readonly dropdown: Signal<Popup | undefined>;
	/**
	 * The combobox's selection mode. Default is 'single'.
	 */
	readonly selectionMode: ComboboxSelectionMode;
	/**
	 * The combobox's selected values.
	 */
	readonly selectedValues: ModelSignal<Set<string>>;
	/**
	 * The combobox's active element.
	 */
	readonly activeElement?: HTMLElement;
}

export type ComboboxSelectionMode = 'single' | 'multi';

/**
 * @TailwindNG Combobox component actions
 */
export interface ComboboxActions extends PopupBaseActions {
	/**
	 * Resets the combobox.
	 */
	reset(): void;
	/**
	 * Sets the combobox's active item.
	 * @param item The item to set as active.
	 */
	setActiveItem(item: ComboboxItem): void;
}

export interface Combobox extends ComboboxState, ComboboxActions {
	/**
	 * Emits when the combobox is reset.
	 */
	readonly resetted: OutputEmitterRef<void>;
}

/**
 * Checks if the component is a Combobox.
 * If so, you can safely access the Combobox members inside this block scope.
 */
export function isCombobox(component: unknown): component is Combobox {
	return component instanceof ComboboxBase;
}

@Directive({
	host: {
		role: 'combobox',
		'[attr.aria-expanded]': 'isOpened()',
		'[attr.aria-activedescendant]':
			'activeElement?.textContent?.trim() || null',
	},
	providers: [
		{
			provide: PopupDirective,
			useExisting: forwardRef(() => ComboboxBase),
		},
	],
})
export abstract class ComboboxBase extends PopupDirective {
	activeElement?: HTMLElement;
	@Input() override id = this.randomId('combobox');

	// Override default keyboard event prevention.
	protected override onKeyboardEvent(event: Event): void {
		this.preventInteractionIfDisabled(event);
	}

	// prevent the cursor to move left inside the input when pressing the arrow up key.
	protected onKeydown(event: KeyboardEvent): void {
		if (isArrowUp(event.key)) {
			event.preventDefault();
		}
	}

	protected override addEventListeners(): void {
		super.addEventListeners();
		this.nativeElement.addEventListener(
			'keydown',
			this.onKeydown.bind(this),
			true,
		);
	}

	protected override removeEventListeners(): void {
		super.removeEventListeners();
		this.nativeElement.removeEventListener(
			'keydown',
			this.onKeydown.bind(this),
			true,
		);
	}
}
