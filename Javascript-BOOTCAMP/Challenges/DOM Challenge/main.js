let elementNumber = document.querySelector(
  "[type='number']"
);
let elementName = document.querySelector("[type='text']");

let select = document.querySelector("select");

let submit = document.querySelector("[type='submit']");
let results = document.querySelector(".results");

var createdElements;

console.log(elementNumber.value);
console.log(elementName.value);

// trigger change select value
var selectVal = "Div";
select.addEventListener("change", function () {
  console.log("You selected: ", this.value);
  selectVal = this.value;
  console.log(typeof selectVal);
});

submit.onclick = function () {
  let num = elementNumber.value;
  let name = elementName.value;

  //   remove all before recreate nodes
  results.innerHTML = "";

  for (let i = 0; i < num; i++) {
    createdElements = document.createElement("div");
    results.appendChild(createdElements).className =
      "born-div";
    if (selectVal === "Div") {
      results.className = "results div";
    } else {
      results.className = "results sect";
    }

    createdElements.textContent = `${elementName.value}`;
  }

  event.preventDefault();
};
