import {
	ChangeDetectionStrategy,
	Component,
	inject,
	Input,
	model,
	ViewEncapsulation,
} from '@angular/core';
import {
	classlist,
	Toggle,
	TOGGLE_CONFIG,
	ToggleBase,
} from '@tailwind-ng/core';

@Component({
	selector: 'tw-toggle, [tw-toggle], [twToggle]',
	exportAs: 'twToggle',
	host: {
		role: 'switch',
		'[tabindex]': 'disabled ? null : tabIndex',
		'[attr.aria-checked]': 'checked() || null',
		'[attr.data-checked]': 'checked() || null',
	},
	template: `
		<ng-content />
	`,
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [{ provide: ToggleBase, useExisting: ToggleComponent }],
})
export class ToggleComponent extends ToggleBase implements Toggle {
	@Input() tabIndex = 0;
	checked = model<boolean>(false);

	protected override buildStyle(): void {
		classlist(this.nativeElement).set(inject(TOGGLE_CONFIG), this.class);
	}

	private onKeydown(event: KeyboardEvent): void {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			this.toggle();
		}
	}

	toggle(): void {
		this.focus();
		this.checked.update((checked) => !checked);
	}

	protected override addEventListeners(): void {
		super.addEventListeners();
		this.nativeElement.addEventListener('click', this.toggle.bind(this), {
			passive: true,
			capture: true,
		});
		this.nativeElement.addEventListener(
			'keyup',
			this.onKeydown.bind(this),
			true,
		);
	}

	protected override removeEventListeners(): void {
		super.removeEventListeners();
		this.nativeElement.removeEventListener(
			'click',
			this.toggle.bind(this),
			true,
		);
		this.nativeElement.removeEventListener(
			'keyup',
			this.onKeydown.bind(this),
			true,
		);
	}
}
