document.querySelector("#category").addEventListener("click", function (e) {
  console.log("category parent clicked!!", e.target.id);

  window.location.href = "/" + e.target.id;
});

// document.querySelector("#form").addEventListener("keyup", (e) => {
//   if (e.target.dataset.uppercase != undefined) {
//     e.target.value = e.target.value.toUpperCase();
//   }
// });

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

const changeColorBtn = document.getElementById("color");

function changeBackgroundColor() {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  const mainContainer = document.getElementsByClassName("main-container");
  mainContainer[0].style.backgroundColor = rndCol;
}

const controller = new AbortController();

changeColorBtn.addEventListener("click", function () {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  const mainContainer = document.getElementsByClassName("main-container");
  mainContainer[0].style.backgroundColor = rndCol;
});

// changeColorBtn.removeEventListener("click", changeBackgroundColor);

// const nameId = document.getElementById("name");
// nameId.addEventListener("keydown", (event) => {
//   const output = document.getElementById("output");
//   output.textContent = `you pressed ${event.key}`;
// });

const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {
    e.preventDefault();
    console.log("fname :", fname.value);
    console.log("lname :", lname.value);
    para.textContent = "you need to fill in both names.!";
  }
});

const displayButton = document.getElementById("displayButton");
const box = document.getElementById("box");
const video = document.querySelector("video");

displayButton.addEventListener("click", () => {
  box.classList.remove("hidden");
  box.classList.add("view");
});
video.addEventListener("click", (e) => {
  e.stopPropagation();
  video.play();
});
box.addEventListener("click", () => {
  box.classList.add("hidden");
  box.classList.remove("view");
});
