import * as angular from 'angular';
import controller from './carList.controller';
import route from './carList.route';

const name = 'carList';
const template = '/client/app/carList/carList.html';

export default angular.module('app.carList', [])
  .component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
