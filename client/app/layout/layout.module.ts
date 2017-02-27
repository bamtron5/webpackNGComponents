import * as angular from 'angular';
import './layout.scss';
const name = 'layout';
const template = '/client/app/layout/layout.html'


export default angular.module('app.layout', [])
  .component(name, {
    templateUrl: template,
    controllerAs: 'vm'
  })
  .name;
