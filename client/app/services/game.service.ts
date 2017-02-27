import * as angular from 'angular';

interface IGame {
  c:HTMLCanvasElement;
  context:CanvasRenderingContext2D;
  area:number;
  hashTable:Map<{},{}>;
  unit:number;
}

class GameService implements IGame {
  c:HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('myCanvas');
  context:CanvasRenderingContext2D = this.c.getContext('2d');
  hashTable:Map<{},{}> = new Map();
  area:number;
  unit:number = 50;
  constructor() {
    this.area = (this.c.height / this.unit) * (this.c.width / this.unit);
  }
}

export default GameService;
