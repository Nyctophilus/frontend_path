// First Example

const myPromise = new Promise((resolve, reject) => {
  // Only One State Allowed
  // resolve("Resolved");
  // reject("Rejected"); // Ignored

  if (Math.random() * 100 < 50) {
    resolve("Good");
  } else {
    reject("Bad");
  }
});

myPromise.then(
  (resolved) => console.log(resolved),
  (rejected) => console.log(rejected)
);

// Other Syntax

// myPromise.then(null, (rejected) => console.log(rejected))  ===
// myPromise.catch((rejected) => console.log(rejected));

// Second Example ==> callback hell
firstRequest(function (response) {
  secondRequest(
    response,
    function (nextResponse) {
      thirdRequest(
        nextResponse,
        function (finalResponse) {
          console.log("Final response: " + finalResponse);
        },
        failureCallback
      );
    },
    failureCallback
  );
}, failureCallback);

// then ==> resolve the callback hell
firstRequest()
  .then((response) => secondRequest(response))
  .then((nextResponse) => thirdRequest(nextResponse))
  .then((finalResponse) =>
    console.log("Final response: " + finalResponse)
  )
  .catch(failureCallback);
