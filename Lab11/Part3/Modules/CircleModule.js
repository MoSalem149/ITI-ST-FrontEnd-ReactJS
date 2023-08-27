import Shape from "./shapeModule.js";

class Circle extends Shape {
  constructor(radius, x, y, color) {
    super(color);
    this._radius = radius;
    this._x = x;
    this._y = y;
  }

  getArea() {
    return Math.PI * this._radius ** 2;
  }

  Draw() {
    console.log(
      `Drawing circle with radius ${this._radius}, x ${this._x}, y ${this._y}, and color ${this.Color}`
    );
  }
}

export default Circle;
