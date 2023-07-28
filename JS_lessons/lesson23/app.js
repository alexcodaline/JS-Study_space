// завдання 1
// let arr = ["Mike", "Nikola", "Tom"];
// console.log(arr[1]);
// arr[1] = "Alex";
// arr.splice(1, 2);
// console.log(arr);
// console.log(arr.length);

//завдання 2
// let a = [5, 3, -4, 25, 32, -16, 6];
// let b = [21, -30, 9, 5, 12, -19, 5, 25];
// function arr(a, b) {
//   if (a.length > b.length) {
//     console.log("a>b");
//   } else if (a.length < b.length) {
//     console.log("b > a");
//   } else console.log("a==b");
// }
// arr(a, b);

// завдання 3
// let phrase = 'I am learning JavaScript right now';
// console.log(phrase.split(' ', 6));

// завдання 4
// let a = [5, 3, 8, 5, 3, 2, 1, 2];
// let b = [];
// a.forEach(function (item) {
//   if (!b.includes(item)) {
//     b.push(item);
//   }
// });
// console.log(b);

// // завдання 5
// let users = [
//   { id: 1, age: 17 },
//   { id: 2, age: 18 },
//   { id: 3, age: 19 },
//   { id: 4, age: 21 },
//   { id: 5, age: 17 },
//   { id: 6, age: 20 },
//   { id: 7, age: 25 },
// ];
// function selectionAge(users) {
//   return users.filter((users) => users.age > 18 && users.age < 21);
// }
// selectionAge(users);

// let selectionId = selectionAge(users);
// selectionId.forEach((users) => {
//   console.log(users.id);
// });

// за допомогою map

// users.forEach((user) => {
//   if (user.age > 18 && user.age < 21) {
//     console.log(user.id);
//   }
// });
// console.log(
//   users
//     .filter((user) => user.age > 18 && user.age < 21)
//     .map((el) => el.id)
//     .join(", ")
// );

// console.log(
//   users
//     .map((user) => {
//       if (user.age > 18 && user.age < 21) {
//         return user.id;
//       }
//     })
//     .filter((el) => el)
//     .toString()
// );
