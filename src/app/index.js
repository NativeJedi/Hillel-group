import './assets/styles/main.scss';

const array = document.querySelectorAll('[class = population]');

const fixed = Array.prototype.slice.call(array);

const sum = fixed.reduce((prev, next) => {
  const el = next.innerHTML.replace(/[\s.,%]/g, '');
  return prev + Number(el);
}, 0);

function fixNumber(a) {
  return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const aver = sum / array.length;

const total = fixNumber(sum);
const average = fixNumber(aver);

document.querySelector('[class = total-population]').innerHTML = total;
document.querySelector('[class = average-population]').innerHTML = average;
