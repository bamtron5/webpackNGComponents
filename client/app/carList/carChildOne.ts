import * as angular from 'angular';

const name = 'carChildOne';

class CarChildOne {
  public carOne;
  constructor() {
    console.log(this.carOne);
  }
}

export default angular.module('app.carChildOne', [])
  .component(name, {
    template: '<car-child-two car-two="vm.carOne"></car-child-two>',
    controller: CarChildOne,
    controllerAs: 'vm',
    bindings: {
      carOne: '<'
    }
  })
  .name;
