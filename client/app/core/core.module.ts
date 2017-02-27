import * as angular from 'angular';
import coreConstants from './core.constants';
import coreFilters from './core.filters';
import authInterceptor from './interceptor.factory';
import 'angular-resource';
import 'angular-messages';
import 'angular-nvd3';
import {DogsServiceModule} from '../services/dogs.service';

//LIB non injectable
import '../../../node_modules/nvd3/build/nv.d3';
import '../../../node_modules/nvd3/build/nv.d3.css';
import '../../../node_modules/animate.css/animate.css';
import '../../../node_modules/font-awesome/scss/font-awesome.scss'; 

export default angular.module('app.core', [
  'ngResource',
  'ngMessages',
  coreConstants,
  coreFilters,
  authInterceptor,
  DogsServiceModule
])
.name;
