// Conditionals

// const age = prompt("How old are you?");

// console.log(age);
// console.log(typeof age);
// console.log(typeof "15", typeof parseInt("15"));
// console.log(age, parseInt(age));

// const age = parseInt(prompt("How old are you?"));

// console.log(age);

const age = parseInt(prompt("How old are you?"));

// console.log(isNaN(age));

if (isNaN(age) || age < 0) {
  console.log("Please write a real positive number");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  console.log("You can Drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  console.log("Wow you are wise");
} else if (age > 80) {
  console.log("You can do whatever you want");
}
