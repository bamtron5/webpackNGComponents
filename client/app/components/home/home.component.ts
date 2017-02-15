import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

const componentName = 'home';
const template = '/client/app/components/home/home.html';

namespace App.Components {
  export class Home {
    public name:string;
    public things:Array<string>;
    constructor() {
      this.name = 'Home';
      this.things = [
        'Sofa',
        'Desk',
        'Computer',
        'Chair',
        'Stuff',
        'Things' 
      ];
    }
  }

  Home.$inject = [];
}
export default angular.module('App.components.home', [])
  .component(componentName, {
    controller: App.Components.Home,
    templateUrl: template,
    controllerAs: 'vm'
  })
  .name;
