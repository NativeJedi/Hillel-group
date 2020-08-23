import {sum} from "./math";
import './style.css';
import './style.scss';

function checkField(obj) {
    return obj?.credentials?.name;
}

console.log(checkField({
    credentials: {
        name: 'adsd',
    }
}));

function getArrField(arr) {
    return arr?.[0]?.name;
}

console.log(sum(2,2));

console.log(getArrField([]))

