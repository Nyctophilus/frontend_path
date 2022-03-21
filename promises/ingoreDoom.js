const myPromise = new Promise((resolve, reject) => {
  let thePosts = ["A", "B", "C", "D", "E", "F", "G", "H"];
  resolve(thePosts);
});

myPromise
  .then((result) => {
    console.log(
      `Total Number Of Posts Is ${result.length} Posts`
    );

    return result;
  })
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((result) => {
    console.log(result);
    return result;
  })
  .then((result) => {
    console.log(result);
    return result;
  });
