// завдання 1
// let car = {
//   model: "Sportage",
//   year: "2018",
//   color: "black",
//   signal() {
//     alert("fa! fa!");
//   },
// };
// car.color = "white";
// car.type = "electric";
// завдання 2
// let salaries = {
//   frontend: 12000,
//   backend: 10000,
//   designer: 8000,
//   dayPay() {
//     console.log("We must pay salary on Tuesday!");
//   },
//   total() {
//     let sum = 0;
//     for (let key in salaries) {
//       if (typeof salaries[key] === "number") {
//         sum += salaries[key];
//       }
//     }
//     return sum;
//   },
// };
// salaries.dayPay();
// console.log(salaries.total());
// salaries.manager = 56500;
// console.log(salaries.total());
// Завдання 3
// function Pc(brand, system, cost) {
//   this.brand = brand;
//   this.system = system;
//   this.cost = cost;
// }
// let dell = new Pc("Dell", "windows", 800);
// let apple = new Pc("Apple", "MAC OS", 1700);
// Завдання 4
function Pc(brand, system, cost) {
  this.brand = brand;
  this.system = system;
  this.cost = cost;
  this[Symbol.toPrimitive] = function (hint) {
    switch (hint) {
      case "string":
        return this.brand;
      case "number":
        return this.cost;
      case "default":
        return "//:" + this.brand + " " + this.system + " " + this.cost + " ";
    }
  };
}
let dell = new Pc("Dell", "windows", 800);
let apple = new Pc("Apple", "MAC OS", 1700);
console.log(dell + apple);
