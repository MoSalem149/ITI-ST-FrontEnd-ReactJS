//TASK1 PART1
//1- Define an array of numbers  Write a JavaScript code to remove duplicate items from an array.  Sort them ascending then descending  Filter numbers larger than 50 a- User defined function b- Array built in filter function  Display Max and Min Numbers  a- User defined function b- Math functions
// Define an array of numbers
var Numbers = [34, 67, 89, 21, 12, 34, 56, 90, 23, 45, 67];
// User defined function to remove duplicates from an array
function removeDuplicates(arr) {
  var uniqueArray = [];

  for (var item of arr) {
    if (!uniqueArray.includes(item)) {
      uniqueArray.push(item);
    }
  }

  return uniqueArray;
}

var Numbers = [34, 67, 21, 67, 89, 12, 34, 56, 90, 23, 45, 67];
var arrayWithoutDuplicates = removeDuplicates(Numbers);

console.log("Original Array:", Numbers);
console.log("Array without duplicates:", arrayWithoutDuplicates);
console.log("--------------------------------------------------");

// Sort the array in descending order
var Numbers = [34, 67, 89, 21, 12, 34, 56, 90, 23, 45, 67];
console.log("Original Array:", Numbers);

Numbers.sort(function (a, b) {
  return b - a;
});
console.log(" Descending order: " + Numbers);

// Sort the array in ascending order
Numbers.sort(function (a, b) {
  return a - b;
});
console.log(" Ascending order: " + Numbers);

console.log("--------------------------------------------------");

//Filter numbers larger than 50
var Numbers = [34, 67, 89, 21, 12, 34, 56, 90, 23, 45, 67];
function isGreaterThan50(number) {
  return number > 50;
}
var filterNumbers = Numbers.filter(isGreaterThan50);
console.log("Original Array:", Numbers);
console.log(
  "Array with filter numbers larger than 50:",
  Numbers.filter(isGreaterThan50)
);
console.log("--------------------------------------------------");

// Display Max and Min Numbers
var Numbers = [34, 67, 89, 21, 12, 34, 56, 90, 23, 45, 67];
console.log(
  "Maximum Number:",
  Math.max(34, 67, 89, 21, 12, 34, 56, 90, 23, 45, 67)
);
console.log(
  "Minimum Number:",
  Math.min(34, 67, 89, 21, 12, 34, 56, 90, 23, 45, 67)
);
console.log("--------------------------------------------------");
//Write a JavaScript function to Compute the sum and product of an array of integers (Use eval) a- Function header as follow  function sumAll(numbersArray) Note: using eval b- Function header as follow  function sumAll() Note: using eval.
//Function header as follow > function sumAll(numbersArray)
function sumAll(numbersArray) {
  var sum = eval(numbersArray.join("+"));
  var product = eval(numbersArray.join("*"));

  return { sum: sum, product: product };
}

var inputArray = [1, 2, 3, 4, 5];
var result = sumAll(inputArray);
console.log("Array Sum:", result.sum);
console.log("Array Product:", result.product);

//Function header as follow > function sumAll()
function sum_All() {
  var numbers_Array = Array.from(arguments);
  var sumArr = eval(numbers_Array.join("+"));
  var productArr = eval(numbers_Array.join("*"));

  return { sum: sumArr, product: productArr };
}

var resultArr = sum_All(1, 2, 3, 4, 5);
console.log("Sum:", resultArr.sum);
console.log("Product:", resultArr.product);
console.log("--------------------------------------------------");
//Write a JavaScript function to get the month name from a particular date
function getMonthNameFromDate(date) {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var monthIndex = date.getMonth();
  var monthName = months[monthIndex];

  return monthName;
}

var inputDate = new Date("2002-9-14"); // Replace with the date you want
var monthName = getMonthNameFromDate(inputDate);
console.log("Month Name:", monthName);
console.log("--------------------------------------------------");
//TASK1 PART2
//1 - write js code to convert a string into Pascal Case : ex: input: "ali mohamed" output: "Ali Mohamed"
function pascalCase(str) {
  var words = str.split(" ");
  var pascalCaseWords = words.map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });
  return pascalCaseWords.join(" ");
}

var input = "mohamed salem";
var output = pascalCase(input);
console.log(output);
console.log("--------------------------------------------------");
//2 - receive an array of numbers from user it's size will determined from user , then receive it and make sure all values is Number then ask user to enter one of the following letter a : to display array with the same receiving order b : to display array with ascending order : dont edit original object c : to display array with descending order d : to reversed version of original array  e : to display even numbers only from array if there no even numbers , display alert to inform user with that f : receive number from user then display all numbers from array which divisible by received number , if there no result inform user with that g : display new array with 30% discount for all numbers in original array h : display string which represent all numbers of array concated with *** after each selected choice you have to ask user if he | she want to repeate running
function validateArrayNumberInput(input) {
  return !isNaN(input) && input !== "";
}

function displayArray(arr) {
  console.log("Array:", arr.join(", "));
}

function main() {
  var size = parseInt(prompt("Enter the size of the array:"));
  var numbers = [];

  for (var i = 0; i < size; i++) {
    var numInput = prompt("Enter a number:");
    if (validateArrayNumberInput(numInput)) {
      numbers.push(parseFloat(numInput));
    } else {
      alert("Invalid input. Please enter a valid number.");
      i--;
    }
  }

  var repeat = true;
  while (repeat) {
    var choice = prompt(
      "Choose an operation:\n" +
        "a: Display array in same order\n" +
        "b: Display array in ascending order\n" +
        "c: Display array in descending order\n" +
        "d: Display reversed array\n" +
        "e: Display even numbers\n" +
        "f: Display numbers divisible by a given number\n" +
        "g: Display array with 30% discount\n" +
        "h: Concatenate array numbers with ***\n"
    );

    switch (choice) {
      case "a":
        displayArray(numbers);
        break;
      case "b":
        displayArray(numbers.slice().sort((a, b) => a - b));
        break;
      case "c":
        displayArray(numbers.slice().sort((a, b) => b - a));
        break;
      case "d":
        displayArray(numbers.slice().reverse());
        break;
      case "e":
        var evenNumbers = numbers.filter((num) => num % 2 === 0);
        if (evenNumbers.length === 0) {
          alert("No even numbers in the array.");
        } else {
          displayArray(evenNumbers);
        }
        break;
      case "f":
        var divisor = parseInt(prompt("Enter a divisor:"));
        var divisibleNumbers = numbers.filter((num) => num % divisor === 0);
        if (divisibleNumbers.length === 0) {
          alert("No numbers divisible by " + divisor + " in the array.");
        } else {
          displayArray(divisibleNumbers);
        }
        break;
      case "g":
        var discountArray = numbers.map((num) => num * 0.7);
        displayArray(discountArray);
        break;
      case "h":
        var concatenatedString = numbers.join(" *** ");
        console.log(concatenatedString);
        break;
      default:
        alert("Invalid choice.");
    }

    repeat = confirm("Do you want to repeat?");
  }
}

main();
