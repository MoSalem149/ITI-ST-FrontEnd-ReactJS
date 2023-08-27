var newsCount = 1;

function addNews() {
  var inputElement = document.getElementById("newsInput");
  var newsText = inputElement.value;

  if (newsText.trim() !== "") {
    var tableBody = document
      .getElementById("newsTable")
      .getElementsByTagName("tbody")[0];
    var newRow = tableBody.insertRow(tableBody.rows.length);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML = newsCount++;
    cell2.innerHTML = newsText;
    inputElement.value = "";
  }
}

function countRows() {
  var rowCount = document.getElementById("newsTable").rows.length - 1;
  alert("Number of table rows: " + rowCount);
}
