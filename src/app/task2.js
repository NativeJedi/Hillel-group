export function findMaxSalaryPerson(staff) {
  const staffArr = [...staff];

  staffArr.sort((salaryFirstStr, salarySecondStr) => {
    function convertSalaryToNum(salaryStr) {
      return Number(salaryStr.dataset.salary.replace(/[^0-9]/g, ""));
    }
    const salaryFirstNum = convertSalaryToNum(salaryFirstStr);
    const salarySecondNum = convertSalaryToNum(salarySecondStr);

    return salaryFirstNum - salarySecondNum;
  });

  const {
    textContent: name,
    dataset: { salary, age, position },
  } = staffArr[staffArr.length - 1];

  const maxSalaryPerson = {
    name,
    salary,
    age,
    position,
  };

  return maxSalaryPerson;
}

export function displayMaxSalaryPerson(maxSalaryPerson) {
  const maxSalaryPersonKeys = Object.keys(maxSalaryPerson);

  maxSalaryPersonKeys.forEach((personKey) => {
    const resultFild = document.querySelector(`#${personKey}`);
    resultFild.textContent = `: ${maxSalaryPerson[personKey]}`;
  });
}
