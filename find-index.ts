
/**
 * 
 * @param array      search array
 * @param predicate  function
 * @param idx        start index
 */
function findIndex(array: any[], predicate: Function, idx:number = 0): number {

    const length = array == null ? 0 : array.length
    if(!length) {
        return -1
    }
    
    while(idx < length) {
        if(predicate(array[idx], idx, array)) {
            return idx
        }
        idx++
    }
    return -1
}

export default findIndex