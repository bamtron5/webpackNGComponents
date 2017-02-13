import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

const componentName = 'widget';
const template = '/client/app/components/widget/widget.html';
namespace App.Components {
  export class Widget {
    public name;
    constructor(
    ) {
      this.name = 'Widget';
    }
  }

  Widget.$inject = [];
}
export default angular.module('App.components.widget', [])
  .component(componentName, {
    controller: App.Components.Widget,
    templateUrl: template,
    controllerAs: 'vm',
    bindings: {
      things: '<'
    }
  })
  .name;
