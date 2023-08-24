import employees from "./employees.js";
import * as employeesMethods from "./methods.js";
import { totalSalary } from "./methods.js";
import { departmentsQuantity } from "./methods.js";
import { departmentsSalary } from "./methods.js";
console.log(totalSalary(employees));
console.log(departmentsQuantity(employees));
console.log(departmentsSalary(employees));
console.log(employeesMethods.departmentsSalary(employees));
