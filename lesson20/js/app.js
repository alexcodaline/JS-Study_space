// завдання №1
let a = prompt("Enter number a:");
let b = prompt("Enter number b:");
function maxNumber(a, b) {
  if (Number(a) > Number(b)) {
    return "number a>b = " + a;
  } else if (Number(b) > Number(a)) {
    return "number b>a = " + b;
  } else {
    return "a = b";
  }
}
alert(maxNumber(a, b));
// завдання №2
// let number = prompt('Enter the number');
// function revers(number) {
//   number = Number(number);
//   return -number;
// }
// alert(revers(number));
// завдання №3
// let number = prompt('Enter number');
// let count = prompt('Enter count');
// function three(number, count) {
//   return (Number(number + 3 * count));
// }
// alert(three(+number, +count));
// завдання №4
// let km = prompt("Enter kilometrs:");
// let metric = prompt("Enter: m or cm");
// function KmToM(km) {
//   return km * 1000;
// }
// function KmToCm(km) {
//   return km * 100000;
// }
// function getMetric(metric, km, m, cm) {
//   if (metric === "m") {
//     return KmToM(km);
//   }
//   if (metric === "cm") {
//     return KmToCm(km);
//   }
// }
// alert(getMetric(metric, km, KmToM, KmToCm));
