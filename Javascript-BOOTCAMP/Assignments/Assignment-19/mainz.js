let fonts = document.querySelector("#fonts");
let clrs = document.querySelector("#clrs");
let fSize = document.querySelector("#fSize");
let divTest = document.querySelector(".test-text");
let controlPanel = document.querySelector(".control-panel");

var selectedFont = fonts.querySelector(`[selected]`);
var selectedclr = clrs.querySelector(`[selected]`);
var selectedsize = fSize.querySelector(`[selected]`);

console.log(selectedFont);

// console.log(fSize.querySelector(`[value='16px']`));
// store font family into localStorage
fonts.onchange = () => {
  selectedFont = fonts.value;
  // assign the value to the storage
  window.localStorage.setItem("font-family", fonts.value);

  // clear all selections
  [...fonts].forEach((el) => {
    el.removeAttribute("selected");
  });

  // set the selected attr
  selectedFont = fonts.querySelector(
    `[value='${fonts.value}']`
  );
  selectedFont.setAttribute("selected", "");
};

// store color into localStorage
clrs.onchange = function clrChange() {
  // assign the value to the storage
  window.localStorage.setItem("color", clrs.value);

  // clear all selections
  [...clrs].forEach((el) => {
    el.removeAttribute("selected");
  });

  // set the selected attr
  clrs
    .querySelector(`[value='${clrs.value}']`)
    .setAttribute("selected", "");
};

// store font-size into localStorage
fSize.onchange = (e) => {
  // assign the value to the storage
  window.localStorage.setItem("font-size", fSize.value);

  // clear all selections
  [...clrs].forEach((el) => {
    el.removeAttribute("selected");
  });

  // set the selected attr
  fSize
    .querySelector(`[value='${fSize.value}']`)
    .setAttribute("selected", "");
};

// apply changes
window.onload = changeDisplay;
controlPanel.addEventListener("change", changeDisplay);

function changeDisplay() {
  console.log(selectedFont);
  divTest.style.cssText = `font-family: ${window.localStorage.getItem(
    "font-family"
  )}; color: ${window.localStorage.getItem(
    "color"
  )}; font-size: ${window.localStorage.getItem(
    "font-size"
  )}`;
  selectedFont.setAttribute("selected", "");
}
