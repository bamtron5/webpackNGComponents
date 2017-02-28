import * as angular from 'angular';
import Player from './Player';
import Wall from './Wall';
import gameFactory from '../services/game.factory';

class BrainEaters {
  public game = gameFactory();
  public currentLevel: number = 0;
  constructor(
    private LEVELS,
    private IMAGES
  ) {
    this.startGame();
  }

  public startGame() {
    this.game.initialize();
    let p = new Player(this.IMAGES.player, 0, 0);
    this.setLevel();
  }

  public setLevel() {
    this.LEVELS[this.currentLevel].walls.forEach((arg) => new Wall(...arg) );
  }
}

BrainEaters.$inject = ['LEVELS', 'IMAGES'];

export default BrainEaters;
