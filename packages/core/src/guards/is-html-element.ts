/**
 * Check if the given value is an HTMLElement.
 */
export function isHTMLElement(element: unknown): element is HTMLElement {
	return element instanceof HTMLElement;
}
