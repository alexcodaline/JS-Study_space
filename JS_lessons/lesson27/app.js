// Завдання 1
let car = {
  type: "electric",
  wheels: 4,
};

let sportCar = {
  doors: 2,
};
// 1.1
Object.setPrototypeOf(sportCar, car);
// 1.2
let passangerCar = Object.create(car);
passangerCar.doors = 4;
// 1.3
let toyCar = Object.create(sportCar);
toyCar.type = "toy";

// Завдання 2

// let employees = {
//   wallet: {},
//   pay(month, sum) {
//     this.wallet[month] = sum;
//   },
// };
// let frontendDeveloper = {
//   name: "Mike",
//   wallet: {},
// };
// Object.setPrototypeOf(frontendDeveloper, employees);
// let backendDeveloper = {
//   name: "Bob",
//   wallet: {},
// };
// Object.setPrototypeOf(backendDeveloper, employees);
// backendDeveloper.pay("june", 1500);
// frontendDeveloper.pay("june", 1700);
// console.log(backendDeveloper.wallet.june);
// console.log(frontendDeveloper.wallet.june);

// Завдання 3
// function User(name,age) {
//     this.name = name;
//     this.age = age;
// }
// let user_1 = new User('Mike',18);
// let user_2 = new User(user_1.name, user_1.age);
// user_2.name = 'Bob';
// user_2.age = 25;
// console.log(user_2);

// Завдання 4
function UserType(name) {
  for (let i = 0; i < name.length; i++) {
    this[i] = name[i];
    if (i + 1 == name.length) {
      Object.defineProperty(this, "length", {
        enumerable: true,
        writable: false,
        configurable: true,
        value: i + 1,
      });
    }
  }
}
let admins = new UserType(['Mike', 'Bob','Nikola']);
admins.join = Array.prototype.join;
console.log(admins.join('; '));