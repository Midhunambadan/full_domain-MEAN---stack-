// const sum = function findSum(a, b) {
//     return new Promise((resolve, reject) => {
//       if (typeof a === "number" && typeof b === "number") {
//         resolve(a + b); // If valid, resolve with the sum
//       } else {
//         reject("Invalid input, please provide numbers"); // If invalid, reject with an error
//       }
//     });
//   };
  
  
//   // Case with invalid input
//   sum(10, "hello")
//     .then((res) => {
//       console.log("Sum:", res);
//     })
//     .catch((error) => {
//       console.log("Error:", error);
//     });

//--------------------------------------------------------------------------


// // Function to return a promise
// function findSum(a, b) {
//     return new Promise((resolve, reject) => {
//       if (typeof a === "number" && typeof b === "number") {
//         resolve(a + b); // Resolve if valid
//       } else {
//         reject("Invalid input, please provide numbers"); // Reject if invalid
//       }
//     });
//   }

//   // Async function to use await with the promise
// async function sum(a, b) {
//     try {
//       const result = await findSum(a, b); // Awaiting the promise
//       console.log("Sum:", result);
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   }
  
//   // Valid case
//   sum(10, 20);

//   // Invalid case
// sum(10, "hello");