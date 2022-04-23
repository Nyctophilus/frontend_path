export function add(n1, n2) {
  return n1 + n2;
}

const pi = Math.PI;

export function circleArea(r) {
  return pi * r * r;
}

export const sqrtVal = (val) => {
  return Math.sqrt(val);
};

// FIXME!! Private Member
// trick to secure a class member
const password = Symbol();

export default class Lone {
  constructor(name = "Muhammed", age = 25, title) {
    this.name = name;
    this.age = age;
    this.title = title;
    this[password] = "2143axac_d@"; //which u can't access in the import module there
  }
}
