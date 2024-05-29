export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;

    this.cells = [];

    for (let row = 0; row < height; row++) {
      this.cells.push([]);
      for (let column = 0; column < width; column++) {
        this.cells[row].push(".");
      }
    }
  }

  toString() {
    return this.cells.map((row) => row.join("")).join("\n") + "\n";
  }

  drop() {
    this.cells[0][1] = "X";
  }

  tick() {
    for (let row = 0; row < this.height; row++) {
      for (let column = 0; column < this.width; column++) {
        if (this.cells[row][column] === "X") {
          this.cells[row][column] = ".";
          this.cells[row + 1][column] = "X";
        }
      }
    }
  }
}
