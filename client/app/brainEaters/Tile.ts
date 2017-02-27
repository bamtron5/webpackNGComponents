import * as angular from 'angular';
import Point from './Point';
import gameFactory from '../services/game.factory';

interface ITile {
  unit:number;
  image:HTMLImageElement,
  x:number,
  y:number,
  w:number,
  h:number,
  type:string
}

class Tile implements ITile {
  unit:number = 50;
  image:HTMLImageElement;
  x:number;
  y:number;
  w:number;
  h:number;
  type:string;
  game = gameFactory().vm.instance;
  constructor(
    ...args
  ) {
    let [
      image,
      x,
      y
    ] = args;

    this.image = new Image();
    this.image.src = image;
    this.image.height = this.unit;
    this.image.width = this.unit;
    this.w = this.unit;
    this.h = this.unit;
    this.x = x;
    this.y = y;
    this.image.onload = () => {
      this.drawTile();
    };
  }

  drawTile() {
    this.game.hashTable.set(JSON.stringify(new Point(this.x, this.y)), this.type);
    this.game.context.drawImage(this.image, this.x, this.y, this.w, this.h);
  }

  clearTile() {
    this.game.hashTable.delete(JSON.stringify(new Point(this.x, this.y)));
    this.game.context.clearRect(this.x, this.y, this.w, this.h);
  }

  moveUp() {
    if (this.canMoveImage('up')) {
      this.clearTile();
      this.y -= this.unit;
      this.drawTile();
    }
  }

  moveDown() {
    if (this.canMoveImage('down')) {
      this.clearTile();
      this.y += this.unit;
      this.drawTile();
    }
  }

  moveLeft() {
    if (this.canMoveImage('left')) {
      this.clearTile();
      this.x -= this.unit;
      this.drawTile();
    }
  }

  moveRight() {
    if (this.canMoveImage('right')) {
      this.clearTile();
      this.x += this.unit;
      this.drawTile();
    }
  }

  canMoveImage(direction:string) {
    switch(direction) {
      case 'up':
        let destUp = JSON.stringify(new Point(this.x, this.y - this.unit));
        return !this.game.hashTable.get(destUp) ? this.y > 0 : false;
      case 'down':
        let destDown = JSON.stringify(new Point(this.x, this.y + this.unit));
        return !this.game.hashTable.get(destDown) ? (this.y + this.h) < this.game.c.height : false;
      case 'left':
        let destLeft = JSON.stringify(new Point(this.x - this.unit, this.y));
        return !this.game.hashTable.get(destLeft) ? this.x > 0 : false;
      case 'right':
        let destRight = JSON.stringify(new Point(this.x + this.unit, this.y));
        return !this.game.hashTable.get(destRight) ? (this.x + this.w) < this.game.c.width : false;
    }
  }
}

export default Tile;
