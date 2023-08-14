//  завдання 1
function getData(url) {
  let result = fetch(url);
  result
    .then((response) => response.json())
    .then((data) => {
      let filter = data.filter(
        (item) => item.title.startsWith("a") || item.title.startsWith("A")
      );
      console.log(filter);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

getData("https://jsonplaceholder.typicode.com/todos/");

//   завдання 2
async function getAsuncData(url) {
  try {
    let resultAsync = await fetch(url);
    let data = await resultAsync.json();
    let filter = data.filter(
      (item) => item.title.startsWith("a") || item.title.startsWith("A")
    );
    console.log(filter);
  } catch (e) {
    console.log(e.message);
  }
}
getAsuncData("https://jsonplaceholder.typicode.com/todos/");

// завдання 3-4
let a = document.querySelector(".user-a");
let ab = document.querySelector(".user-ab");
let btnA = document.querySelector(".add-a");
let btnB = document.querySelector(".add-ab");
let btnALL = document.querySelector(".add-all");

function task(url) {
  let taskResult = fetch(url);
  taskResult
    .then((response) => response.json())
    .then((data) => {
      let filterA = data.filter(
        (item) => item.title.startsWith("a") || item.title.startsWith("A")
      );
      btnA.addEventListener("click", function () {
        a.innerHTML = JSON.stringify(filterA);
        ab.innerHTML = "";
      });
      let filterAB = filterA.filter(
        (item) => item.title.startsWith("ab") || item.title.startsWith("AB")
      );
      btnB.addEventListener("click", function () {
        ab.innerHTML = JSON.stringify(filterAB);
        a.innerHTML = "";
      });
      btnALL.addEventListener("click", function () {
        a.innerHTML = JSON.stringify(filterA);
        ab.innerHTML = JSON.stringify(filterAB);
      });
      //   a.innerHTML = JSON.stringify(filterA); //завдання 3
      //   ab.innerHTML = JSON.stringify(filterAB);
    })
    .catch((error) => {
      console.error("Server error", error);
    });
}

task("https://jsonplaceholder.typicode.com/todos/");
