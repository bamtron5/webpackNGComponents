import * as angular from 'angular';

import controller from './d3Demo.controller';
import route from './d3Demo.route';

//LIB non injectable
import '../../../node_modules/nvd3/build/nv.d3';
import '../../../node_modules/nvd3/build/nv.d3.css';

const name = 'd3Demo';
const template = '/client/app/d3Demo/d3Demo.html';

export default angular.module('app.d3Demo', ['nvd3'])
  .component(name, {
    templateUrl: template,
    controller: controller,
    controllerAs: 'vm'
  })
  .config(route)
  .name;
