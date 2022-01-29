let inpName = document.querySelector('[name="name"]');
let inpPw = document.querySelector('[name="password"]');
let sel = document.querySelector("select");
let opts = document.getElementsByTagName("option");

let sub = document.querySelector('[type="submit"]');

function storeName() {
  sessionStorage.setItem("name", inpName.value);
}

function storePw() {
  sessionStorage.setItem("password", inpPw.value);
}

function storeSel() {
  sessionStorage.setItem("select", sel.value);
}

function store() {
  inpName.onchange = () => storeName();
  inpPw.onchange = () => storePw();
  sel.onchange = () => storeSel();
}
store();

window.onload = () => {
  // setting defualt values onload
  if (sessionStorage.length > 0) {
    inpName.value = sessionStorage.getItem("name");
    sel.value = sessionStorage.getItem("select");
    inpPw.value = sessionStorage.getItem("password");
  }
};
