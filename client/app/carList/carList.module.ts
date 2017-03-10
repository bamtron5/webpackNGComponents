import * as angular from 'angular';
import controller from './carList.controller';
import route from './carList.route';
import CarChildOne from './carChildOne';
// import CarChildTwo from './carChildTwo';

const name = 'carList';
const template = '/client/app/carList/carList.html';

export default angular.module('app.carList', [CarChildOne])
  .component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
