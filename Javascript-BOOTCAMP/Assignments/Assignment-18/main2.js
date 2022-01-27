let div = document.createElement("div");
let c = (div.textContent = `7`);

document.body.appendChild(div);

// setInterval(() => {
//   if (c > 0) {
//     c -= 1;
//     console.log(c);
//     div.textContent = `${c}`;
//   }
// }, 1000);

// part4
// setInterval(() => {
//   if (c > 0) {
//     c -= 1;
//     console.log(c);
//     div.textContent = `${c}`;
//   } else location.href = `https://elzero.org`;
// }, 1000);

// part5
setInterval(() => {
  if (c > 0) {
    c -= 1;
    console.log(c);
    div.textContent = `${c}`;
  }
  if (c === 5) {
    console.log(`5 here`);
    window.open(
      `https://elzero.org`,
      "",
      "height=300,width=300,left=500,top=300"
    );
  }
}, 1000);
