/**Toggle dark mode*/
export function toggleDarkMode() {
  document.documentElement.classList.toggle('dark')
}

/**
 * Set dark mode
 */
export function setDarkMode() {
  document.documentElement.classList.toggle('dark', true)
}

/**
 * Set light mode by removing the dark class
 */
export function setLightMode() {
  document.documentElement.classList.toggle('dark', false)
}

