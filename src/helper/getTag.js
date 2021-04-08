export const Tag = {
    numberTag: '[object Number]',
    stringTag: '[object String]',
    booleanTag: '[object Boolean]',
    undefinedTag: '[object Undefined]',
    nullTag: '[object Null]',
    symbolTag: '[object Symbol]',

    functionTag: '[object Function]',
    objectTag: '[object Object]',
    arrayTag: '[object Array]',
    mapTag: '[object Map]',
    setTag: '[object Set]',
    argsTag: '[object Arguments]',
    dateTag: '[object Date]',
    regexpTag: '[object RegExp]'
};

export const needToDeepCloneTags = [
    Tag.objectTag,
    Tag.arrayTag,
    Tag.mapTag,
    Tag.setTag,
    Tag.argsTag
];

function getTag(value) {
    return Object.prototype.toString.call(value);
}

export default getTag;
