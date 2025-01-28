/**Toggle theme
 * @param token The class name to toggle in the class list of the root node of the document. Default is 'dark'
*/
export function toggleTheme(token = "dark") {
  document.documentElement.classList.toggle(token)
}

export abstract class ThemeHelper {
  static toggle = toggleTheme;
  static get isDark() {
    return document.documentElement.classList.contains('dark');
  }
}
