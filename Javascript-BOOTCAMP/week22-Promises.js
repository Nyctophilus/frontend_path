/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

const myPromise = new Promise(
  (resolveFunction, rejectFunction) => {
    let connect = true;
    if (connect) {
      resolveFunction("Connection Established");
    } else {
      rejectFunction(Error("Connection Failed"));
    }
  }
);

console.log(myPromise);

let resolver = (resolveValue) =>
  console.log(`Good ${resolveValue}`);
let rejecter = (rejectValue) =>
  console.log(`Bad ${rejectValue}`);

myPromise.then(resolver, rejecter);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue}`),
  (rejectValue) => console.log(`Bad ${rejectValue}`)
);

/*
  Promise And XHR
*/

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };

    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("https://api.github.com/users/nyctophilus/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[0].name))
  .catch((rej) => console.log(rej));

/*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

fetch("https://api.github.com/users/nyctophilus/repos")
  .then((result) => {
    console.log(result);
    let myData = result.json();
    console.log(myData);
    return myData;
  })
  .then((full) => {
    full.length = 10;
    return full;
  })
  .then((ten) => {
    console.log(ten[0].name);
  });

/*
  Promise
  - All
  - All Settled
  - Race
*/

const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The First Promise");
  }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam The Second Promise");
  }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The Third Promise");
  }, 2000);
});

// return when all resolved
// reject when face the first fail
Promise.all([
  myFirstPromise,
  mySecondPromise,
  myThirdPromise,
]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) =>
    console.log(`Rejected: ${rejectedValue}`)
);

// return all in OBJECT listing which resolved,rejected
Promise.allSettled([
  myFirstPromise,
  mySecondPromise,
  myThirdPromise,
]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) =>
    console.log(`Rejected: ${rejectedValue}`)
);

// return the first promise whatever resolved/rejected
Promise.race([
  myFirstPromise,
  mySecondPromise,
  myThirdPromise,
]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) =>
    console.log(`Rejected: ${rejectedValue}`)
);

/*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

async function getData() {
  let users = [];
  if (users.length > 0) {
    return "Users Found";
  } else {
    throw new Error("No Users Found");
  }
}

console.log(getData());

getData().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) =>
    console.log("Rejected " + rejectedValue)
);

/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Iam The Good Promise");
    reject(Error("Iam The Bad Promise"));
  }, 3000);
});
async function readData() {
  console.log("Before Promise");
  try {
    console.log(await myPromise);
  } catch (reason) {
    console.log(`Reason: ${reason}`);
  } finally {
    console.log("After Promise");
  }
}

readData();

// "https://api.github.com/users/nyctophilus/repos"

async function fetchData() {
  console.log("Before Fetch");
  try {
    let myData = await fetch(
      "https://api.github.com/users/nyctophilus/repos"
    );
    console.log(await myData.json());
  } catch (reason) {
    console.log(`Reason: ${reason}`);
  } finally {
    console.log("After Fetch");
  }
}

fetchData();
