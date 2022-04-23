// promises is a placeholder for smth in the future... async
function myAsyncFun() {
  let promise = new Promise((resolve, reject) => {
    const er = true;
    setTimeout(() => {
      console.log("Working asynchronously");

      if (er) reject("Error");
      else resolve("Done");
    }, 2000);
  });
  return promise;
}

myAsyncFun()
  .then(
    (success) => console.log(success) //resolve response
    //   (e) => console.log(e) //reject response
  )
  // cleaner way to catch errors than reject catching
  .catch((e) => console.log(e))
  .finally();

// .finally( ) would be must-excuted after all the chainable promises done excuting

/*
	Promise Methods
*/

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    () => {
      resolve(`promise1 successed`);
    };
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    () => {
      reject(`promise2 failed`);
    };
  }, 2000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    () => {
      resolve(`promise3 successed`);
    };
  }, 1000);
});

p1.then((res) => console.log(res)).catch((e) =>
  console.log(e)
);
p2.then((res) => console.log(res)).catch((e) =>
  console.log(e)
);
p3.then((res) => console.log(res)).catch((e) =>
  console.log(e)
);

console.log(
  Promise.race([p1, p2, p3])
    .then((res) => console.log(res))
    .catch((e) => console.log(e))
);
