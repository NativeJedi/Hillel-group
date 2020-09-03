function checkFiled() {
    return obj?.credentials?.name;
}

function getArrayFiled(arr) {
    return arr?.[0]?.name;
}
console.log(getArrayFiled());