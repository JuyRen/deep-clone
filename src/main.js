import arrayEach from './helper/arrayEach';
import cloneRegExp from './helper/cloneReg';
import cloneFunction from './helper/cloneFunction';
import getTag, { needToDeepCloneTags, Tag } from './helper/getTag';
import isObject from './helper/isObject';

function initCloneByValue(value) {
    const Ctor = value.constructor();

    return new Ctor();
}

function cloneByTag(target, tag) {
    const Ctor = target.constructor;
    switch (tag) {
        case Tag.stringTag:
        case Tag.numberTag:
        case Tag.dateTag:
            return new Ctor(target);

        case Tag.regexpTag:
            return cloneRegExp(target);

        case Tag.functionTag:
            return cloneFunction(target);

        default:
            return new Ctor(target);
    }
}

function deepClone(value, map = new Map()) {
    if (!isObject(value)) {
        return value;
    }

    const tag = getTag(value);

    if (!needToDeepCloneTags.includes(tag)) {
        return cloneByTag(value, tag);
    }

    // 初始化value对应的类型
    const result = initCloneByValue(value);

    // 先解决循环引用，将value作为key存到map中，
    // 下次使用，如果key还是value，则直接返回,保存的result
    if (map.get(value)) {
        return map.get(value);
    }

    map.set(value, result);

    const isArray = tag === Tag.arrayTag;
    arrayEach(isArray ? value : Reflect.ownKeys(value), (v, key) => {
        if (!isArray) {
            // eslint-disable-next-line no-param-reassign
            key = v;
        }
        result[key] = deepClone(value[key], map);
    });

    // 拷贝set对象
    if (tag === Tag.setTag) {
        // set.forEach((value, index, array) => {}) value === index
        value.forEach(v => {
            result.add(deepClone(v, map));
        });
    }

    // 拷贝map对象
    if (tag === Tag.mapTag) {
        // map.forEach((value, key, index) => {}) value, key => [key, value]
        value.forEach((v, k) => {
            result.set(k, deepClone(v, map));
        });
    }

    return result;
}

export default deepClone;
