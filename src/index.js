
export { sum } from './math';

function chechField(obj) {
    return obj?.credentials?.name;
}
 console.log(chechField({}));

 function log(...args) {
    console.log(args);
}