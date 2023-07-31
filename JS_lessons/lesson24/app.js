// завдання 1
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function sumArr(arr, item = 0) {
//   if (item === arr.length) {
//     return 0;
//   } else {
//     return arr[item] + sumArr(arr, item + 1);
//   }
// }
// let summa = sumArr(arr);
// console.log(summa);

// // скорочений запис

// // function sumArr(arr, item = 0) {
// //   return item === arr.length ? 0 : arr[item] + sumArr(arr, item + 1);
// // }
// // let summa = sumArr(arr);
// // console.log(summa);

//  завдання 2

function deepCount(arr) {
  let count = 0;
  function recurceCount(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        recurceCount(arr[i]);
      }
      count++;
    }
  }
  recurceCount(arr);
  return count;
}

// function deepCount(arr) {
//   return arr.reduce((count, item) => {
//     if (Array.isArray(item)) {
//       return count + deepCount(item) + 1;
//     }
//     return count + 1;
//   }, 0);
// } 


console.log(deepCount([]));
console.log(deepCount([1, 2, 3]));
console.log(deepCount("x", "y", ["z"]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([[[[]]]]));

// //  завдання 3
// let employees = {
//   development: {
//     backend: [
//       { name: "Mike", salary: 2000 },
//       { name: "Nikola", salary: 2500 },
//     ],
//     frontend: [
//       { name: "Artem", salary: 3000 },
//       { name: "Alex", salary: 2700 },
//     ],
//   },
//   sales: {
//     marketing: {
//       internet_marketers: [
//         { name: "Nina", salary: 1000 },
//         { name: "Olena", salary: 1300 },
//       ],
//       promotion: [
//         { name: "Oleg", salary: 1400 },
//         { name: "Masha", salary: 1700 },
//       ],
//     },
//     sellers: [
//       { name: "Max", salary: 900 },
//       { name: "Donald", salary: 700 },
//       { name: "Joe", salary: 1100 },
//     ],
//   },
//   designer: [{ name: "Kate", salary: 1800 }],
// };

// function sumSallary(obj) {
//   let sum = 0;
//   function calculateSalary(obj) {
//     for (let key in obj) {
//       if (Array.isArray(obj[key])) {
//         obj[key].forEach((employee) => (sum += employee.salary));
//       } else {
//         calculateSalary(obj[key]);
//       }
//     }
//   }
//   calculateSalary(obj);
//   return sum;
// }
// let summa = sumSallary(employees);
// console.log(summa);
// завдання 4
// let arr1 = [2, 15, 7, 3];
// let arr2 = [9, 3, 17, 12, 4, 8];
// let arr3 = [6, 11, 16, 15, 11];
// let arrMax = Math.max(...arr1, ...arr2, ...arr3);
// console.log(arrMax);