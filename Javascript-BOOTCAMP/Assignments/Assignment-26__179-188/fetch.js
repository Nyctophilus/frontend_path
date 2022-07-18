const fetchData = async () => {
  try {
    const res = await fetch("articles.json");
    const data = await res.json();

    console.log(data);
    createArticles(data);
  } catch (error) {
    console.log(Error(error));
  }
};

fetchData();

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
