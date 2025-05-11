import { Component, DestroyRef, effect, inject, signal } from '@angular/core';
import { TwButton, TwDropdown, TwIcon } from 'tailwind-ng';
import { TwOption, ThemeService } from '@tailwind-ng/core';
import { DOCUMENT, NgIf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-docs',
	imports: [
		NgIf,
		RouterLink,
		RouterLinkActive,
		TwIcon,
		TwDropdown,
		TwButton,
		TwOption,
		RouterOutlet,
	],
	templateUrl: './docs.component.html',
})
export class DocsComponent {
	navOpened = signal(true);
	private _isSmallScreen = false;
	private _clientWidth = signal(window.innerWidth);
	private _document = inject(DOCUMENT);
	private readonly _resizeObserver = new ResizeObserver((entries) => {
		for (const entry of entries) {
			if (entry.contentBoxSize[0]) {
				this._clientWidth.set(entry.contentBoxSize[0].inlineSize);
			} else {
				this._clientWidth.set(entry.contentRect.width);
			}
		}
	});
	private readonly _destroyRef = inject(DestroyRef);
	constructor() {
		this._resizeObserver.observe(this._document.body);
		this._destroyRef.onDestroy(() => this._resizeObserver.disconnect());

		effect(() => {
			this._isSmallScreen = this._clientWidth() <= 1024;
			if (this._isSmallScreen) {
				this.navOpened.set(false);
			} else {
				this.navOpened.set(true);
			}
		});
	}

	toggleNav() {
		if (!this._isSmallScreen) return;
		this.navOpened.update((current) => !current);
	}

	protected readonly theme = inject(ThemeService);
	switchTheme() {
		requestAnimationFrame(() => {
			this.theme.toggle();
		});
	}
	protected readonly navItems = NAV_ITEMS;
}

export interface NavItem {
	label: string;
	route: string;
	description?: string;
	category?: NavCategory;
	children?: NavItem[];
}

type NavCategory = 'overview' | 'components' | 'getting-started';

export const NAV_ITEMS: NavItem[] = [
	{
		label: 'Overview',
		route: '/docs',
		category: 'overview',
		children: [
			{
				label: 'Getting Started',
				route: 'getting-started',
			},
			{
				label: 'Prebuilt Themes',
				route: 'themes',
			},
			{
				label: 'Customizations',
				route: 'customizations',
			},
			{
				label: 'Components',
				route: 'components-overview',
			},
			{
				label: 'Roadmap',
				route: 'roadmap',
			},
		],
	},
	{
		label: 'Components',
		route: 'components',
		category: 'components',
		children: [
			{
				label: 'Avatars',
				route: 'avatars',
			},
			{
				label: 'Badges',
				route: 'badges',
			},
			{
				label: 'Buttons',
				route: 'buttons',
			},
			{
				label: 'Button Groups',
				route: 'button-groups',
			},
			{
				label: 'Checkboxes',
				route: 'checkboxes',
			},
			{
				label: 'Comboboxes',
				route: 'comboboxes',
			},
			{
				label: 'Dialogs',
				route: 'dialogs',
			},
			{
				label: 'Dropdowns',
				route: 'dropdowns',
			},
			{
				label: 'Icons',
				route: 'icons',
			},
			{
				label: 'Input Groups',
				route: 'input-groups',
			},
			{
				label: 'Radio Groups',
				route: 'radio-groups',
			},
			{
				label: 'Toggles',
				route: 'toggles',
			},
		],
	},
];
