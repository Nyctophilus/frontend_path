let font = document.getElementById("fonts");
let size = document.getElementById("fSize");
let clr = document.getElementById("clrs");

let opts = document.querySelectorAll("option");

let test = document.querySelector(".test-text");

if (localStorage.length == 0) {
  populateStorage();
} else {
  setStyles();
  attr();
}

function populateStorage() {
  if (this === size)
    localStorage.setItem("font-size", size.value);
  if (this === font)
    localStorage.setItem("font-family", font.value);
  if (this === clr)
    localStorage.setItem("color", clr.value);

  setStyles();
}

function setStyles() {
  var currentClr = localStorage.getItem("color");
  var currentFont = localStorage.getItem("font-family");
  var currentSize = localStorage.getItem("font-size");

  test.style.cssText = `color: ${currentClr}; font-family: ${currentFont}; font-size: ${currentSize}; `;
}

function attr() {
  // remove selected attr
  opts.forEach((el) => {
    el.removeAttribute("selected");
  });

  // set selected on font family
  document
    .querySelector(
      `[value="${localStorage.getItem("font-family")}"]`
    )
    .setAttribute("selected", "");

  // set selected on font size
  document
    .querySelector(
      `[value="${localStorage.getItem("font-size")}"]`
    )
    .setAttribute("selected", "");

  // set selected on color
  document
    .querySelector(
      `[value="${localStorage.getItem("color")}"]`
    )
    .setAttribute("selected", "");
}

size.addEventListener("change", populateStorage);
font.addEventListener("change", populateStorage);
clr.addEventListener("change", populateStorage);
