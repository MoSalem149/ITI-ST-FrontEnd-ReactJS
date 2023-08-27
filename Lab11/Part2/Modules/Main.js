import {
  ascSorted,
  descSorted,
  filteredArrNumbers,
  maxArrNumber,
  minArrNumber,
} from "./Task1.js";

import { performOperation } from "./Task2.js";

import { project } from "./Task3.js";

// Use the imported variables and functions here
console.log("Task 1 Results:");
console.log("Ascending Sorted:", ascSorted);
console.log("Descending Sorted:", descSorted);
console.log("Numbers larger than 50:", filteredArrNumbers);
console.log("Max Number:", maxArrNumber);
console.log("Min Number:", minArrNumber);

console.log("=======================================================");

console.log("Task 2 Results:");
performOperation("sum", 3, 1, 6, 3);
performOperation("subtraction", 10, 2, 3);
performOperation("multiplication", 2, 5, 3);
performOperation("division", 20, 2, 2);
performOperation("division", 20, 0, 2);

console.log("=======================================================");

console.log("Task 3 Results:");
project.printData();
