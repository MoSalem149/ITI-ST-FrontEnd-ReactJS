const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");
const table = document.querySelector("table");

addButton.addEventListener("click", () => {
  const taskName = taskInput.value.trim();
  if (taskName !== "") {
    const newRow = table.insertRow(table.rows.length);
    const doneCell = newRow.insertCell(0);
    const taskCell = newRow.insertCell(1);
    const deleteCell = newRow.insertCell(2);

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.backgroundColor = "lightseagreen";

    checkbox.addEventListener("change", function () {
      taskCell.style.textDecoration = this.checked ? "line-through" : "none";
      taskCell.style.textDecorationColor = this.checked ? "brown" : "initial";
    });

    doneCell.appendChild(checkbox);
    taskCell.textContent = taskName;

    const deleteIcon = document.createElement("span");
    deleteIcon.className = "delete-icon";
    deleteIcon.innerHTML = "&#10006;";
    deleteCell.appendChild(deleteIcon);

    deleteIcon.addEventListener("click", () => {
      const confirmed = confirm("R U sure you want to delete this task?");
      if (confirmed) {
        table.deleteRow(newRow.rowIndex);
      }
    });

    taskInput.value = "";
  }
});
