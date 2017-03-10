import * as angular from 'angular';

const name = 'carChildTwo';

class CarChildTwo {
  // public $onInit;
  public carTwo;
  public carLoaded;
  constructor() {
    // this.$onInit = function() {
    //   console.log('hello');
    //   this.carLoaded = this.carTwo;
    // }
  }
}

export default angular.module('app.carChildTwo', [])
  .component(name, {
    template: '<pre>{{vm.carTwo}}</pre>',
    controller: CarChildTwo,
    controllerAs: 'vm',
    bindings: {
      carTwo: '<'
    }
  })
  .name;
