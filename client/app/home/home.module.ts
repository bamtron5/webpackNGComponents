import * as angular from 'angular';
import route from './home.route';
import controller from './home.controller';

const name = 'home';
const template = '/client/app/home/home.html';

export default angular.module('app.home', [])
  .component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
