/**
 * Check if the given element is an input element.
 */
export function isInputElement(element: unknown): element is HTMLInputElement {
	return element instanceof HTMLInputElement;
}
