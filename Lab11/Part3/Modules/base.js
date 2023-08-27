import { Rectangle, Square } from "./SquaresModule.js";
import Circle from "./CircleModule.js";

const rectangle = new Rectangle(5, 6, "blue");
const square = new Square(7, "orange");
const circle = new Circle(5, 0, 0, "yellow");

console.log("Rectangle Area:", rectangle.getArea());
console.log("Square Area:", square.getArea());
console.log("Circle Area:", circle.getArea());

console.log("===================================================");

console.log("rectangle:");
rectangle.Draw();
console.log("===================================================");
console.log("square:");
square.Draw();
console.log("===================================================");
console.log("circle:");
circle.Draw();
