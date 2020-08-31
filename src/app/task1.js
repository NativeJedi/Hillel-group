export function calcTotal(countries) {
  const countriesArr = [...countries];

  const totalPopulation = countriesArr.reduce((sum, country) => {
    const populationNum = Number(country.textContent.replace(/[^0-9]/g, ""));
    return sum + populationNum;
  }, 0);

  return totalPopulation;
}

export function calcAverage(countries) {
  const countriesArr = [...countries];

  const totalPopulation = calcTotal(countriesArr);
  const countiresCount = countriesArr.length;
  const averagePopulation = totalPopulation / countiresCount;

  return averagePopulation;
}

export function displayCalcData(calcResult, resultFieldSelector) {
  const resultField = document.querySelector(resultFieldSelector);
  const calcResultArr = String(calcResult).split("");

  for (let i = 1; i < calcResultArr.length; i++) {
    if (i % 3 === 0) {
      calcResultArr[calcResultArr.length - i - 1] += ",";
    }
  }

  resultField.textContent = ` ${calcResultArr.join("")}`;
}
