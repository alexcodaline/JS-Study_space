// // Завдання 1

// async function showAdminName(data) {
//   try {
//     let response = await fetch(data);
//     let workData = await response.json();

//     for (const key in workData) {
//       let item = workData[key];
//       if (item.isAdmin === true) {
//        console.log(item.name);
//       } else {
//         console.log("Admin is not found");
//       }
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// showAdminName("./lesson35/home-work-data.json");

// // Завдання 2
// let nikola = { firstName: "Nikola", lastName: "Tesla" };
// let bob = { firstName: "Bob" };
// let mike = { lastName: "Smith" };
// let michel = {};

// let getFullName = function (user) {
//   return `${user.firstName} ${user.lastName}`;
// };

// getFullName = new Proxy(getFullName, {
//   apply(target, thisArg, args) {
//     const user = args[0];
//     if (!user.hasOwnProperty("firstName") && !user.hasOwnProperty("lastName")) {
//       return "'No name'";
//     } else if (!user.hasOwnProperty("firstName")) {
//       return user.lastName;
//     } else if (!user.hasOwnProperty("lastName")) {
//       return user.firstName;
//     } else {
//       return target(...args);
//     }
//   },
// });

// console.log(getFullName(nikola));
// console.log(getFullName(bob));
// console.log(getFullName(mike));
// console.log(getFullName(michel));

// // Завдання 3
// let users = [
//   { name: "Nikola", age: 18, id: 1 },
//   { name: "Bob", age: 25, id: 2 },
//   { name: "Mike", age: 32, id: 3 },
// ];
// localStorage.setItem("storedUsers", JSON.stringify(users));

// // використав forEach для перебору масива, так як щось подібне застосовували в минулих домашніх роботах

// function sayHello(id) {
//     let storageData = localStorage.getItem("storedUsers");
//     let parseData = JSON.parse(storageData);
//     parseData.forEach((element) => {
//       if (element.id === id) {
//         console.log("Hello, " + element.name)
//       }
//     });
// }
// sayHello(3);

// // Завдання 4
let inputEl = document.querySelector('input[type="text"]');

inputEl.addEventListener("input", function () {
  let inputVal = inputEl.value;
  localStorage.setItem("inputValue", inputVal);
});

window.addEventListener("load", function () {
  let loadVal = localStorage.getItem("inputValue");
  if (loadVal) {
    inputEl.value = loadVal;
  }
});
