// Исправьте код так, чтобы отрицательные значения были переключены на положительные!

class Cube {
  constructor(num: number) {
    this._side = num
  }
  public getSide(): number {
    return Math.abs(this._side);
  }

  public setSide(value: number) {
    this._side = Math.abs(value);
  }

  private _side: number;

}

console.log(new Cube(-10).getSide());

