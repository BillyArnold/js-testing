export class Board {
  width;
  height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.tetromino = null;

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

  drop(tetromino) {
    if (this.hasFalling()) {
      throw new Error("already falling");
    }
    this.tetromino = {
      shape: tetromino,
      status: "dropping",
    };
    this.cells[0][1] = this.tetromino.shape;
  }

  hasFalling() {
    return this.tetromino && this.tetromino.status === "dropping";
  }

  tick() {
    let positionToClear = [];
    let positionToUpdate = [];
    for (let row = 0; row < this.height; row++) {
      for (let column = 0; column < this.width; column++) {
        if (this.cells[row][column] === this.tetromino.shape && row < this.height - 1) {
          positionToClear.push({ row, column });
          positionToUpdate.push({ row: row + 1, column });
        } else if (this.cells[row][column] === this.tetromino.shape && row === this.height - 1) {
          this.tetromino.status = "stopped";
        }
      }
    }

    positionToClear.forEach(({ row, column }) => {
      this.cells[row][column] = ".";
    });
    positionToUpdate.forEach(({ row, column }) => {
      this.cells[row][column] = this.tetromino.shape;
    });
  }
}
