export default class RotatingShape {
  constructor(shape) {
    this.shape = shape;
  }

  fromString(string) {
    return new RotatingShape(string);
  }

  toString() {
    return this.shape;
  }
}
