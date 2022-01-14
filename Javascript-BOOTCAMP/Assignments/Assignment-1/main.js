// Part one
/* 
    Code One Wouldn't work becouse the script called before the element has been created


    Code two will work coz of onload method will call the func on load and will force the func to wait until the dom is loaded first to call the func

    code three will work coz of the script will be called after the element already had been created!
*/

// Part two

document.write("<h1>Muhammed</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";

// Part three
console.log(
  "%cElzero %cWeb %cSchool",
  "color:red; font-size:40px",
  "color:green; font-size:40px;font-weight:bold",
  "color:white; font-size:40px;background-color:blue"
);

// Part Four

console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.group("Child Group");
console.log("Message One");
console.log("Message Two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.log("Message One");
console.log("Message Two");

// Part Five
console.table([
  "Muhammed",
  "Sahar",
  "Yousry",
  "Karim",
  "Ahmed",
]);

// Part six

//window.alert("stop"); //first stop.method
// window.close(); //second stop.method
// third method would be by commenting the lines
//          //      |       /* */
console.log("Iam In Console");
document.write("Iam In Page");
