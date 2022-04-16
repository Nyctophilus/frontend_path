const EmpAge = function (year) {
  // private member
  this.year = year ? year : "1995";

  // privileged method ... she only can access the private member
  this.age = function () {
    return 2022 - year;
  };

  //   Private member setter
  this.setAge = function (newVal) {
    year = parseInt(newVal);
  };

  //   Private method
  function welcoming() {
    return `Hello ur age is ${this.setAge} :)`;
  }

  this.welcomeExuc = function () {
    return welcoming.bind(this)();
  };
};

const empolyee1 = new EmpAge(1995);

console.log(empolyee1.age());

empolyee1.setAge("2000");

console.log(empolyee1.age());

console.log(empolyee1.welcomeExuc());

// static|class member
EmpAge.vacationDays = 21;
EmpAge.getVacationInfo = () =>
  ` only ${EmpAge.vacationDays} allowed to every employee`;
