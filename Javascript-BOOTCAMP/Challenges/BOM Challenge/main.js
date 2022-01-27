let inp = document.querySelector(".input");
let addBtn = document.querySelector(".add");
let displayDiv = document.querySelector(".tasks");

// take the input value and store it in var(task)
let task = {};
inp.addEventListener("input", (e) => {
  task = {
    id: idCounter,
    title: e.target.value,
  };
});

// create Object to store it

// store the var(task) value in localstorage!
addBtn.addEventListener("click", taskStore);

let tasks = [];
let idCounter = 0;
function taskStore(e) {
  // if no value in the input field, do nothing
  if (inp.value) {
    //pushing tasks into the array of objects
    tasks.push(task);
    console.log(`${task.id}: ${task.title}`);
    window.localStorage.setItem("tasks", `${tasks}`);

    //   id counter Inc.
    idCounter++;

    // adding the tasks to display div
    var disp = document.createElement("div");
    disp.textContent = `${task.title}`;
    displayDiv.appendChild(disp);
    disp.id = idCounter;

    let delBtn = document.createElement("button");

    // creating span&liquid inside the btn
    let span = document.createElement("span");
    span.innerHTML = `Delete`;
    let liq = document.createElement("div");
    liq.className = "liquid";
    delBtn.append(span, liq);

    //   console.log(delBtn);
    disp.appendChild(delBtn);

    // input clear
    inp.value = "";
  }
  //   console.log(`Empty!!!`);
}

displayDiv.addEventListener(
  "click",
  (e) => {
    let afterBtn = document.querySelectorAll(
      ".tasks div button"
    );

    afterBtn.forEach((element) => {
      // console.log(e.target);
      element.onclick = () => {
        // console.log(e.target.parentElement);
        console.log(tasks[e.target.parentElement.id - 1]);
        e.target.parentElement.remove();
        // tasks[e.target.parentElement.id - 1].remove();

        // clear the record for the local storage
        // window.localStorage.removeItem(`tasks`);
      };
    });
  },
  true
);
