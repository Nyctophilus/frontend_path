// promises is a placeholder for smth in the future... async
function myAsyncFun() {
  let promise = new Promise((resolve, reject) => {
    const er = true;
    setTimeout(() => {
      console.log("Working asynchronously");

      if (er) reject("Error");
      else resolve("Done");
    }, 2000);
  });
  return promise;
}

myAsyncFun()
  .then(
    (success) => console.log(success) //resolve response
    //   (e) => console.log(e) //reject response
  )
  // cleaner way to catch errors than reject catching
  .catch((e) => console.log(e));
