import * as angular from 'angular';
import controller from './brainEaters.controller';
import route from './brainEaters.route'
import constants from './brainEaters.constants';

const name = 'brainEaters';
const template = '/client/app/brainEaters/brainEaters.html';

export default angular.module('app.brainEaters', [constants])
  .component(name, {
    templateUrl: template,
    controller: controller,
    controllerAs: 'vm'
  })
  .config(route)
  .name
