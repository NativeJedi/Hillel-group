import './assets/styles/main.scss';

// Task 1
const populationList = document.querySelectorAll('[class = population]');
const populationArr = Array.prototype.slice.call(populationList);

const totalPop = populationArr.reduce((sum, curEl) => {
  const el = curEl.innerHTML.replace(/,/g, '');
  return sum + Number(el);
}, 0);

const averagePop = totalPop / populationList.length;
function prettify(num) {
  const sNum = num.toString();
  return sNum.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1,');
}
document.querySelector('[class = total-population]').innerHTML = prettify(totalPop);
document.querySelector('[class = average-population]').innerHTML = prettify(averagePop);
