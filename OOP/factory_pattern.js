const student = function (nm = "muhammed", age = 22) {
  return {
    name: nm,
    age: age,
  };
};

const student1 = student("yoo", 50);
console.log(student1);

// undeclared property value (other than function) will be undefined untill it's declarted
