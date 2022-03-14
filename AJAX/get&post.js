document.querySelector("button:last-of-type").onclick =
  getRepos;

function getRepos() {
  const myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      console.log(this.responseText);
    }
  };

  myRequest.open(
    "GET",
    "auth.php?name=fayy&lastlogin=today",
    true
  );

  myRequest.send();
}
