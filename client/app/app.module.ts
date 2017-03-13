import * as angular from 'angular';
import config from './app.config';
import run from './app.run';
import core from './core/core.module';
import 'angular-ui-router';
import 'angular-material';
import 'angular-aria';
import 'angular-animate';
import {SessionServiceModule} from './services/session.service';

import LayoutComponent from './layout/layout.module';
import HomeComponent from './home/home.module';
import AuthComponent from './auth/auth.module';

const name = 'app';
const dependencies = [
  'ui.router',
  'ngMaterial',
  'ngAnimate',
  'ngAria',
  SessionServiceModule,
  core, // YOUR CORE DEPENDENCIES
  HomeComponent,
  LayoutComponent,
  AuthComponent
];

angular.module(name, dependencies)
  .config(config)
  .run(run);

angular.bootstrap(document.body, [name], { strictDi: true });
