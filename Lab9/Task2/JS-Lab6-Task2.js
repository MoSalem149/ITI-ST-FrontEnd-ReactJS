// Employees Array
const employees = [];
// Funcation Validations
function validateAndAddEmployee() {
  const name = document.getElementById("name").value;
  const age = parseInt(document.getElementById("age").value);
  const salary = parseFloat(document.getElementById("salary").value);
  const department = document.getElementById("department").value;

  const nameError = document.getElementById("nameError");
  const ageError = document.getElementById("ageError");
  const salaryError = document.getElementById("salaryError");

  nameError.textContent = "";
  ageError.textContent = "";
  salaryError.textContent = "";

  let isValid = true;

  if (name === "" || !/^[a-zA-Z\s]*$/.test(name)) {
    nameError.textContent = "Please enter a valid name.";
    isValid = false;
  }

  if (isNaN(age) || age < 25 || age > 60) {
    ageError.textContent = "Age must be a number between 25 and 60.";
    isValid = false;
  }

  if (isNaN(salary)) {
    salaryError.textContent = "Salary must be a number.";
    isValid = false;
  }

  if (isValid) {
    const newEmployee = {
      name: name,
      age: age,
      salary: salary,
      department: department,
    };

    employees.push(newEmployee);

    const table = document
      .getElementById("employeeTable")
      .getElementsByTagName("tbody")[0];
    const newRow = table.insertRow(table.rows.length);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = name;
    cell2.innerHTML = department;
    cell3.innerHTML = age;
    cell4.innerHTML = salary;
    cell5.innerHTML = '<button onclick="removeEmployee(this)">Delete</button>';

    // Clear input fields after adding an employee
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("salary").value = "";

    // Clear validation messages
    nameError.textContent = "";
    ageError.textContent = "";
    salaryError.textContent = "";
  }
}
// Funcation Remove Button
function removeEmployee(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
// Funcation Sort
function sortEmployee() {
  const sorted = document.getElementById("sort").value;

  employees.sort((a, b) => {
    if (sorted === "name") {
      return a.name.localeCompare(b.name);
    } else if (sorted === "department") {
      return a.department.localeCompare(b.department);
    }
  });

  displayEmployees();
}
// Funcation Filter
function filterEmployee() {
  const filtered = document.getElementById("filter").value;

  let filteredEmployees = [];

  if (filtered === "greater") {
    filteredEmployees = employees.filter((employee) => employee.age > 50);
  } else if (filtered === "less") {
    filteredEmployees = employees.filter((employee) => employee.age <= 50);
  }

  displayEmployees(filteredEmployees);
}

function displayEmployees(data) {
  const table = document
    .getElementById("employeeTable")
    .getElementsByTagName("tbody")[0];
  table.innerHTML = "";

  const employeesToDisplay = data || employees;

  for (const employee of employeesToDisplay) {
    const newRow = table.insertRow(table.rows.length);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = employee.name;
    cell2.innerHTML = employee.department;
    cell3.innerHTML = employee.age;
    cell4.innerHTML = employee.salary;
    cell5.innerHTML = '<button onclick="removeEmployee(this)">Delete</button>';
  }
}

// Initialize event listeners
document
  .getElementById("addEmployee")
  .addEventListener("click", validateAndAddEmployee);
document.getElementById("sort").addEventListener("change", sortEmployee);
document.getElementById("filter").addEventListener("change", filterEmployee);
