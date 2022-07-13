const myObj = {
  username: "Elzero",
  id: 100,
  score: 1000,
  country: "Egypt",
};

// Write Your Code Here
Object.defineProperties(myObj, {
  score: {
    writable: false,
  },
  id: {
    configurable: true,
    value: 10,
    writable: true,
    enumerable: false,
  },
  country: {
    enumerable: false,
  },
});

myObj.score = 500;

for (let prop in myObj) {
  console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output

//   "username => Elzero"
//   "score => 1000"
//   {username: 'Elzero', score: 1000, id: 100}
