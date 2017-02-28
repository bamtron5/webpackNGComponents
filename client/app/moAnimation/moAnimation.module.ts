import * as angular from 'angular';
import controller from './moAnimation.controller';
import route from './moAnimation.route';
import './moAnimation.scss';

const name = 'moAnimation';
const template = '/client/app/moAnimation/moAnimation.html';

export default angular.module('app.moAnimation', [])
  .component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
