/**Toggle theme mode
 * @param selector - default value = dark
*/
export function ToggleTheme(selector: string = 'dark') {
  document.documentElement.classList.toggle(selector)
}
