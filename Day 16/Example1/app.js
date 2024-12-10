const a = 4;

// variant 1
// if (a >= 5) {
//   console.log("a is greater than 5");
// } else {
//   console.log("a is less than 5");
// }

// variant 2
// if (a > 5) {
//   console.log("a is greater than 5");
// } else if (a === 5) {
//   console.log("a is equal to 5");
// } else {
//   console.log("a is less than 5");
// }

// variant 3
// a > 5 ? console.log("a is greater than 5") : console.log("a is less than 5");

// LOOPS

// for loop
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// console.log("**********");

// While loop
// let i = 6;
// while (i <= 5) {
//   console.log(i);
//   i++;
// }
// console.log("********** of while");

// do while loop
// let j = 6;
// do {
//   console.log(j);
//   j++;
// } while (j <= 5);
// console.log("**********");

// for in loop
// const fruits = ["apple", "banana", "orange"];
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };
// for (let key in person) {
//   console.log(person[key]);
// }

// Functions
// function greet() {
//   console.log("Hello");
// }

// const greet2 = function () {
//   console.log("Hello My Sir");
// };

// const greet3 = () => {
//   console.log("Hello My Si 3r");
// };

// greet();
// greet2();
// greet3();

// function with parameters
// const greet4 = (name) => {
//   console.log(`Hello ${name}`);
// };

// greet4("Web Developer");

// const greet5 = (name, age, gender) => {
//   console.log(`Hello ${name}, your age is ${age}, your gender is ${gender}`);
// };

// greet5("Web Developer", 25, "Male");
// greet5("Shanti", 20, "Female");

// function with return
// const sum = (a, b) => {
//   return a + b;
// };

// const result = sum(5, 6);
// const result2 = sum(10, 20);
// console.log(result, result2);

// calculator
const calculator = (number1, number2, action) => {
  if (action === "add") {
    return number1 + number2;
  } else if (action === "sub") {
    return number1 - number2;
  } else if (action === "mul") {
    return number1 * number2;
  } else if (action === "div") {
    return number1 / number2;
  } else {
    return "Invalid action";
  }
};

const add = calculator(5, 6, "add");
const sub = calculator(10, 5, "sub");
const mul = calculator(5, 6, "mul");
const div = calculator(10, 5, "div");
const invalid = calculator(10, 5, "invalid");

console.log(add, sub, mul, div, invalid);
