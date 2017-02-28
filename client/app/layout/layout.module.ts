import * as angular from 'angular';
import controller from './layout.controller';
import './layout.scss';

const name = 'layout';
const template = '/client/app/layout/layout.html';

export default angular.module('app.layout', [])
  .component(name, {
    templateUrl: template,
    controller,
    controllerAs: 'vm'
  })
  .name;
