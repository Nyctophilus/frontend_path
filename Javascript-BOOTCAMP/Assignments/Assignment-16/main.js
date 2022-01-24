let sc = document.getElementById("elzero");
sc = document.getElementsByClassName("element")[0];
sc = document.getElementsByName("js");
sc = document.getElementsByTagName("div");

sc = document.querySelector(".element");
sc = document.querySelector("#elzero");
sc = document.querySelector("[name='js']");
sc = document.querySelector("div");

sc = document.querySelectorAll(".element")[0];
sc = document.querySelectorAll("#elzero")[0];
sc = document.querySelectorAll("[name='js']")[0];
sc = document.querySelectorAll("div")[0];

sc = document.querySelector("div").children[0];
sc = document.querySelector("div").childNodes[0];
sc = document.querySelector("div").firstElementChild;

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// ..

// part2
// let img = document.querySelector("img");

// img.setAttribute(
//   "src",
//   "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
// );
// img.setAttribute("alt", "Elzero Logo");

console.log(document.images.length);

let imgNum = document.images.length;

for (i = 0; i < 10; i++) {
  document.images[i].src =
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
  document.images[i].alt = "Elzero Logo";
}

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// ..

// part3

let inp = document.querySelector(
  "form input[name='dollar']"
);

let result = document.querySelector(".result");

inp.onfocus = function () {
  const pound = inp.value * 15.6;

  result.textContent = `${inp.value} USD Dollar = ${pound} Egyptian Pound`;
};

// inp.addEventListener("input", () => {
//   const pound = inp.value * 15.6;

//   result.textContent = `${
//     inp.value ?? 0
//   } USD Dollar = ${pound.toFixed(2)} Egyptian Pound`;
// });

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// ..

// part4
let tt1 = document.querySelector(".one");
let tt2 = document.querySelector(".two");
console.log(tt1);

tt1.setAttribute("title", "one");
tt2.setAttribute("title", "two");

const text1 = tt1.textContent;
const text2 = tt2.textContent;
tt1.textContent = text2;
tt2.textContent = `${text1} ${
  document.querySelectorAll("[title]").length
}`;

// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// .
// ..

// part5

let img5 = document.querySelectorAll(".part5");

console.log(img5[1].hasAttribute("alt"));

for (let i = 0; i < img5.length; i++) {
  if (img5[i].hasAttribute("alt")) img5[i].alt = "Old";
  else img5[i].setAttribute("alt", "Elzero New");
}
