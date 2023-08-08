// Завдання 1
// let user = {};
// Object.defineProperty(user, 'name', {
//   value: "",
//   writable: false,
// });
// Object.defineProperty(user, 'age', {
//   value: "",
//   writable: false,
// });
// Object.defineProperty(user, 'id', {
//   value: "",
//   writable: false,
//   configurable: false,
// });





// Завдання 2
// let dataBase = {
//   dbName: "user",
//   dbType: "MySQL",
// };

// Object.freeze(dataBase);

// let configerateDB = {
//   token: "123",
//   password: "567",
//   user: "admin",
// };
// Object.seal(configerateDB);







// завдання 3
// let salaries = {
//   frontend: 2000,
//   backend: 1500,
//   design: 1000,
// };
// Object.defineProperty(salaries, "sum", {
//   get() {
//     let sum = 0;
//     for (salary in this) {
//       sum += this[salary];
//     }
//     console.log(sum);
//   },
//   enumerable: false,
// });
// Object.defineProperty(salaries, "addSalaries", {
//   set(newValue) {
//     let newSalaries = newValue.map((item) => item.split(":"));
//     newSalaries.forEach(([key, value]) => {
//       this[key] = parseInt(value);
//     });
//   },
//   enumerable: true,
// });

// salaries.addSalaries = [
//   "frontend:2500",
//   "backend:1750",
//   "design:1300",
//   "manager:800",
// ];

// console.log(salaries);




// // завдання 4
let user = {
  name: "Mike",
  surname: "Davis",
  age: 25,
};
Object.defineProperty(user, "userInfo", {
  get() {
    let info = [];
    for (let key in this) {
      info.push(`${key}: ${this[key]}`);
    }
    return info.join(", ");
  },
});
console.log(user.userInfo);
// user.login = "MK-18";
// console.log(user.login);
