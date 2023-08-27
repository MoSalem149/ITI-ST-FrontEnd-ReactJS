//TASK1
//use coloring format according to user's choice. the user has to choose either red, green or blue color, take his choice via prompt.
var color = prompt("Enter color [red-green-blue]:");

function writeToDocument() {
  var output = "";

  if (color === "red" || color === "green" || color === "blue") {
    output +=
      "entring the user info".bold().fontsize(7) + "<br/><br/><br/>" + "<hr/>";
    output += "<hr/>";
    output +=
      "Welcome dear guest".fontsize(5).fontcolor(color).bold() +
      " Ali".bold().fontsize(5) +
      "<br/>";
    output +=
      "your telephone number is ".fontsize(5).fontcolor(color).bold() +
      " 77777777".bold().fontsize(5) +
      "<br/>";
    output +=
      "your mobile number is ".fontsize(5).fontcolor(color).bold() +
      "01111111111".bold().fontsize(5) +
      "<br/>";
    output +=
      "your email address is ".fontsize(5).fontcolor(color).bold() +
      "aaa@bb.com".bold().fontsize(5) +
      "<br/>";
    output += "<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>";
    output +=
      "today is ".fontsize(5).fontcolor(color).bold() +
      new Date().toDateString().fontsize(7) +
      "<br/>";

    document.write(output);
  } else {
    alert("You Entered Wrong Color, Try Again");
  }
}

writeToDocument();
console.log("---------------------------------------------------");
//********************************************************************************************** */
//TASK2.1
//write a script that accepts a string from user through prompt and count the number of 'e' character in it.
var userInput = prompt("Enter a string for count the number of 'e' character:");

// Function to count occurrences of a character in a string
function countCharacterApear(str, char) {
  var count = 0;

  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) {
      count++;
    }
  }

  return count;
}

var charToCount = "e";
var occurrences = countCharacterApear(userInput, charToCount);

console.log(
  "Output Task2.1 The number of letter '" + charToCount + "' in the input is:",
  occurrences
);
//********************************************************************************************** */
//TASK2.2
//write a script to determine whether the entered string is palindrome or not. request the string to be entered via prompt, ask the user whether to consider case sensitivity of the entered string or not via confirm, handle both cases in your script.
var userInput = prompt(
  "Enter a string to determine whether the entered string is palindrome or not:"
);

var caseSensitive = confirm(
  "Do you want to consider case sensitivity? Click 'OK' for case-sensitive or 'Cancel' for case-insensitive."
);

function isPalindrome(str, caseSensitive) {
  if (!caseSensitive) {
    str = str.toLowerCase();
  }

  var left = 0;
  var right = str.length - 1;

  while (left < right) {
    if (str.charAt(left) !== str.charAt(right)) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}

var palindromeCheck = isPalindrome(userInput, caseSensitive);

if (palindromeCheck) {
  console.log("Output Task2.2 : The entered string is a palindrome.");
} else {
  console.log("Output Task2.2 : The entered string is not a palindrome.");
}
console.log("---------------------------------------------------");
//********************************************************************************************** */
//TASK1
//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
function capitalizeWords(str) {
  var words = str.split(" ");
  var resString = "";

  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
    resString += capitalizedWord + " ";
  }

  return resString.trim();
}

var inputString = "the quick brown fox";
var capitalizedString = capitalizeWords(inputString);
console.log("Output Task1 :", capitalizedString);
//********************************************************************************************** */
//TASK2
//Write a JavaScript function that returns a passed string with letters inalphabetical order (UseString Methods)
function stringAlphabetically(str) {
  var sortedString = "";

  for (var i = 0; i < str.length; i++) {
    var charToInsert = str[i];
    var insertIndex = 0;

    while (
      insertIndex < sortedString.length &&
      charToInsert >= sortedString[insertIndex]
    ) {
      insertIndex++;
    }

    sortedString =
      sortedString.slice(0, insertIndex) +
      charToInsert +
      sortedString.slice(insertIndex);
  }

  return sortedString;
}

var inputString = "javascript";
var sortedString = stringAlphabetically(inputString);
console.log("Output Task2:", sortedString);

//********************************************************************************************** */
//TASK3
//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function findLongestWord(str) {
  var words = str.split(" ");
  var longestWord = "";

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

var inputString = "Development Web Tutorial";
var longestWord = findLongestWord(inputString);
console.log("Output Task3 :", longestWord);
//********************************************************************************************** */
//TASK4
//Write a JavaScript function which accept a string as input and swap the case of each character.
function swapCase(str) {
  var swapped = "";

  for (var i = 0; i < str.length; i++) {
    var char = str[i];
    swapped +=
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
  }

  return swapped;
}

var inputString = "Egypt";
var swappedString = swapCase(inputString);
console.log("Output Task4:", swappedString);
//********************************************************************************************** */
//TASK5
//Write a JavaScript function to extract unique characters from a string.
function extractUniqueCharacters(str) {
  var uniqueChars = "";

  for (var i = 0; i < str.length; i++) {
    if (uniqueChars.indexOf(str[i]) === -1) {
      uniqueChars += str[i];
    }
  }

  return uniqueChars;
}

var inputString = "thequickbrownfoxjumpsoverthelazydog";
var uniqueCharsString = extractUniqueCharacters(inputString);
console.log("Output Task5 :", uniqueCharsString);
//********************************************************************************************** */
//TASK6
//Write a JavaScript function to Display Random value from 0 to 9 (Use Math Object).
function getRandomValue() {
  var randomValue = Math.floor(Math.random() * 10);
  return randomValue;
}

var randomNum = getRandomValue();
console.log("Output Task6 :", randomNum);
//********************************************************************************************** */
//TASK7
//Write a JavaScript program to find the area of Circle where the radius is 5 The area of a circle is π (Pi) times the Radius squared (Use Math Object)
function calculateCircleArea(radius) {
  var area = Math.PI * Math.pow(radius, 2);
  return area;
}

var radius = 4;
var circleArea = calculateCircleArea(radius);
console.log("Output Task7 :", circleArea);
console.log("---------------------------------------------------");
