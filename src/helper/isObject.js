/**
 * typeof 返回值
 * --------- primitive type ---------
 * 1. 'string'
 * 2. 'number'
 * 3. 'boolean'
 * 4. 'undefined'
 * 5. 'symbol'
 * 6. 'bigint'
 * --------- reference type ---------
 * 7. 'object'
 * 8. 'function'
 *
 * typeof null = 'object'
 */
function isObject(value) {
    const type = typeof value;

    return (type === 'object' && value !== null) || type === 'function';
}

export default isObject;
