// asynchronous JavaScript

// When we pass a callback function as an argument to another function,
//                           ***we are only passing the function's reference ***
// as an argument, i.e, the callback function is not executed immediately.

// Promises
// Promises are the new style of async code that you'll see used in modern Web APIs. A good example is the fetch() API, which is basically like a modern, more efficient version of XMLHttpRequest. Let's look at a quick example, from our Fetching data from the server article:
// Here we see fetch() taking a single parameter — the URL of a resource you want to fetch from the network — and returning a promise. The promise is an object representing the completion or failure of the async operation. It represents an intermediate state, as it were. In essence, it's the browser's way of saying
//                              ****"I promise to get back to you with the answer as soon as I can"****
//  then() blocks. Both contain a callback function that will run if the previous operation is successful,
// The catch() block at the end runs if any of the .then() blocks fail
