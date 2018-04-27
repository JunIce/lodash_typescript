
/**
 * 
 * @param array 
 * @param value value to find
 * @param fromIndex 
 */
export function indexOf (array: any[], value: any, fromIndex: number = 0): number {
    const length = array == null ? 0 : array.length

    if (!length) {
        return -1
    }

    let index = fromIndex

    if (index < 0) {
        index += length
    }

    while (++index < length) {
        if (array[index] === value) {
            return index
        }
    }

    return -1
}