/*
1- Define an array of numbers (only let is allowed)
a-Sort them ascending then descending (using array sort method and Arrow
functions)
b-Filter numbers larger than 50 (using array filter method and Arrow functions)
c-Display Max and Min Numbers (using math methods and spread operator)
*/
console.log("Task1 :");
// Define array of numbers
let arrNumbers = [67, 23, 89, 12, 56, 37, 98, 42, 66, 87];

// a- Sort them ascending and descending
let ascSorted = arrNumbers.slice().sort((a, b) => a - b);
let descSorted = arrNumbers.slice().sort((a, b) => b - a);

console.log(`Ascending Sorted: ${ascSorted}`);
console.log(`Descending Sorted: ${descSorted}`);

// b - Filter array numbers larger than 50
const filteredArrNumbers = arrNumbers.filter((num) => num > 50);

console.log(`Numbers larger than 50: ${filteredArrNumbers}`);

// c - Display Max and Min array Numbers
const maxArrNumber = Math.max(...arrNumbers);
const minArrNumber = Math.min(...arrNumbers);

console.log(`Max Number: ${maxArrNumber}`);
console.log(`Min Number: ${minArrNumber}`);

console.log("=======================================================");

/*
2- Define javascript function that takes only 2 arguments operator and any
numbers of integers (using Rest operator) then display the result of operation on
console on one line (using substitution $ with bactecks ` ) as follow
“result of sum operation for 3,1,6,3 is 13”.
*/
console.log("Task2 :");
function performOperation(operator, ...integers) {
  let result;

  switch (operator) {
    case "sum":
      result = 0;
      for (const num of integers) {
        result += num;
      }
      break;
    case "subtraction":
      result = integers[0];
      for (let i = 1; i < integers.length; i++) {
        result -= integers[i];
      }
      break;
    case "multiplication":
      result = 1;
      for (const num of integers) {
        result *= num;
      }
      break;
    case "division":
      result = integers[0];
      for (let i = 1; i < integers.length; i++) {
        if (integers[i] === 0) {
          console.error("Division by zero is not allowed");
          return;
        }
        result /= integers[i];
      }
      break;

    default:
      console.error("Invalid  operator");
      return;
  }

  console.log(
    `result of ${operator} operation for ${integers.join(", ")} is: ${result}`
  );
}

performOperation("sum", 3, 1, 6, 3);
performOperation("subtraction", 10, 2, 3);
performOperation("multiplication", 2, 5, 3);
performOperation("division", 20, 2, 2);
performOperation("division", 20, 0, 2);

console.log("=======================================================");

/*
3- Create constant project anonymouse object after takeing properties names
and values from user (using object literals )
Note: names are projectId , projectName ,duration and printData which
console.log all project data.
*/
// Take input from the user
const projectId = prompt("Enter Project ID:");
const projectName = prompt("Enter Project Name:");
const duration = prompt("Enter Project Duration:");

// Create the anonymous project object
const project = {
  projectId: projectId,
  projectName: projectName,
  duration: duration,
  printData: function () {
    console.log("Project ID:", this.projectId);
    console.log("Project Name:", this.projectName);
    console.log("Duration:", this.duration);
  },
};

// Call the printData
project.printData();
