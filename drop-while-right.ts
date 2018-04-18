 import slice from './slice'

function dropWhileRight(array: any[], predicate: Function): any[] {

    if( array == null || !array.length) {
        return []
    }

    const length = array.length
    let idx = length

    while(idx-- < length && predicate(array[idx], idx, array)) {}

    return slice( array, 0, idx )
}

export default dropWhileRight