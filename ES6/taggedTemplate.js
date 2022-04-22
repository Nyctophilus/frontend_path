function fun(string, ...values) {
  let str = `${string} ${values}`;

  return str;
}

const x = 10,
  y = 20;

const result = fun`This is ${x} and ${y} ... the sum is ${
  x + y
}`;
console.log(result);
