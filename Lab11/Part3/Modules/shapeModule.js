class Shape {
  constructor(color) {
    this._color = color || "";
  }

  get Color() {
    return this._color;
  }

  set Color(value) {
    this._color = value;
  }

  DrawShape() {
    console.log(`Drawing shape with color: ${this._color}`);
  }
}

export default Shape;
