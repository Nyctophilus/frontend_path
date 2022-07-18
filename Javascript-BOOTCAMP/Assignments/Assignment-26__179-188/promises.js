const promiseMe = new Promise((res, rej) => {
  const req = new XMLHttpRequest();
  req.onload = () => {
    if (req.readyState === 4 && req.status === 200)
      res(JSON.parse(req.responseText));
    else rej(Error("no data found!"));
  };

  req.open("GET", "articles.json");
  req.send();
});

promiseMe
  .then((res) => createArticles(res))
  .catch((rej) => console.log(rej));

const createArticles = (arr) => {
  arr.map((a) => {
    const div = document.createElement("div"),
      h3 = document.createElement("h3"),
      p = document.createElement("p");

    h3.textContent = a.title;
    p.textContent = a.description;

    div.append(h3, p);

    document.body.appendChild(div);
  });
};
