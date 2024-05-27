/**Verify if a value is assignable to className
 * @param cl Tailwind CSS class
 * @returns true if valid otherwise false.
 */
export function IsAcceptableClass<T extends { length: number }>(cl: T): boolean {
    if (typeof cl === "undefined") {
        return false
    }
    return cl.length >= 3
}