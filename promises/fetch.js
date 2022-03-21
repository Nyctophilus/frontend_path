fetch("https://api.github.com/users/nyctophilus/repos")
  .then((result) => {
    const allRepos = result.json();
    console.log(allRepos);

    return allRepos;
  })
  .then((repos) => {
    console.log(
      `total number of repos is: ${repos.length}`
    );
    return repos;
  })
  .then((repos) => {
    console.log(`First repo is ${repos[0].name}`);
    return repos;
  })
  .then((repos) => {
    console.log(
      `last repo is ${repos[repos.length - 1].name}`
    );
    return repos;
  })
  .then((repos) => {
    console.log(`#########################`);
    for (let repo of repos) {
      console.log(`${repo.name}`);
    }
  });
