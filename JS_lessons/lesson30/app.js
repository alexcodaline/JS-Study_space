// Завдання 1
// let dom = document.querySelector(".dom h2:nth-of-type(2)");
// dom.textContent = "DOM method description";

// завдання 2
// let uaLinks = document.querySelectorAll("a[href*='/ua']");
// uaLinks.forEach(function (links) {
//   console.log(links.href);
// });

// завдання 3
// let list = document.getElementById("ul");
// // 0
// let liNull = document.createElement("li");
// liNull.innerHTML = 0;
// liNull.id = "null";
// list.prepend(liNull);
// // 2
// let liSecond = document.createElement("li");
// liSecond.id = "second";
// liSecond.innerHTML = 2;
// list.insertBefore(liSecond, list.children[2]);
// // 4
// let liFourth = document.createElement("li");
// liFourth.id = "fourth";
// liFourth.innerHTML = 4;
// list.appendChild(liFourth);
// console.log(list);

// завдання 4
let link = document.createElement("a");
link.id = "link";
link.href = "https://dom.spec.whatwg.org";
let h1 = document.querySelector("h1");
link.appendChild(h1);
console.log(link);
