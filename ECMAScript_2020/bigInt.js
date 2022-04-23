// 2**(-53) was the biggest save number before bigInt was added

/*
	BigInt
*/

let num = BigInt(10);

// literal creation
let num2 = 20n;

console.log(typeof num);
console.log(typeof num2);

// cant evaluate bigInts with numericals
// u must convert one to the other

parseInt(num) + 300;

// Comparsion is Allowed between BigInts and Numericals
