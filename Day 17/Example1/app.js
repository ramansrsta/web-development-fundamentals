// const userName = "John Doe";

// console.log("Hello " + userName + "!");
// console.log(`Hello ${userName} !`);

// const arrowFnExample = () => {
//   console.log("Arrow function example");
// };
// arrowFnExample();

// descructuring
// const arrayOfFriends = ["Alice", "Bob", "Charlie"];
// const [first, secondFriend] = arrayOfFriends;
// {
//   console.log(first, secondFriend);
// }

// spread operators
// const arrayOfFriends = ["Arkai Alice", "Arkai Bob", "Arkai Charlie"];
// const [first, ...restOfTheFriends] = arrayOfFriends;

// {
//   console.log(first, "giving names");
// }

// // rest operator
// const sum = (...nums) => {
//   return nums.reduce((total, n) => total + n, 0);
// };
// console.log(sum(1, 2, 45, 46, 7, 8, 9, 10));

// Promise
// const fetchData = () =>
//   new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/posts/2")
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });

// fetchData()
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("done"));

// async await
// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/2"
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchData();

// get geolocation
// const getLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition((position) => {
//       console.log(position);
//     });
//   }
// };

// getLocation();
