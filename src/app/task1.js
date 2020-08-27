function calcTotal(countries) {
    const totalPopulation = countries.reduce((sum, country) => {
        const countryPopArr = country.textContent.split("").filter((el) => Boolean(parseInt(el, 10) + 1));
        return sum + Number(countryPopArr.join(""));
    }, 0);

    return totalPopulation;
}

function calcAverage(countries) {
    const totalPopulation = calcTotal(countries);
    const countiresCount = countries.length;
    const averagePopulation = totalPopulation / countiresCount;

    return averagePopulation;
}

function displayCalcData(calcResult, resultFieldSelector) {
    const resultField = document.querySelector(resultFieldSelector);
    const calcResultArr = String(calcResult).split("");

    for (let i = 0; i < calcResultArr.length - 1; i++) {
        if (i % 3 === 0) {
            calcResultArr[i] += ",";
        }
    }

    const calcResultStr = calcResultArr.join("");

    resultField.textContent = calcResultStr;
}

function toDoTask1() {
    const countries = [...document.querySelectorAll(".population")];
    const resultTotal = calcTotal(countries);
    const resultAverage = calcAverage(countries);

    displayCalcData(resultTotal, ".total-population");
    displayCalcData(resultAverage, ".average-population");
}

toDoTask1();
