console.dir(document);
document.title;
document.title = "Hi";
document.body;
document.location;
document.getElementById("Title");

//

const title = document.getElementById("title");
console.dir(title);
title.innerText = "Got you!";

console.log(title.id);
console.log(title.className);

//

const title = document.getElementById("hello");
const title = document.getElementsByClassName("hello");
const title = document.getElementsByTagName("h1");
const title = document.querySelector(".hello h1");
const title = document.querySelector("div h1");
const title = document.querySelector(".hello h1:first-child");
const title = document.querySelectorAll(".hello h1");
const title = document.querySelector("#hello");
const title = document.getElementById("#hello");
const title = document.querySelector("#hello form");
const title = document.querySelector(".hello:first-child h1");

//
const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick() {
  h1.style.color = "blue";
  console.log("Just clicked!");
}

function handleMouseEnter() {
  h1.innerText = "Mouse is here!";
}

function handleMouseLeave() {
  h1.innerText = "Mouse is gone!";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copier!");
}

function handleWindowOffline() {
  alert("SOS no WIFI");
}
function handleWindowOnline() {
  alert("ALL GOOOOOOOD");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

//

const loginForm = document.getElementById("login-form");
const loginInput = loginForm.queryselector("input");
const loginButton = loginForm.queryselector("button");

const loginInput = document.queryselector("#login-form input");
const loginButton = document.queryselector("#login-form button");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
//
function onLoginBtnClick() {
  console.dir(loginInput.value);
  console.log("click!!");
}

loginButton.addEventListener("click", onLoginBtnClick);
//

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  tomato.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
//
