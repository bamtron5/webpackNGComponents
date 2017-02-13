import * as angular from 'angular';
import 'angular-resource';
import 'ngstorage';
import 'angular-ui-router';

import AppController from './app.controller';
import Config from './app.config';
import Runners from './app.runners';
import HomeComponent from './app/components/home/home.component';
import WidgetComponent from './app/components/widget/widget.component';

const topLevelComponents = [
  HomeComponent
];

const lowLevelComponents = [
  WidgetComponent
];

const appDependencies = ['ui.router', 'ngResource', 'ngStorage'];
const modules = ['App'].concat(topLevelComponents, lowLevelComponents);

angular
  .module('App', appDependencies)
  .config(Config)
  .run(Runners)
  .component('app', {
    templateUrl: '/client/app.html',
    controllerAs: 'vm',
    controller: AppController
  });

angular.bootstrap(document.body, modules, { strictDi: true });
