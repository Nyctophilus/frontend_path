// const myFirstPromise = new Promise((resolve, reject) => {
//   let connect = false;
//   if (connect) resolve(`resolved 1`);
//   else reject(`rejected 1`);
// });
// const mySecondPromise = new Promise((resolve, reject) => {
//   let settings = true;
//   if (settings) resolve(`resolved 2`);
//   else reject(`rejected 2`);
// });

// Promise.all([myFirstPromise, mySecondPromise]).then(
//   (result) => {
//     console.log(result);
//   }
// );

// -HL Race
const myFirstPromiseR = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve("First Promise Resolved");
  }, 3500);
});
const mySecondPromiseR = new Promise((resolve, reject) => {
  window.setTimeout(() => {
    resolve("Second Promise Resolved");
  }, 2000);
});

// will invoke the quickest to reach ONLY!
Promise.race([myFirstPromiseR, mySecondPromiseR]).then(
  (result) => {
    console.log(result);
  }
);
