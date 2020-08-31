/* eslint-disable guard-for-in */
import './assets/styles/main.scss';

const listItems = Array.from(document.querySelectorAll('span.population'));

const populArr = listItems.map((item) => {
  const itemNum = Number(item.textContent.replace(/,/g, ''));
  return itemNum;
});
const total = populArr.reduce((acc, currVal) => acc + currVal, 0);
const average = total / populArr.length;
document.querySelector('p.total > span').innerText = total;
document.querySelector('p.average > span').innerText = average;

const arr = [];

const honorDesk = {
  name: document.querySelector('#name'),
  salary: document.querySelector('#salary'),
  age: document.querySelector('#age'),
  position: document.querySelector('#position'),
};

const employeesList = document.querySelectorAll('ul > li');

function employeesToArr(htmlCollection) {
  const elements = [...htmlCollection];
  elements.forEach((item) => {
    const { salary } = item.dataset;
    const salaryToNumber = Number(salary.replace(/[$,]/g, ''));
    arr.push({
      name: item.innerText,
      position: item.dataset.position,
      age: item.dataset.age,
      salary: salaryToNumber,
    });
  });
  return arr;
}
employeesToArr(employeesList);

const topSalaryEmployee = arr.reduce((prev, curr) => (prev.salary > curr.salary ? prev : curr));

Object.keys(honorDesk).forEach((key) => {
  honorDesk[key].innerText = topSalaryEmployee[key];
});
