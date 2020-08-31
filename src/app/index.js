import "./assets/styles/main.scss";

import { calcTotal, calcAverage, displayCalcData } from "./task1";

import { findMaxSalaryPerson, displayMaxSalaryPerson } from "./task2";

function toDoTask1() {
  const countries = document.querySelectorAll(".population");
  const resultTotal = calcTotal(countries);
  const resultAverage = calcAverage(countries);

  displayCalcData(resultTotal, ".total-population");
  displayCalcData(resultAverage, ".average-population");
}
toDoTask1();

function toDoTask2() {
  const staff = document.querySelectorAll("li[data-position]");
  const maxSalaryPerson = findMaxSalaryPerson(staff);
  displayMaxSalaryPerson(maxSalaryPerson);
}
toDoTask2();
