// assign request object to variable
const myRequest = new XMLHttpRequest();

// func called when ready state change
myRequest.onreadystatechange = function () {
  /*
		Ready State => The Status of request

				**Stages Of ReadyState**
		[0] Request not initialized yet
		[1] Server connection established
		[2]	Request recieved
		[3]	Processing Request
		[4]	Request is done and Response is ready!
	*/
  if (this.readyState === 4 && this.status === 200) {
    const respondContent = document.createElement("div");
    respondContent.classList = `ajax`;

    //   Convert XML ResponseTest to JS object
    JSON.parse(this.responseText).forEach((repo) => {
      console.log(repo.url);
    });

    document.body.appendChild(respondContent);
  }
};

// XMLHttpRequest.open(Method, URL, Async, User, Password)

// Async: false => page won't do anything until repond 				.... case: when u request data and want component to wait for respond to arrive first

// "get", "auth.php?name=medo"
myRequest.open("POST", "auth.php", true);
myRequest.setRequestHeader(
  "Content-Type",
  "application/x-www-form-urlencoded"
);

myRequest.send("name=Medo&");
