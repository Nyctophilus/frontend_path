const font = document.getElementById("fonts");
const color = document.getElementById("clrs");
const size = document.getElementById("fSize");
const opts = document.querySelectorAll("option");
const sels = document.querySelectorAll("select");
const box = document.getElementsByClassName("test-text");

const attr = function () {
  box.style.cssText = localStorage.css;
  opts.forEach((opt) => opt.removeAttribute("selected"));
  sels.forEach((sel) =>
    document
      .querySelector(
        `[value="${localStorage[`${sel.id}`]}"]`
      )
      .setAttribute("selected", "")
  );
};

const changes = function () {
  sels.forEach(
    (sel) => (localStorage[`${sel.id}`] = sel.value)
  );
  localStorage.css = `font-family: "${font.value}"; color: ${color.value}; font-size: ${size.value}`;
  attr();
};

if (localStorage.css) attr();

font.onchange = changes;
color.onchange = changes;
size.onchange = changes;
