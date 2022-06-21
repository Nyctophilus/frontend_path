class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }

  run() {
    return `Car is Running Now!`;
  }
  stop() {
    return `Car has been Stopped!`;
  }
}

const c1 = new Car("matsobishi", 2020, "200K");
const c2 = new Car("hoveor", 2015, "500K");
const c3 = new Car("farari", 2024, "1M");

console.log(
  `Car One Name Is ${c1.n} And Model Is ${c1.m} And Price Is ${c1.p}`
);

console.log(c1.run());
