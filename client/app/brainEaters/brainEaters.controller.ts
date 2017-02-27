import * as angular from 'angular';
import Player from './Player';
import Wall from './Wall';
import gameFactory from '../services/game.factory';

class BrainEaters {
  game = gameFactory();
  currentLevel:number = 0;
  constructor(
    private LEVELS,
    private IMAGES
  ) {
    this.startGame();
  }

  startGame() {
    this.game.initialize();
    new Player(this.IMAGES.player, 0, 0);
    this.setLevel();
  }

  setLevel(){
    this.LEVELS[this.currentLevel].walls.forEach((arg) => {
      new Wall(...arg);
    });
  }
}

BrainEaters.$inject = ['LEVELS','IMAGES'];

export default BrainEaters;
