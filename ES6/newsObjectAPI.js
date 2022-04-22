/*
	Factory method
*/
function employee(empName, empDept = "BEng", empSalary) {
  return {
    // FIXME es6 allows to use argu , return em shorting
    empName,
    empSalary,
    empDept,

    // FIXME es6 allows to use method name tailing () directly with function keyword
    empInfo() {
      return `${this.empName} works in ${this.empDept} department with $${this.empSalary}`;
    },
  };
}

const emp = employee("Muhammed", "Comupter", "16k");
console.log(emp.empInfo());
