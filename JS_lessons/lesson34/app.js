// Завдання 1
// let mixin = {
//   vat() {
//     return this.price + this.price * 0.2;
//   },
//   exciseDuty() {
//     return this.price + this.price * 0.3 + 10;
//   },
//   singleTax() {
//     return this.price + 1;
//   },
// };
// class Cola {
//   constructor(brand, price) {
//     this.brand = brand;
//     this.price = price;
//   }
// }
// Object.assign(Cola.prototype, mixin);

// class Whiskey {
//   constructor(brand, price) {
//     this.brand = brand;
//     this.price = price;
//   }
// }
// Object.assign(Whiskey.prototype, mixin);
// class Ice {
//   constructor(price) {
//     this.price = price;
//   }
// }
// Object.assign(Ice.prototype, mixin);

// let cocaCola = new Cola("Coca-Cola", 10);
// let johnWalker = new Whiskey("John Walker", 100);
// let ice = new Ice(2);
// console.log(cocaCola.vat());
// console.log(johnWalker.exciseDuty());
// console.log(ice.singleTax());

// Завдання 2
// function uniceString(word) {
//   let words = word.split(";");
//   let uniqueWord = new Set(words);
//   return [...uniqueWord].join("; ");
// }
// console.log(uniceString("cherry;orange;cherry;banana;banana;"));

// Завдання 3
// let list = document.querySelector(".shop-list");
// let items = list.querySelectorAll("li");

// let uniqueGoods = new Set();

// items.forEach((item) => {
//   uniqueGoods.add(item.textContent);
// });

// console.log(uniqueGoods);

// Завдання 4

let mike = { name: "Mike", age: 18 };
let bob = { name: "Bob", age: 25 };
let nikola = { name: "Nikola", age: 32 };
let userVisits = new Map();

function mikeVisits(user) {
  if (userVisits.has(user)) {
    userVisits.set(user, userVisits.get(user) + 1);
  } else {
    userVisits.set(user, 1);
  }
}

function bobVisits(user) {
  if (userVisits.has(user)) {
    userVisits.set(user, userVisits.get(user) + 1);
  } else {
    userVisits.set(user, 1);
  }
}
function nikolaVisits(user) {
  if (userVisits.has(user)) {
    userVisits.set(user, userVisits.get(user) + 1);
  } else {
    userVisits.set(user, 1);
  }
}

mikeVisits(mike);
mikeVisits(mike);
mikeVisits(mike);
bobVisits(bob);
nikolaVisits(nikola);
nikolaVisits(nikola);
console.log(userVisits.get(mike));
console.log(userVisits.get(bob));
console.log(userVisits.get(nikola));
