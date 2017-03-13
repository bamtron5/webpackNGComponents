import * as angular from 'angular';
import coreConstants from './core.constants';
import coreFilters from './core.filters';
import authInterceptor from './interceptor.factory';
import 'ngstorage';
import 'angular-resource';
import 'angular-messages';
import 'angular-nvd3';
import {UserServiceModule} from '../services/user.service';

// LIB non injectable
import '../../../node_modules/animate.css/animate.css';
import '../../../node_modules/font-awesome/scss/font-awesome.scss';
// import '../../../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
import '../../../node_modules/angular-toastr/dist/angular-toastr.tpls.js';
import '../../../node_modules/angular-toastr/dist/angular-toastr.css';
import '../../../node_modules/angular-material/angular-material.css';

export default angular.module('app.core', [
  'ngResource',
  'ngMessages',
  'ngStorage',
  'toastr',
  coreConstants,
  coreFilters,
  authInterceptor,
  UserServiceModule
])
.name;
