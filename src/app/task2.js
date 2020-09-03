export function findMaxSalaryPerson(staff) {
  const staffArr = [...staff];

  function convertSalaryToNum(salaryStr) {
    return Number(salaryStr.dataset.salary.replace(/[^0-9]/g, ''));
  }

  staffArr.sort((salaryFirstStr, salarySecondStr) => {
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
    const resultField = document.querySelector(`#${personKey}`);
    resultField.textContent = `: ${maxSalaryPerson[personKey]}`;
  });
}
