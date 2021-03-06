// js hoisting moving the declarations on top

// https://www.javascripttutorial.net/javascript-execution-context/

// https://www.javascripttutorial.net/javascript-call-stack/

// Closure is it has access to the outer lexical scope even after it has returned!

// A Lexical Environment has two components: (1) the environment record and (2) a reference to the outer environment.
// The environment record is the actual place where the variable and function declarations are stored.
// The reference to the outer environment means it has access to its outer (parent) lexical environment. This component is the most important in order to understand how closures work.

// When the person function finishes, its execution context is removed from the stack. But its lexical environment is still in the memory because its lexical environment is referenced by the lexical environment of its inner displayName function. So its variables are still available in the memory.
// https://blog.bitsrc.io/a-beginners-guide-to-closures-in-javascript-97d372284dda
// A ***closure*** is a function bundled with its lexical scope. Closures are created at runtime during function creation.

// curried function
// https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983
// compose two functions together
// creates a pipeline of functions with the output of one function connected to the input of the next.

// Partial applications can take as many or as few arguments a time as desired. Curried functions on the other hand always return a unary function: a function which takes one argument.

// -HL func expressions to avoid popluating the global scope with functions

// Function declaration:
function doStuff() {} // get hoisted and avaliable in all global scope

// Function expression:
const doStuff = function () {}; // avaliable to call below init and avaliable inside callerObject scope only
