/**
 * Type guard for HTMLLabelElement
 */
export function isLabelElement(element: unknown): element is HTMLLabelElement {
	return element instanceof HTMLLabelElement;
}
