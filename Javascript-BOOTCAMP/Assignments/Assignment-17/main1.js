let addInp = document.querySelector(".classes-to-add");
let rmvInp = document.querySelector(".classes-to-remove");
let current = document.querySelector("[title='Current']");
let inps = document.querySelectorAll("input");
let display = document.querySelector(".classes-list");

// Adding the classes
addInp.onblur = (t) => {
  console.log(`input Leave`);
  console.log(typeof t.target.value);

  let tx = t.target.value.toLowerCase();

  //   Securing the field isnt empty
  if (tx !== "") {
    //   check for space char
    if (tx.indexOf(" ")) {
      let newTx = "";

      // loop to add each space-split the word in the output
      for (let i = 0; i < tx.split(" ").length; i++) {
        newTx = tx.split(" ")[i];
        current.classList.add(`${newTx}`);
      }
    } else {
      current.classList.add(tx);
    }
  }

  //   clearing the input
  addInp.value = "";
};

// Removing the classes
rmvInp.onblur = (t) => {
  let tx = t.target.value.toLowerCase();

  //   Securing the field isnt empty
  if (tx !== "") {
    // Starting the regular removing
    if (tx.indexOf(" ")) {
      let newTx = "";
      for (let i = 0; i < tx.split(" ").length; i++) {
        newTx = tx.split(" ")[i];
        current.classList.remove(`${newTx}`);
      }
    } else {
      current.classList.remove(tx);
    }
  }

  //   clearing the input
  rmvInp.value = "";
};

// Display Function
console.log(inps);
console.log(display.lastElementChild);
inps.forEach((element) => {
  element.addEventListener("blur", () => {
    // console.log([...current.classList].sort());
    let classes = [...current.classList].sort();

    display.lastElementChild.innerHTML = "";
    // console.log(current.classList.length);
    for (i = 0; i < classes.length; i++) {
      //   console.log(classes[i]);
      var newClass = document.createElement("span");
      newClass.textContent = `${classes[i]}`;

      //   console.log(newClass);
      display.lastElementChild.appendChild(newClass);
    }
    if (classes.length === 0) {
      let p = document.createElement("p");
      p.textContent = "No Classes To Show!";
      display.lastElementChild.appendChild(p);
    }
  });
});
