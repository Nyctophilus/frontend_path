let bodyChilds = document.body.children;

console.log([...bodyChilds]);

// [...bodyChilds].forEach((el, i) => {
//   console.log(el, i);
//   el.onclick = () => console.log(`${el.tagName}`);
// });

for (i = bodyChilds.length - 2; i >= 0; i--) {
  console.log([...bodyChilds][i]);
  let el = [...bodyChilds][i];

  el.onclick = () => console.log(`This is ${el.tagName}`);
}
