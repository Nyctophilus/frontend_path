// part1
// 10-15

// 10
// 11
// 12
// 13
// 14
// 15

// 20-10

// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19
// 20

let prmp = window.prompt(
  `Print Number From-To`,
  `Example: 5-20`
);

let start, end;
if (
  Number(prmp.split("-")[0]) < Number(prmp.split("-")[1])
) {
  start = Number(prmp.split("-")[0]);
  end = Number(prmp.split("-")[1]);
} else {
  start = Number(prmp.split("-")[1]);
  end = Number(prmp.split("-")[0]);
}
console.log(`Start:${start} End:${end}`);
for (let i = start; i <= end; i++) {
  let div = document.createElement("div");
  div.textContent = `${i}`;
  document.body.appendChild(div);
}
