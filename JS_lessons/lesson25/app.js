// //  завдання 1
// class User {
//   #name;
//   constructor(name, login, age) {
//     this.#name = name;
//     this.login = login;
//     this.age = age;
//   }

//   //завдання 2
//     getName(isAdmin) {

//       return isAdmin == false ? "Permisson denied" : this.#name || this.login;
//     }
// //   завдання 3
//     ChangeName(name, password) {

//       if (password == "123") {
//         let oldName = this.#name;
//         return (this.#name = `Name Changed from ${oldName} to ` + name);
//       }
//     }
// }
// // завдання 4
// class Admin extends User {
//   #isAdmin = true;
//   constructor(name, login, age, isAdmin) {
//     super(name, login, age);
//     this.#isAdmin = isAdmin;
//   }
//   getUserName(user) {
//    return user.getName(this.#isAdmin)
//   }
// }
// let user1 = new User("Mike", "MK_18", 18);
// let user2 = new User("", "NRG", 22);
// let admin = new Admin();

// // console.log(user1.login);
// // console.log(user1.age);
// // console.log(user2.login);
// // console.log(user2.age);
// // console.log(user1.getName(true));
// // console.log(user2.getName(true));
// // console.log(user2.getName(false));
// // console.log(user1.ChangeName("Bill", "123"));
// console.log(admin.getUserName(user1));

// ЗАВДАННЯ 5
class User {
  #phone;
  constructor(name, phone) {
    this.name = name;
    this.#phone = phone;
  }

  getUserPhone(isAdmin) {
    let arr = this.#phone.split("");
    for (let i = 4; i <= 9; i++) {
      arr[i] = "*";
    }
    return isAdmin ? this.#phone : arr.join("");
  }
}

let user1 = new User("Mike", "067-888-88-99");
let user2 = new User("Tom", "099-888-88-99");

console.log(user2.getUserPhone(true));
console.log(user1.getUserPhone(false));
