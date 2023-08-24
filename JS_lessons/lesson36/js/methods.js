import employees from "./employees.js";

export function totalSalary(employees) {
  let usersSalaries = 0;
  for (const key of employees) {
    usersSalaries += key.salary;
  }
  return usersSalaries;
}

export function departmentsQuantity(employees) {
  const totalDepartments = new Set();

  for (const key of employees) {
    totalDepartments.add(key.department);
  }

  return totalDepartments.size;
}

export function departmentsSalary(data) {
  const departSalary = {};
  data.forEach((employee) => {
    const department = employee.department;
    const salary = employee.salary;

    if (departSalary.hasOwnProperty(department)) {
      departSalary[department] += salary;
    } else {
      departSalary[department] = salary;
    }
  });

  return departSalary;
}
