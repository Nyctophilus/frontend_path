/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has                                 *** better performance than include ***
*/

let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);

let myUniqueData = new Set(); //***make Object of it and return unique values only***

myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(
  `Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`
);

console.log(myData);
console.log(myUniqueData);

console.log(myUniqueData.size);

console.log(myData[0]);
console.log(myUniqueData[0]);

// myUniqueData.delete(2);
console.log(myUniqueData.delete(2));

console.log(myUniqueData);
console.log(myUniqueData.size);

myUniqueData.clear();

console.log(myUniqueData);
console.log(myUniqueData.size);

/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(
  `Size Of Elements Inside Set Is: ${mySet.size}`
);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach

mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

// Type Of Data

let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);

/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object comparsion
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "Number",
  10: "String",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);

/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

let myMap = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

console.log(myMap);

console.log(myMap.get(10));
console.log(myMap.get("Name"));
console.log(myMap.get(false));

console.log("####");

console.log(myMap.has("Name"));

console.log("####");

console.log(myMap.size);

console.log(myMap.delete("Name"));

console.log(myMap.size);

myMap.clear();

console.log(myMap.size);
