// 'this' in arrow function bind on the lexical scope that it "CREATED" in!

const name = "ouuut";
const funn = () => console.log(this.name);

const obj = {
  name: "Muhammed",
  disp() {
    console.log(this.name);
  },

  outDisp: funn,
};

obj.outDisp();
obj.disp();
