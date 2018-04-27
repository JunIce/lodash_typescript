
/**
 * 
 * @param array 数组
 * 获取数组第一个元素
 */
function head(array: any[]): any{
    return (array && array.length) ? array[0] : undefined
}

export default head