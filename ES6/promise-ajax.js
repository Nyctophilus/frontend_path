// promise ajax call
function ajax(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  })
    .then((obj) => {
      const jsObj = JSON.parse(obj);
      console.log(jsObj);
    })
    .catch((e) => console.log(e));
}
