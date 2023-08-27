/* 
1- Write a Constructor function for Employee (name,age,department,salary) contains
setters , getters for salary (salary is private) and toString function to display
Employee data on console.
*/
function Employee(name, age, department, salary) {
  this.name = name;
  this.age = age;
  this.department = department;

  // Private variable
  var _salary = salary;

  // Setter for salary
  this.setSalary = function (newSalary) {
    if (newSalary >= 0) {
      _salary = newSalary;
    } else {
      console.log("Please Enter a valid salary.");
    }
  };

  //Getter for salary
  this.getSalary = function () {
    return _salary;
  };

  //toString method
  this.toString = function () {
    return (
      "Name: " +
      this.name +
      ", Age: " +
      this.age +
      ", Department: " +
      this.department +
      ", Salary: " +
      _salary
    );
  };
}
// Create an Employee object
var employee1 = new Employee("Mohamed Salem", 21, "IS", 1000);

// Salary Setter and Getter
employee1.setSalary(50000);
console.log("Updated Salary: ", employee1.getSalary());

// Display Employee Data
console.log("Employee Data: ", employee1.toString());
/*---------------------------------------------------------------------*/
/*
2- Create array of Employees ,take array size from user using prompt
Then loop using prompt to take every Employee data from user Each
Employee Data will be in one prompt as follow
Example “Mona , 25 , SD, 2000”.
*/
function Employee(name, age, department, salary) {
  this.name = name;
  this.age = age;
  this.department = department;
  var _salary = salary;

  this.setSalary = function (newSalary) {
    if (newSalary >= 0) {
      _salary = newSalary;
    } else {
      console.log("Please Enter a valid Salary.");
    }
  };

  this.getSalary = function () {
    return _salary;
  };

  this.toString = function () {
    return (
      "Name: " +
      this.name +
      ", Age: " +
      this.age +
      ", Department: " +
      this.department +
      ", Salary: " +
      _salary
    );
  };
}
// Prompt for array size
let arraySize = parseInt(prompt("Enter the number of employees:"));
// Empty array for store employees
let employees = [];

for (var i = 0; i < arraySize; i++) {
  let employeeData = prompt(
    "Enter data for Employee " + (i + 1) + " (Name, Age, Department, Salary):"
  );
  let [name, age, department, salary] = employeeData
    .split(", ")
    .map((item) => item.trim());
  let employee = new Employee(
    name,
    parseInt(age),
    department,
    parseInt(salary)
  );
  employees.push(employee);
}

/*
3- Sort them according to Department Ascending then by Salary descending.
*/
employees.sort((a, b) => {
  if (a.department !== b.department) {
    return a.department < b.department ? -1 : 1;
  } else {
    return b.getSalary() - a.getSalary();
  }
});

/*
4- Filter Employees with salaries greater than 2000.
*/
function filterBySalary(employee) {
  return employee.getSalary() > 2000;
}

var filteredEmployees = employees.filter(filterBySalary);

console.log("Filtered Employees With Salaries Greater Than 2000:");
console.log("=====================");
// console.table(filteredEmployees);
console.table(filteredEmployees, ["name", "age", "department"]);

console.log(
  "\nAll Employees Sorted Department Ascending Then By Salary Descending:"
);
console.log("=====================");
// console.table(employees);
console.table(employees, ["name", "age", "department"]);
/*----------------------------------------------------------------------*/
/*
5- Display the total and average salaries of all employees on alert box
*/
let totalSalary = 0;
for (const employee of employees) {
  totalSalary += employee.getSalary();
}
const averageSalary = totalSalary / employees.length;

window.alert(
  "Total Salary: " + totalSalary + "\n" + "Average Salary: " + averageSalary
);

var employeesByDepartment = {};
for (var employee of employees) {
  if (!employeesByDepartment[employee.department]) {
    employeesByDepartment[employee.department] = [];
  }
  employeesByDepartment[employee.department].push(employee);
}
/*----------------------------------------------------------------------*/
/*
6- Get the highest employee’s salary in each department without knowing
departments name.
*/
console.log("\nHighest Salaries by Department:");
console.log("=====================");

for (var department in employeesByDepartment) {
  var employeesInDepartment = employeesByDepartment[department];

  var highestSalary = -1;
  for (var i = 0; i < employeesInDepartment.length; i++) {
    var salary = employeesInDepartment[i].getSalary();
    if (salary > highestSalary) {
      highestSalary = salary;
    }
  }

  console.log(
    "Department: " + department + ", Highest Salary: " + highestSalary
  );
}
