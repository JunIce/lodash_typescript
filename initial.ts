import slice from './slice'

/**
 * 
 * @param array 剪切数组
 */
export function initial (array: any[]): any[] {
    const length = array == null ? 0 : array.length
    if (!length) {
        return []
    }

    return slice(array, 0 , -1)
}