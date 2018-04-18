
import arrayPush from './array-push'
/**
 * 
 * @param array array to compact
 * @param values
 */
function concat(): any[] {
    // initial array
    let array = arguments[0]

    const length = array == null ? 0 : array.length
    if(!length) {
        return []
    }

    let idx = 0
    let result = array

    while(++idx < arguments.length) {
        arrayPush(result, arguments[idx])
    }
    return result
}

export default concat