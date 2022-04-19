const product1 = {
  name: "iphone",
};

/*
	-HL			NON Extensible

	FIXME  adding props would fail silently
*/
console.log(Object.isExtensible(product1)); // by default all objects all extensable

Object.preventExtensions(product1);
// at this point u cant add new props/methods to that obj
console.log(Object.isExtensible(product1));

/*
	-HL			Seal It

	seal ==> all props are non configable now!
*/

const product2 = {
  name: "iphone",
};
console.log(Object.isSealed(product2)); // false by default

Object.seal(product2); // making it non extensible and sealed!
//

// can't delete product2.name now!

/*
	-HL			Freeze It

	freeze ==> writable,configrable: false === '''Read-only''' props
*/

const product3 = {
  name: "iphone",
};
console.log(Object.isFrozen(product3)); // false by default

Object.freeze(product3);

product3.name = "mac"; // would fail silently, wouldn't change

/*
	assignment
*/

Object.defineProperties((License = {}), {
  name: {
    value: "hooow",
    configurable: true,
    writable: true,
  },
  number: {
    value: 22,
    enumerable: true,
    configurable: true,
  },
});

const descName = Object.getOwnPropertyDescriptor(
  License,
  "name"
);

const descNum = Object.getOwnPropertyDescriptor(
  License,
  "number"
);

// sealing license object
Object.seal(License);

Object.isSealed(License);
console.log(delete License.name); // false which means failed to configure the prop! Sealed successfully!!
