const addNum1 = document.getElementById("add-num1");
const addNum2 = document.getElementById("add-num2");
const addResult = document.getElementById("add-result");

addNum1.addEventListener("input", performAddition);
addNum2.addEventListener("input", performAddition);

function performAddition() {
  const num1 = parseFloat(addNum1.value) || 0;
  const num2 = parseFloat(addNum2.value) || 0;
  const result = num1 + num2;
  addResult.textContent = result;
}

const mulNum1 = document.getElementById("mul-num1");
const mulNum2 = document.getElementById("mul-num2");
const mulResult = document.getElementById("mul-result");

mulNum1.addEventListener("input", performMultiplication);
mulNum2.addEventListener("input", performMultiplication);

function performMultiplication() {
  const num1 = parseFloat(mulNum1.value) || 0;
  const num2 = parseFloat(mulNum2.value) || 0;
  const result = num1 * num2;
  mulResult.textContent = result;
}
