// Primitive Data Types

// const userName = "John Doe"; // String
// let age = 30; // Number
// let newAage = age;
// console.log(newAage, age);

// newAage = 31;
// console.log(newAage, age);

// const ageArray = [30, 31, 32];
// const newAgeArray = ageArray;
// console.log(newAgeArray, ageArray);

// newAgeArray[0] = 33;
// console.log(newAgeArray, ageArray);

// const isStudent = false; // Boolean
// const x = null; // Null
// const y = undefined; // Undefined
// const symbol = Symbol(); // Symbol

// console.log(typeof userName); // string
// console.log(typeof age); // number
// console.log(typeof isStudent); // boolean
// console.log(typeof x); // object
// console.log(typeof y); // undefined
// console.log(typeof symbol); // symbol

// Non-Primitive Data Types
// const numbers = [1, 2, 3, 4, 5]; // Array
// const person = { name: "John", age: 30 }; // Object
// const today = new Date(); // Date

// console.log(Array.isArray(numbers)); // true
// console.log(typeof person); // object
// console.log(today instanceof Date); // true

// Strings
// const firstName = "Johnny";
// console.log(firstName.length); // 6
// console.log(firstName.toUpperCase()); // JOHNNY
// console.log(firstName.toLowerCase()); // johnny
// console.log(firstName.charAt(1)); // o

// Numbers
// const num1 = 100;

// console.log(num1.toString()); // "100"
// console.log(num1.toFixed(2)); // "100.00"
// console.log(num1 + 200); // 300
// console.log(num1 - 200); // -100
// console.log((100 + 200) * 2); // 600

// Boolean and Comparision

// const x = 10;
// const y = 10;

// console.log(x === y); // false
// console.log(x <= y); // true
// console.log(x >= y); // true
// console.log(x !== y); // false

// Objects
// const person = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     state: "NY",
//   },
// };

// console.log(person.address.city); // John

// person.email = "john@gmail.com";
// person.address.city = "Boston";

// console.log(person);

// delete person.address;
// console.log(person);

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("clickMeButton")
    .addEventListener("click", function () {
      document.getElementById("demo").style.color =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
});
