

/**
 * 
 * @param array 需要剪切的数组
 * @param start 开始索引
 * @param end 结束索引
 */
function slice(array: any[], start: number, end: number): any[] {
    // 如果数组不存在或者数组长度为空
    let length = array == null ? 0 : array.length
    if(!length) {
        return []
    }

    if (start < 0) {
        start = -start > length ? 0 : length + start
    }

    end = end > length ? length : end

    if (end < 0) {
        end += length
    }

    length = start > end ? 0 : end - start


    // 根据索引算出截取长度
    length = start > end ? 0 : end - start

    let idx = -1
    const result = new Array(length)

    while(++idx < length) {
        result[idx] = array[idx + start]
    }

    return result
}

export default slice