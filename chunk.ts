import slice from './slice'

/**
 * 
 * @param array 需要分割的数组
 * @param size 分割尺寸
 */
function chunk(array: any[], size: number): any[] {
    // 如果分割尺寸不存在的情况下
    size = Math.max(size, 0)
    
    const length = array == null ? 0 : array.length

    if(!length || size < 1) {
        return []
    }

    // initial index
    let index = 0
    // new array index-key
    let reIdx = 0
    // initial new array
    const result = new Array(Math.ceil( length / size))

    while(index < length) {
        result[reIdx++] = slice(array, index, (index += size))
    }

    return result
}

export default chunk