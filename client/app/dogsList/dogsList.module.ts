import * as angular from 'angular';
import controller from './dogsList.controller';
import route from './dogsList.route';

const name = 'dogsList';
const template = '/client/app/dogsList/dogsList.html';

export default angular.module('app.dogsList', [])
  .component(name, {
    templateUrl: template,
    controller: controller,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
