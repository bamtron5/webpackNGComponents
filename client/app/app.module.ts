import * as angular from 'angular';
import '../../node_modules/reload/lib/reload-client.js'
import config from './app.config'
import run from './app.run';
import core from './core/core.module';
import 'angular-ui-router';

import LayoutComponent from './layout/layout.module';
import HomeComponent from './home/home.module';
import DeckBuilderComponent from './deckBuilder/deckBuilder.module';
import BrainEatersComponent from './brainEaters/brainEaters.module';
import DogsListComponent from './dogsList/dogsList.module';
import D3Component from './d3Demo/d3Demo.module';
import MoAnimationComponent from './moAnimation/moAnimation.module';
 
const name = 'app';
const dependencies = [
  'ui.router',
  core, //YOUR CORE DEPENDENCIES
  HomeComponent,
  LayoutComponent,
  DeckBuilderComponent,
  BrainEatersComponent,
  DogsListComponent,
  D3Component,
  MoAnimationComponent
];

angular.module(name, dependencies)
  .config(config)
  .run(run);

angular.bootstrap(document.body, [name], { strictDi: true });
