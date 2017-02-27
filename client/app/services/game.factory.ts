import * as angular from 'angular';
import GameService from './game.service';

function gameFactory() {
  let vm = this;

  let initialize = function() {
    vm.instance = new GameService();
  }

  return {
    initialize: initialize,
    vm: vm
  };
}

export default gameFactory;
