export abstract class ThemeHelper {
  /**
   * Toggle the theme between light and dark.
   */
  static toggle() {
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', this.isDark ? 'dark' : 'default');
  }
  /**
   * Initialize the theme based on the user's previous theme preference.
   *
   * If there is no previous theme preference, the default theme will be used.
   * @param theme The theme to initialize. If setted, this will override previous user's theme preference.
   */
  static init(theme: 'default' | 'dark' = 'default') {
    if (theme === 'dark' && !this.isDark) {
      this.toggle();
    } else if (localStorage.getItem('theme') === 'dark' && !this.isDark) {
      this.toggle();
    }
  }
  /**
   * Returns true if the current theme is dark. Otherwise, returns false.
   */
  static get isDark() {
    return document.documentElement.classList.contains('dark');
  }
}
