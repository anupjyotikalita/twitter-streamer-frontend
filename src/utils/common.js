export const isEmpty = arrayOrObject => size(arrayOrObject) === 0;
export const size = arrayOrObject => (arrayOrObject) ? (isArray(arrayOrObject) ? arrayOrObject : Object.keys(arrayOrObject)).length : 0;
export const isArray = variable => variable instanceof Array;
