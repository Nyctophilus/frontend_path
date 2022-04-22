const genrator = function* () {
  // which shines here u could define statements between yields
  yield 1;
  console.log(`first step done!!`);

  yield 15 - 22 * 30;
  yield "muhammed";

  const x = 100,
    y = "yyy";

  // if the yield value is iterable object, u can put * before it. So it will ITERATE ON IT with each .next()
  yield* [false, x];
  yield { skills: "ur awesome!", arr: y };
};

const invokeGen = genrator();

// console.log(invokeGen.next());
// console.log(invokeGen.next());

//  * iteration on the array
// console.log(invokeGen.next());
// console.log(invokeGen.next());

// console.log(invokeGen.next().value); //skills: "ur awesome!"

// -HL could extract values with for..of
for (const g of invokeGen) {
  console.log(g);
}

// ex2
const getNumbers = function* (numbers) {
  for (let i = 0; i < numbers.length; i++) {
    yield numbers[i];
  }
};

const getNumbersGen = getNumbers([1, 2, 3, 4, 5]);

const interval = setInterval(() => {
  const next = getNumbersGen.next();
  if (next.done) {
    console.log("this generator is done");
    clearInterval(interval);
  } else {
    const number = next.value;
    console.log(number);
  }
}, 1000);

// real usage of generators ...=> with promises
// import { coroutine as co } from "bluebird";

const getRandomUsers = co(function* (n) {
  const fetchRandomUsers = yield fetch(
    `https://randomuser.me/api/?results=${n}`
  );
  const data = yield fetchRandomUsers.json();
  return data;
});

getRandomUsers(10)
  .then((randomUsers) => {
    randomUsers.results.forEach((user) => {
      const { gender, email } = user;
      console.log(`${gender} - ${email}`);
    });
  })
  .catch(err > console.log(err));
