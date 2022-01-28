let fonts = document.getElementById("fonts");
let clrs = document.getElementById("clrs");
let fSize = document.getElementById("fSize");
let divTest = document.querySelector(".test-text");
let controlPanel = document.querySelector(".control-panel");

let opts = document.querySelectorAll("option");
let sels = document.querySelectorAll("select");

const attr = function () {
  controlPanel.style.cssText = localStorage.css;
  opts.forEach((opt) => opt.removeAttribute("selected"));
  sels.forEach((sels) =>
    document
      .querySelector(
        `[value="${localStorage[`${sels.id}`]}"]`
      )
      .setAttribute("selected", "")
  );
};

const changes = function () {
  sels.forEach(
    (sels) => (localStorage[`${sels.id}`] = sels.value)
  );
  localStorage.css = `font-family: "${fonts.value}"; color: ${clrs.value}; font-size: ${fSize.value}`;
  attr();
};

if (localStorage.css) attr();

fonts.onchange = changes;
clrs.onchange = changes;
fSize.onchange = changes;
