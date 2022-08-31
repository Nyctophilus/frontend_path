/*
  Class
  - Polymorphism & Method Override تعدد الاوجه

  - Polymorphism
  --- Classes Have The Same Methods But Different Implementations

  - Method Override
  --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
  --- A Method In Child Class Must Have Same Name As Parent Class

  -HL noImplicitOverride
*/

class Character {
  constructor(public name: string) {}

  attack(): void {
    console.log(`${this.name} is Attacking now!`);
  }
}

class Amazon extends Character {
  constructor(name: string, public spears: number) {
    super(name);
  }

  override attack(): void {
    super.attack();
    this.spears--;
    console.log(`${this.spears} Spears left`);
  }
}
class Barbarian extends Character {
  constructor(name: string, public axeDurability: number) {
    super(name);
  }

  override attack(): void {
    super.attack();
    this.axeDurability--;
    console.log(
      `Your Axe Durability is ${this.axeDurability}`
    );
  }
}

const medo = new Barbarian("Medo", 100);
medo.attack();

const lana = new Amazon("Lana", 10);
lana.attack();
