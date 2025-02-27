import { Injectable, signal } from "@angular/core";

/**
 * A service that allows the user to toggle between light and dark themes.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private initialized = false;
  private key = 'theme';
  /**
   * Toggle the theme between light and dark.
   */
  toggle() {
    document.documentElement.classList.toggle('dark');
    this.isDark.set(this._isDark);
    localStorage.setItem(this.key, this.isDark() ? 'dark' : 'default');
  }
  /**
   * Initialize the theme based on the user's previous theme preference.
   *
   * If there is no previous theme preference, the default theme will be used.
   * @param theme The theme to initialize. If setted, this will override previous user's theme preference.
   */
  init(opts: { theme?: 'default' | 'dark', key: 'theme' | string & {} } = { theme: 'default', key: 'theme' }): ThemeService {
    const { theme, key } = opts;
    this.key = key;
    if (this.initialized) return this;
    if (theme === 'dark' && !this._isDark) {
      this.toggle();
    } else if (localStorage.getItem(key) === 'dark' && !this._isDark) {
      this.toggle();
    }
    this.initialized = true;
    return this;
  }
  isDark = signal(false);
  /**
   * Returns true if the current theme is dark. Otherwise, returns false.
   */
  private get _isDark() {
    return document.documentElement.classList.contains('dark');
  }
}
