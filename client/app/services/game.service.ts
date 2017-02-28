import * as angular from 'angular';

interface IGame {
  c: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  area: number;
  hashTable: Map<{}, {}>;
  unit: number;
}

class GameService implements IGame {
  public c: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById('myCanvas');
  public context: CanvasRenderingContext2D = this.c.getContext('2d');
  public hashTable: Map<{}, {}> = new Map();
  public area: number;
  public unit: number = 50;
  constructor() {
    this.area = (this.c.height / this.unit) * (this.c.width / this.unit);
  }
}

export default GameService;
