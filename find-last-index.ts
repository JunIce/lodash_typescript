
/**
 * 
 * @param array      search array
 * @param predicate  function
 * @param idx        start index
 */
function findLastIndex(array: any[], predicate: Function, idx:number = 0): number {

    const length = array == null ? 0 : array.length
    if(!length) {
        return -1
    }
    
    let searchIndex = length

    while(--searchIndex < length) {
        if(predicate(array[searchIndex], idx, array)) {
            return searchIndex
        }
    }
    return -1
}

export default findLastIndex