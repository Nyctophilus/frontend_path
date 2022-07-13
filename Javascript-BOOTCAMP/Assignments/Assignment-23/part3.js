// Edit The Class
class User {
  #c;
  constructor(username, card) {
    this.u = username;
    this.#c = card;
  }

  #CCP = () => {
    const typeOfCard = typeof this.#c;
    const cardNum = this.#c.toString();

    let arrCard = cardNum.split("");
    let counter = 0;
    arrCard.forEach((n, i) => {
      if (i && i % 4 === 0) {
        if (n === "-") return;

        arrCard.splice(i + counter++, 0, "-");
      }
    });

    return arrCard.join("");
  };

  get showData() {
    return `Hello ${
      this.u
    }, Your Credit Card Number Is ${this.#CCP()}`;
  }
}

// Do Not Edit Anything Below

let userOne = new User("Osama", "1234-5678-1234-5678");
let userTwo = new User("Ahmed", "1234567812345678");
let userThree = new User("Ghareeb", 1234567812345678);

console.log(userOne.showData);
// Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

console.log(userTwo.showData);
// Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

console.log(userThree.showData);
// Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

console.log(userOne.c); // Prevent Accessing To Card Property Here
// Undefined
