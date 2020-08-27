function findMaxSalaryPerson(staff) {
    const staffArr = [...staff];

    staffArr.sort((liFirst, liSecond) => {
        const salaryFirst = Number(liFirst.dataset.salary.replace(/[^0-9]/g, ""));
        const salarySecond = Number(liSecond.dataset.salary.replace(/[^0-9]/g, ""));

        return salaryFirst - salarySecond;
    });

    const {
        textContent: name,
        dataset: {
            salary,
            age,
            position,
        },
    } = staffArr[staffArr.length - 1];

    const maxSalaryPerson = {
        name,
        salary,
        age,
        position,
    };

    return maxSalaryPerson;
}

function displayMaxSalaryPerson(maxSalaryPerson) {
    const maxSalaryPersonKeys = Object.keys(maxSalaryPerson);
    maxSalaryPersonKeys.forEach((personKey) => {
        const resultFild = document.querySelector(`#${personKey}`);
        resultFild.textContent = `: ${maxSalaryPerson[personKey]}`;
    });
}

function toDoTask2() {
    const staff = document.querySelectorAll("li[data-position]");
    const maxSalaryPerson = findMaxSalaryPerson(staff);
    displayMaxSalaryPerson(maxSalaryPerson);
}

toDoTask2();
