/* 
	Tools:

	https://myjson.dit.upm.es/
	https://jsoneditoronline.org/#left=local.sosoqi
	https://jsonformatter.curiousconcept.com/#
*/

let myJsonObject = '{ "username" : "Osama", "Age" : 36 }';
let myJsObject = JSON.parse(myJsonObject);

console.log(myJsonObject);
console.log(typeof myJsonObject);
console.log(myJsObject);
console.log(typeof myJsObject);

document.getElementById("name").textContent =
  myJsObject.username;
document.getElementById("age").textContent = myJsObject.age;

myJsObject = { username: "Osama", Age: 36 };
myJsonObject = JSON.stringify(myJsonObject);

console.log(myJsonObject);

/*
$.ajax({
  url: "users.json",
  dataType: "json",
  cache: false,
  success: function(data, status) {
    $.each(data, function(index) {
      $("#show").append("<div>" + data[index].username + "</div>");
    });
  },
  error: function(xhr, textStatus, err) {
    console.log(xhr);
    console.log(textStatus);
    console.log(err);
});
*/
