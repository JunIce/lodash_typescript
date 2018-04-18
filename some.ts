

/**
 * @param array      遍历数组
 * @param predicate  验证函数，如果返回值为true即返回
 */
function some(array: any[], predicate: Function): Boolean{
    const length = array == null ? 0 : array.length

    let idx = 0
    while(idx < length) {
        if (predicate(array[idx], idx, array)) {
            return true
        }
        idx++
    }
    return false
}

export default some