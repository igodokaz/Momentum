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
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  // loginForm.classList.add("hidden");
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`;

  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
//
localStorage.setItem("username", "nico");
localStorage.removeItem("username");
//
const clock = document.querySelector("h2#clock");

function sayHello() {
  console.log("Hello");
}

setInterval(sayHello, 5000);
//
const date = new Date();

date.getDate();
date.getDay();
date.getFullYear();
date.getHours();
date.getMinutes();
date.getSeconds();
new Date().getSeconds();
"1".padStart(2, "0");
"1".padEnd(2, "0");
new Date().getHours(); //19
string(new Date().getHours()); //"19"
//

Math.random();
Math.round(); //반올림
Math.ceil(); //올림
Math.floor(); //내림
Math.floor(Math.random() * 10);
[1, 2, 3, 4, 5].length;
