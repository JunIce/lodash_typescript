

/**
 * 
 * @param array 需要处理的数组
 */
function compact(array: any[]): any[]{
    if (array == null) return []

    // initial new array
    const result = new Array()
    // initial new array index
    let idx = 0

    // loop
    for( let value of array) {
        if(value) {
            result[idx++] = value
        }
    }
    return result
}

export default compact