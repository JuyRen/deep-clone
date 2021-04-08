function cloneRegExp(regexp) {
    const reFlags = /\w*$/;

    const result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
    result.lastIndex = regexp.lastIndex;
    return result;
}

export default cloneRegExp;
