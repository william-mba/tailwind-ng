import { Injectable } from '@angular/core';

/**
 * A service that allows the user to toggle between light and dark themes.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
	private initialized = false;
	/**
	 * Toggle the theme between light and dark.
	 */
	toggle() {
		document.documentElement.classList.toggle('dark');
		localStorage.setItem('theme', this.isDark ? 'dark' : 'default');
	}
	/**
	 * Initialize the theme based on the user's previous theme preference.
	 *
	 * If there is no previous theme preference, the default theme will be used.
	 * @param theme The theme to initialize. If setted, this will override previous user's theme preference.
	 */
	init(theme: 'default' | 'dark' = 'default') {
		if (this.initialized) return;
		if (theme === 'dark' && !this.isDark) {
			this.toggle();
		} else if (localStorage.getItem('theme') === 'dark' && !this.isDark) {
			this.toggle();
		}
		this.initialized = true;
	}
	/**
	 * Returns true if the current theme is dark. Otherwise, returns false.
	 */
	get isDark() {
		return document.documentElement.classList.contains('dark');
	}
}
