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

// Task 2

const salaryELements = document.querySelectorAll('li[data-salary]');

const honorDesk = {
  name: '',
  salary: 0,
  age: 0,
  position: '',
};

const topEmployee = [...salaryELements].reduce((desk, employeeEl) => {
  const {
    salary,
    age,
    position,
  } = employeeEl.dataset;

  const name = employeeEl.innerText;
  const salaryAmount = +salary.replace(/[, $]/g, '');

  if (desk.salary > salaryAmount) {
    return desk;
  }

  return {
    name,
    salary: salaryAmount,
    age,
    position,
  };
}, honorDesk);

document.querySelector('[id = name]').innerHTML = `- ${topEmployee.name}`;
document.querySelector('[id = salary]').innerHTML = `- ${topEmployee.salary}`;
document.querySelector('[id = age]').innerHTML = `- ${topEmployee.age}`;
document.querySelector('[id = position]').innerHTML = `- ${topEmployee.position}`;
