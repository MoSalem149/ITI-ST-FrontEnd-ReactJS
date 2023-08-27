function performOperation(operator, ...integers) {
  let result;

  switch (operator) {
    case "sum":
      result = integers.reduce((acc, num) => acc + num, 0);
      break;
    case "subtraction":
      result = integers.reduce((acc, num) => acc - num);
      break;
    case "multiplication":
      result = integers.reduce((acc, num) => acc * num, 1);
      break;
    case "division":
      if (integers.includes(0)) {
        console.error("Division by zero is not allowed");
        return;
      }
      result = integers.reduce((acc, num) => acc / num);
      break;
    default:
      console.error("Invalid operator");
      return;
  }

  console.log(
    `Result of ${operator} operation for ${integers.join(", ")} is: ${result}`
  );
}

export { performOperation };
