import {
  validateAndAddEmployee,
  removeEmployee,
  sortEmployee,
  filterEmployee,
  displayEmployees,
} from "./EmployeesModule.js";

document.getElementById("sort").addEventListener("change", sortEmployee);
document.getElementById("filter").addEventListener("change", filterEmployee);

function initializeTableButtonListeners() {
  const deleteButtons = document.querySelectorAll(
    'button[onclick="removeEmployee(this)"]'
  );
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      removeEmployee(button);
      displayEmployees();
    });
  });
}

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("addEmployee").addEventListener("click", () => {
    validateAndAddEmployee();
    displayEmployees();
  });

  initializeTableButtonListeners();
});
