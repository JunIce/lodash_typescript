import slice from './slice'

/**
 * 
 * @param array 
 * @param n     the number need to drop
 */
function dropRight (array: any[], n: number=1): any[] {
    const length = array == null ? 0 : array.length

    if (!length) {
        return []
    }

    return slice(array, 0, n < 0 ? 0 : -n)
}

export default dropRight