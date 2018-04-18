 import slice from './slice'

function dropWhile(array: any[], predicate: Function): any[] {

    if( array == null || !array.length) {
        return []
    }

    const length = array.length
    let idx = -1

    while(++idx < length && predicate(array[idx], idx, array)) {}

    return slice( array, idx, length)
}

export default dropWhile