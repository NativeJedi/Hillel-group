import './assets/styles/main.scss';
/*eslint-disable */

// Task 1
const populationList = document.querySelectorAll('.population');
const populationArr = [...populationList];

const totalPop = populationArr.reduce((sum, curEl) => {
  const el = curEl.innerHTML.replace(/,/g, '');
  return sum + Number(el);
}, 0);

const averagePop = totalPop / populationList.length;
function prettify(num) {
  const sNum = num.toString();
  return sNum.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
document.querySelector('[class = total-population]').innerHTML = prettify(totalPop);
document.querySelector('[class = average-population]').innerHTML = prettify(averagePop);

// Task 2

const liArr = document.querySelectorAll('ul li');
const newArr = [...liArr];
const newObj = newArr.map((el) => {
  const salaryNum = Number(el.dataset.salary.replace(/[$,]/g, ''));
  return {
    position: el.dataset.position,
    salary: salaryNum,
    age: el.dataset.age,
    worker: el.innerText,
  };
});

const honorWorker = newObj.reduce(((previousWorker, currentWorker) => {
  return currentWorker.salary > previousWorker.salary ? currentWorker : previousWorker
}), {salary: null});

function numberToStringAndPrettify (num){
  return String(num).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

document.querySelector('#name').innerText = honorWorker.worker;
document.querySelector('#salary').innerText ='$' + numberToStringAndPrettify(honorWorker.salary);
document.querySelector('#age').innerText = honorWorker.age + ' года';
document.querySelector('#position').innerText = honorWorker.position;

