const header = document.createElement("header");
const h1 = document.createElement("h1");
const ul = document.createElement("ul");

const li0 = document.createElement("li");
const li1 = document.createElement("li");
const li2 = document.createElement("li");
const li3 = document.createElement("li");
const li = document.getElementsByTagName("li");

let create = (el) => document.createElement(`${el}`);
let get = (el) => document.getElementsByTagName(`${el}`);

document.body.appendChild(header);
document.body.style = "margin:0;padding:0";

// header
header.append(h1, ul);
header.style =
  "padding:0 15px;display:flex;justify-content:space-between;align-items: center;height:7vh";

ul.append(li0, li1, li2, li3);

//logo
h1.textContent = "Muhammed Fayad";
h1.style = "color:#e91e63;margin:0;font-size:30px";

// links
li0.textContent = "Home";
li1.textContent = "About";
li2.textContent = "Service";
li3.textContent = "Contact";

ul.style =
  "color:#9e9e9e;display:flex;margin:0;list-style: none";

[...li].forEach((element) => {
  element.style = "margin-right: 10px";
});

// MAIN Section
const main = create(`main`);
document.body.appendChild(main);
main.style =
  "display:grid;height:80vh;background-color:#ddd;grid-template-columns: repeat( 3, 1fr );grid-gap: 20px; padding: 20px;";

for (i = 1; i < 16; i++) {
  var divs = create(`div`);
  main.append(divs);
  divs.textContent = `Product`;
  let num = create(`h2`);
  num.textContent = `${i}`;
  divs.prepend(num);
}

[...get(`div`)].forEach(
  (el) =>
    (el.style =
      "color:#9e9e9e;background-color:white;display:flex;align-items:center;justify-content:center;flex-direction: column;")
);

console.log(document.querySelectorAll(`h2`));
let h2 = document.querySelectorAll(`h2`);
[...h2].forEach(
  (el) =>
    (el.style = "color:black;font-size:30px;margin:0 0 5px")
);

// footer
const footer = create(`footer`);
document.body.append(footer);
footer.style =
  "height:10vh;background-color:#e91e63;color:white;font-weight:bold;display:flex;justify-content:center;align-items:center;    font-size: 20px;";
footer.innerHTML = "Copyright 2021";
