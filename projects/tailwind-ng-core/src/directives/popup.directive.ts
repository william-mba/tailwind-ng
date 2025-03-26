import { Directive, Input, inject, model, output } from '@angular/core';
import { BaseDirective } from './base.directive';
import { ZIndexer } from '../services/z-index.service';
import { isObject } from '../utils';
import { ModelSignal, OutputEmitterRef } from '@angular/core';
import { BaseActions, BaseProps } from './base.directive';

/**
 * @TailwindNG Popup base props.
 */
export interface PopupProps<T extends HTMLElement = HTMLElement>
	extends BaseProps<T> {
	readonly id: string;
	/**
	 * Restores focus to the popup's trigger when the popup closes.
	 */
	readonly restoreFocus?: boolean | PopupTrigger;
	readonly isOpened: ModelSignal<boolean>;
}
export interface PopupTrigger {
	focus(): unknown;
}

/**
 * @TailwindNG Popup basic actions.
 */
export interface PopupBaseActions extends BaseActions {
	/**
	 * Toggles the component.
	 */
	toggle(): void;
	/**
	 * Opens the component.
	 */
	open(): void;
	/**
	 * Closes the component.
	 */
	close(): void;
}

/**
 * @TailwindNG Popup advanced actions.
 */
export interface PopupAdvancedActions {
	/**
	 * Closes the component after the given delay in milliseconds without `ms` suffix.
	 * - Acceptable delay is between `[1000, 10_000]`. The default value is `2000`.
	 * - If the given delay is out of range, the default value is used.
	 * @param delay The delay in milliseconds.
	 */
	closeAfter(delay: number): void;
}

export interface Popup<T extends HTMLElement = HTMLElement>
	extends PopupProps<T>,
		PopupBaseActions,
		PopupAdvancedActions {
	/**
	 * A signal that indicates whether the popup is opened. Emits `true` when the popup opens and `false` when it closes.
	 */
	readonly opened: OutputEmitterRef<Popup>;
	/**
	 * Event emitted when the popup closes.
	 */
	readonly closed: OutputEmitterRef<Popup>;
}

@Directive({
	host: {
		'[attr.id]': 'id',
		'[attr.open]': 'isOpened() || null',
		'[attr.aria-expanded]': 'isOpened()',
	},
})
export abstract class PopupDirective<T extends HTMLElement = HTMLElement>
	extends BaseDirective<T>
	implements Popup<T>
{
	private readonly _zIndex = inject(ZIndexer);
	@Input() id = this.randomId('popup');
	@Input() restoreFocus: boolean | PopupTrigger = false;
	readonly isOpened = model(false);
	readonly opened = output<Popup>();
	readonly closed = output<Popup>();

	protected get zIndex(): string {
		return `${this._zIndex.next}`;
	}

	toggle(): void {
		if (this.isOpened()) {
			this.close();
		} else {
			this.open();
		}
	}

	private trigger: unknown = null;

	open(): void {
		if (!this.isOpened()) {
			if (this.restoreFocus && !this.trigger) {
				if (isObject(this.restoreFocus) && 'focus' in this.restoreFocus) {
					this.trigger = this.restoreFocus;
				} else {
					this.trigger = this._document.activeElement as HTMLElement;
				}
			}
			this.isOpened.set(true);
			this.nativeElement.style.zIndex = this.zIndex;
			this.opened.emit(this);
		}
	}

	close(): void {
		if (this.isOpened()) {
			if (this.restoreFocus && this.trigger) {
				(this.trigger as PopupTrigger).focus();
			}
			this.isOpened.set(false);
			this.nativeElement.style.zIndex = '';
			this.closed.emit(this);
		}
	}

	private timer: number | null = null;

	closeAfter(delay?: number): void {
		if (!isAcceptableDelay(delay || 0)) {
			delay = 2000;
		}
		if (this.timer) return;
		this.timer = setInterval(() => {
			if (!this.isHovered) {
				this.close();
				clearInterval(this.timer!);
				this.timer = null;
			}
		}, delay);
	}
}

function isAcceptableDelay(delay: number): boolean {
	return delay >= 1000 && delay <= 1000 * 10;
}
