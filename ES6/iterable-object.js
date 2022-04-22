// iterable object
const arr = [1, 2, 3, 5, 4, 77];

// iterator object which moves the for-Of loop
const iter = arr[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

// iterable objects can use:
// 		for..of
// 		destructuring
// 		...spread operator

// FIXME to make objects iterable
// 		-HL Generator functions
//		implement @iterator inside object
const iObj = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          done: "",
          value: "",
        };
      },
    };
  },
};
