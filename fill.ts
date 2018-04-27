
function fill(array: any[], value: string, start: number = 0 , end: number): any[] {

    const length = array == null ? 0 : array.length

    if(!length) {
        return []
    }
    
    // end is not exists
    end = (end === undefined || end > length) ? length : end
    

    // 如果起始索引小于0
    if (start < 0) {
        start = -start > length ? 0 : start + length
    }

    if (end < 0) {
        end += length
    }

    while(start < end) {
        array[start++] = value
    }

    return array
}

export default fill
