

/**
 * realize Array.prototype.push
 * @param array initial array
 * @param value values need to push ( array, string )
 */
function arrayPush (array: any[], value: any): any[] {
    let idx = -1
    // value length
    const length = value.length
    // array offset
    const offset = array.length

    while(++idx < length) {
        array[offset + idx] = value[idx]
    }
    
    return array
}
export default arrayPush