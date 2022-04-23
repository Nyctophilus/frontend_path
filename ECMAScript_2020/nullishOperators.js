// It's binary operation

left ?? right;
// only-if left is null or undefined, then right is returned
// any other value will be considered!

const a = null,
  y = "",
  z = 0,
  w = false,
  n = 50;
let m;

const result = z ?? 5; // 0
const result2 = a ?? 5; // 5
