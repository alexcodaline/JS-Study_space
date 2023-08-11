// завдання 1 - 2.1
// function count(expression) {
//   function getValues(expression) {
//     let values = [...expression];
//     return values;
//   }
//   let values = getValues(expression);
//   switch (values[1]) {
//     case "+":
//       return showResult(sum(values));
//     case "-":
//       return showResult(subtract(values));
//     case "*":
//       return showResult(multiply(values));
//     case "/":
//       return showResult(divide(values));
//   }
//   function showResult(values) {
//     return values;
//   }
// }
// function sum(values) {
//   return +values[0] + +values[2];
// }
// function subtract(values) {
//   return +values[0] - +values[2];
// }
// function multiply(values) {
//   return +values[0] * +values[2];
// }
// function divide(values) {
//   return +values[0] / +values[2];
// }
// // console.log(count('5+2'));

// try {
//   let devide = count("5/0");
//   if (devide == Infinity) throw new Error("Cannot divide by 0");
// } catch (error) {
//   console.log(error.name + ": " + error.message);
//   console.log("0");
// }
// завдання 3
// function count(expression) {
//   function getValues(expression) {
//     let values = [...expression];
//     return values;
//   }
//   let values;
//   try {
//     values = Values(expression); //line1
//   } catch (error) {
//     if (values === undefined)
//       throw console.log(error.name + " : " + error.message);
//     else {
//       values = [0, "+", 0];
//     }
//   }
//   switch (values[1]) {
//     case "+":
//       return showResult(sum(values));
//     case "-":
//       return showResult(subtract(values));
//     case "*":
//       return showResult(multiply(values));
//     case "/":
//       return showResult(divide(values));
//   }
//   function showResult(values) {
//     return values;
//   }
// }
// function sum(values) {
//   return values[0] + values[2];
// }
// function subtract(values) {
//   return values[0] - values[2];
// }
// function multiply(values) {
//   return values[0] * values[2];
// }
// function divide(values) {
//   return values[0] / values[2];
// }

// try {
//   count(5 * 2);
// } catch (error) {
//     console.log('Please write in string format');
//   }
// Завдання 4
function MakeUsers(name, age) {
  this.name = name;
  this.age = age;
}

function showMovie(user) {
  if (user.age >= 18) {
    console.log("You can watch this movie");
  } else {
    console.log("Sorry, you are too young");
  }
}

function getAge() {
  const age = parseInt(prompt("Enter your age:"));
  if (isNaN(age)) {
    throw new Error("Age must be a number.");
  }
  if (age < 0) {
    throw new Error("Age cannot be negative.");
  }
  user.age = age;
}
try {
  getAge();
  showMovie(user);
} catch (error) {
  console.log(error.message);
  console.log("Please try again.");
}
