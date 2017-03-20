import * as angular from 'angular';
import route from './nested.route';
import controller from './nested.controller';

const name = 'nested';
const template = '/client/app/nested/nested.html';

export default angular.module('app.nested', [])
  .component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
