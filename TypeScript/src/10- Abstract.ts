/*
  Class
  - Abstract Classes And Members مجرد
  --- We Cannot Create An Instance Of An Abstract Class
*/

abstract class Food {
  constructor(public title: string) {}

  abstract getCookingTime(): void;
}

class Pizza extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }

  getCookingTime(): void {
    console.log(
      `Cooking time for ${this.title} is 2hours, price is ${this.price}`
    );
  }
}

class Burger extends Food {
  constructor(title: string, public price: number) {
    super(title);
  }

  getCookingTime(): void {
    console.log(
      `Cooking time for ${this.title} is 1hours, price is ${this.price}`
    );
  }
}

const pizzaOrder1 = new Pizza("margrita", 150);
pizzaOrder1.getCookingTime();

const BurgerOrder1 = new Burger("Cheezy Smashed", 90);
BurgerOrder1.getCookingTime();
