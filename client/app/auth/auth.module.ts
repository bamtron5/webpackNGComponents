import * as angular from 'angular';
import controller from './auth.controller';
import route from './auth.route';
import constants from './auth.constants';
const name = 'auth';
const template = '/client/app/auth/auth.html';

export default angular.module('app.auth', [constants])
  .component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
