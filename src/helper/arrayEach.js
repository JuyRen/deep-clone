function arrayEach(array, iteratee) {
    let index = -1;
    const { length } = array;
    while (++index < length) {
        const shouldBreak = iteratee(array[index], index);
        if (shouldBreak) break;
    }
    return array;
}

export default arrayEach;
