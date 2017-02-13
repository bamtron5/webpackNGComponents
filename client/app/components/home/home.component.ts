import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

const componentName = 'home';
const template = '/client/app/components/home/home.html';

class Home {
  public name:string;
  public things:Array<string>;
  constructor() {
    this.name = 'Home';
    this.things = [
      'Sofa',
      'Desk',
      'Computer',
      'Chair'
    ];
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
