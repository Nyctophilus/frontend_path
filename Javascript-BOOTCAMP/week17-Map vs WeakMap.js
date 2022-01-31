/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only         ***it doesnt have a hold on the elements so WEAKMAP cant determine the size or loop on them 
                                            ***coz some elements if they dont have referances ,they will be removed from the memory
  
    use case for weakmap/set: 2wl ma yb2a malesh access le object, el memory tshelo
  --
*/

let mapUser = { theName: "Elzero" };

let myMap = new Map();

myMap.set(mapUser, "Object Value");

mapUser = null; // Override The Reference
// coz it's a Map even after make the reference "null" , the Object stills in the memory coz it's mentioned in the MAP
console.log(myMap);

console.log("#".repeat(20));

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap);
