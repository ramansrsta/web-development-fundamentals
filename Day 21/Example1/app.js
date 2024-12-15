// function outerFunction(outerVariable) {
//   const newVariable = 10;
//   return function innerFunction(innerVariable) {
//     console.log(
//       `Outer Variable: ${outerVariable + innerVariable + newVariable}`
//     );
//   };
// }

// const newFunction = outerFunction(10);
// newFunction(5);

// Promise
// const myPromise = new Promise((resolve, reject) => {
//   const success = false;
//   if (success) {
//     resolve("Promise fulfilled!");
//   } else {
//     reject("Promise rejected!");
//   }
// });

// myPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   })
//   .finally(() => {
//     console.log("Promise settled!");
//   });

// Async/Await
// async function myFunction() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

// myFunction();
