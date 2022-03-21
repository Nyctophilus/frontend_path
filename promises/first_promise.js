const myPromise = new Promise((resolve, reject) => {
  // console.log("Welcome To My First Promise");
  /*
	  Asynchronous Operation
	  Fulfilled => resolve
	  Rejected => reject
	*/

  let connect = true;
  if (connect) {
    resolve("Connection Established");
  } else {
    reject(Error("Connection Failed"));
  }
}).then(
  (resolved) => console.log(resolved),
  (rejected) => console.log(rejected)
);

console.log(typeof myPromise);

// aonther syntax
myPromise.then(
  // first agru get the content of the resolve of the previous promise
  (resolved) => console.log(resolved),
  // second agru get the content of the reject of the previous promise
  (rejected) => console.log(rejected)
);
