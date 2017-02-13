import * as angular from 'angular';
import uiRouter from 'angular-ui-router';

const componentName = 'widget';
const template = '/client/app/components/widget/widget.html';

class Widget {
  public name;
  constructor() {
    this.name = 'Widget';
    console.log('Widget component loaded');
  }
}

Widget.$inject = [];

export default angular.module('App.components.widget', [])
  .component(componentName, {
    controller: Widget,
    templateUrl: template,
    controllerAs: 'vm'
  })
  .name;
