interface IPoint {
  x: number;
  y: number;
}

class Point implements IPoint {
  public x: number;
  public y: number;
  constructor(
    x: number,
    y: number
  ) {
    this.x = x;
    this.y = y;
  }
}

export default Point;
