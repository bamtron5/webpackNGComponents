import * as angular from 'angular';
import controller from './deckBuilder.controller';
import route from './deckBuilder.route';

const name = 'deckBuilder';
const template = '/client/app/deckBuilder/deckBuilder.html';

export default angular.module('app.deckBuilder', [])
  .component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
