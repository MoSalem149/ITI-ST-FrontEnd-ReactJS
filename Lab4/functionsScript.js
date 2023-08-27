//a- Function accept 2 inputs with any type and return the summation result.
function sumNum(x, y) {
  return x + y;
}

//b-Function accept first , middle and last name of the user and return user full name (what if any value is undefined at the time of calling ??).
function fullName(fName = "", mName = "", lName = "") {
  if (fName === "" && mName === "" && lName === "") {
    return "No Name Provided";
  } else {
    return fName + " " + mName + " " + lName;
  }
}

//c- Function accept one input take from user and return the factorial.
function factorial(fn) {
  if (fn === 0 || fn === 1) {
    return 1;
  } else {
    return fn * factorial(fn - 1);
  }
}

//d- Create calculator as JavaScript Function that accept 3 inputs from user (number1,number2,operation) and return and return the mathematical operation according to the type of operator and show result at alert.
function calculator(number1, number2, operation) {
  if (typeof number1 !== "number") {
    alert("Please enter a valid numbers for number1 .");
    return;
  }

  if (typeof number2 !== "number") {
    alert("Please enter a valid numbers for number2.");
    return;
  }

  if (
    typeof operation !== "string" ||
    !["+", "-", "*", "/"].includes(operation)
  ) {
    alert("Invalid operation.");
    return;
  }

  var result;

  switch (operation) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number1 / number2;
      break;
  }

  alert("Result: " + result);
}

//e- Create JavaScript function that take the degree of student from user and calculate the grade (Excellent,VGood,Goog,Fail).
function stduntDegree(stdD) {
  if (stdD >= 85) {
    return "Excellent";
  } else if (stdD >= 75) {
    return "Very Good";
  } else if (stdD >= 65) {
    return "Good";
  } else {
    return "Fail";
  }
}

//f- Function that take two inputs with default values and try all case for return the summation as local variable.
function sumDefaultInputs(val1 = 1, val2 = 2) {
  var result = val1 + val1;
  return result;
}

//g- Make a function to indicate the meaning of (local ,global, hosting)data with debugging it.
var globalVar = "I'm global";

function explainScope() {
  var localVar = "I'm local";

  console.log(globalVar); // Accessible here
  console.log(localVar); // Accessible here

  if (true) {
    var blockVar = "I'm still local, due to hoisting";
  }

  console.log(blockVar); // Accessible here due to hoisting, prints 'undefined'
}

console.log(globalVar); // Accessible globally
console.log(localVar); // Not accessible, would result in an error
console.log(blockVar); // Not accessible, would result in an error

//h- (Bouns) function that take string input and return the char code for it
function stringInput(str) {
  var charCodeArray = [];
  for (var i = 0; i < str.length; i++) {
    charCodeArray.push(str.charCodeAt(i));
  }
  return charCodeArray;
}
