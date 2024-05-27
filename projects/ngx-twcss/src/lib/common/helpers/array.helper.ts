export abstract class ArrayO {

    /**Merge two arrays into one without duplicates
     * @returns new Set<T>()
     */
    static mergeArrays<T>(array1: T[], array2: T[]): T[] {

        return [...new Set<T>([...array1, ...array2])]
    }
}
