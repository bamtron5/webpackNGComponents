import Tile from './Tile';

class Player extends Tile {
  type:string = 'Player';
  constructor(
    image:string,
    x:number,
    y:number
  ) {
    super(image, x, y);
    this.createControls();
  }
 
  createControls() {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowUp':
          this.moveUp();
          break;
        case 'ArrowDown':
          this.moveDown();
          break;
        case 'ArrowLeft':
          this.moveLeft();
          break;
        case 'ArrowRight':
          this.moveRight();
          break;
      }
    }, false);
  }
}

export default Player;
