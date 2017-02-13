import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

const componentName = 'home';
const template = '/client/app/components/home/home.html';

class Home {
  public name;
  constructor() {
    this.name = 'Home';
    console.log('Home component loaded');
  }
}

Home.$inject = [];

export default angular.module('App.components.home', [])
  .component(componentName, {
    controller: Home,
    templateUrl: template,
    controllerAs: 'vm'
  })
  .name;
