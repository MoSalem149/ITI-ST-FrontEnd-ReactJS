import Shape from "./shapeModule.js";

export class Rectangle extends Shape {
  constructor(width, height, color) {
    super(color);
    this._width = width;
    this._height = height;
  }

  getArea() {
    return this._width * this._height;
  }

  Draw() {
    console.log(
      `Drawing rectangle with width ${this._width}, height ${this._height}, and color ${this.Color}`
    );
  }
}

export class Square extends Rectangle {
  constructor(side, color) {
    super(side, side, color);
  }
}
