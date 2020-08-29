'use strict'

// Task 1

const population = document.querySelectorAll('.population');

const populationArr = [...population];

const total = populationArr.reduce((sum, current) => {

    const countyPopulation = +current.innerHTML.replace(/,/g, '');

    return sum + countyPopulation;

}, 0);

const average = total / populationArr.length;

const totalPopulation = document.querySelector('.total-population');

totalPopulation.innerHTML = total;

const averagePopulation = document.querySelector('.average-population');

averagePopulation.innerHTML = average;


// Task 2

const employees = document.querySelectorAll('ul li');

const employeesArr = [...employees];

const highestPaidEmployee = employeesArr.reduce((employee, current) => {

    const currentSalary = +current.getAttribute('data-salary').slice(1).replace(/,/g, '');
    const highest = employee.salary < currentSalary ? employee.salary = currentSalary : employee.salary;

    if (employee.salary === currentSalary) {
        employee.name = current.textContent;
        employee.salary = highest;
        employee.age = current.getAttribute('data-age');
        employee.position = current.getAttribute('data-position');
    }

    return employee;

}, {
    name: '',
    salary: 0,
    age: '',
    position: '',
});

const name = document.querySelector('#name');
const salary = document.querySelector('#salary');
const age = document.querySelector('#age');
const position = document.querySelector('#position');

name.innerHTML = highestPaidEmployee.name;
salary.innerHTML = highestPaidEmployee.salary;
age.innerHTML = highestPaidEmployee.age;
position.innerHTML = highestPaidEmployee.position;