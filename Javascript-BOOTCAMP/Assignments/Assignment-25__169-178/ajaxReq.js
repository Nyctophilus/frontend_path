const req = new XMLHttpRequest();

req.open("GET", "articles.json");
req.send();

// console.log(req);

req.onloadend = () => {
  console.log(`Data Loaded`);
};

req.onreadystatechange = () => {
  const { readyState, status, responseText } = req;

  if (readyState === 4 && status === 200) {
    const articles = JSON.parse(responseText);

    part3(articles);
    part4(articles);
  }
};

const part3 = (articles) => {
  articles.map((article) => {
    article.section = "All";
  });

  console.log(articles);

  const jsonArticles = JSON.stringify(articles);
  console.log(jsonArticles);
};
const part4 = (articles) => {
  const container = document.createElement("div");
  container.id = "data";

  articles.map((article) => {
    const box = document.createElement("div"),
      h2 = document.createElement("h2"),
      h3 = document.createElement("h3"),
      p = document.createElement("p");

    box.style.marginBottom = "5rem";
    p.style.cssText = "max-width: 65%; margin-inline: auto";

    h2.textContent = article.title;
    h3.textContent = article.section;
    p.textContent = article.content;

    box.append(h2, h3, p);
    container.appendChild(box);
  });

  document.body.style.cssText = `text-align: center;`;
  document.body.appendChild(container);
};
